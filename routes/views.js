const router = require("express").Router();
const {
  index,
  ticket,
  theme,
  speaker,
  schedule,
  team,
  store,
  contact
} = require("../app/Controllers/ViewController");
router.get("/", index);
router.get("/tickets", ticket);
router.get("/navigate-the-future", theme);
router.get("/speakers", speaker);
router.get("/schedule", schedule);
router.get("/team", team);
router.get("/store", store);
router.get("/contact", contact);
module.exports = router;
