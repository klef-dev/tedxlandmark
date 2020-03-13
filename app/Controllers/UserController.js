const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Models/User");
require("tls").DEFAULT_MIN_VERSION = "TLSv1";
const { transporter } = require("../Middlewares/mailer");

class UserController {
  static async register(request, response) {
    const { username, password, confirm_password } = request.body;
    const errors = [];
    if (!username) {
      errors.push({
        text: "Username required",
        field: "username"
      });
    }
    if (!password) {
      errors.push({
        text: "Password required",
        field: "password"
      });
    }
    if (!confirm_password) {
      errors.push({
        text: "Confirm password required",
        field: "confirm_password"
      });
    }
    if (confirm_password != password) {
      errors.push({
        text: "Passwords don't match",
        field: "confirm_password"
      });
    }
    if (errors.length > 0) {
      return response.json({ errors });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const checkUsername = await User.findOne({
      where: { username }
    }).catch(error => {
      response.json({ error });
    });
    if (checkUsername) {
      return response.json({ msg: "Username already exists", error: true });
    }

    await User.create({ username, password: hashPassword }).catch(error => {
      response.json({ error });
    });
    response.json({ msg: "Registeration Successful", error: false });
  }

  static async login(request, response) {
    let { username, password } = request.body;
    let errors = [];
    if (!username) {
      errors.push({
        text: "Please provide your username",
        field: "username"
      });
    }
    if (!password) {
      errors.push({
        text: "Enter your password",
        field: "password"
      });
    }
    if (errors.length > 0) {
      return response.json({
        errors,
        username,
        password
      });
    }
    try {
      const findUser = await User.findOne({ where: { username } });
      if (!findUser) {
        return response.json({
          msg: "One of your credential is wrong and I won't tell you the one",
          error: true
        });
      }
      const match = await bcrypt.compare(password, findUser.password);
      if (match) {
        const user = {
          id: findUser.id,
          username
        };
        const token = jwt.sign(user, process.env.secret, {
          expiresIn: "1h"
        });
        response.cookie("tokenizeMe", token, {
          maxAge: 3600000,
          httpOnly: true
        });
        response.json({ token });
      } else {
        response.json({
          msg: "One of your credential is wrong and I won't tell you which one",
          error: true
        });
      }
    } catch (error) {
      response.json({ msg: "Database error", error: true });
    }
  }

  static async contact(request, response) {
    let { name, email, subject, message } = request.body;
    if (!name || !email || !message) {
      return response.json({
        msg: "Name, email and a message is required",
        error: true
      });
    }
    if (!subject) {
      subject = "Enquiry";
    }

    const mailData = {
      from: email,
      to: "tedxlandmarkuniversity@gmail.com",
      subject,
      template: "contact",
      context: {
        name,
        message
      }
    };

    try {
      await transporter.sendMail(mailData);
      response.json({
        msg: "Message sent successful, we reply you within the next few hours",
        error: false
      });
    } catch (error) {
      response.json({
        msg: `Couldn't send a mail to us, try again later`,
        error: true
      });
    }
  }
}
module.exports = UserController;
