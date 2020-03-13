module.exports = class ViewController {
  static index(request, response) {
    response.render("index");
  }
  static ticket(request, response) {
    response.render("tickets");
  }
  static theme(request, response) {
    response.render("theme");
  }
  static speaker(request, response) {
    response.render("speakers");
  }
  static schedule(request, response) {
    response.render("schedule");
  }
  static team(request, response) {
    const team = [
      {
        name: "Oluwatobi Adewoye",
        position: "COMMUNICATIONS DIRECTOR",
        bio: `Tobi is currently a 5th year student of Electrical and
        Information engineering in Landmark University, Nigeria. He is a person of
        competence, character and capacity. Tobi has great communication and leadership
        skills. Tobi is currently the Communications director for TEDx Landmark
        University and has great desire and drive in programming languages such as
        Python and HTML. Tobi loves soccer and has great passion for Manchester
        United.`,
        image: "tobo.jpg",
        ig: "theonlytobo",
        twitter: "theonlytobo1"
      },
      {
        name: "Ogebe Emmanuel",
        position: "PROTOCOL",
        bio: `He is currently a 5th year student of Electrical and Information
        engineering in Landmark University. Emmanuel is a global citizen, human rights
        activist, lover of all things sensible and logical. Emmanuel is the budgeting and
        planning manager for TEDx Landmark University. Emmanuel enjoys intellectual
        conversations on business, politics, economy and technology. Emmanuel loves
        food and is a hard-core supporter of Lionel Messi, FC Barcelona, Chelsea FC and
        pre-2018 Juventus.`,
        image: "emma2.jpg",
        ig: "emmanuel_ogebe",
        twitter: "emmanuel_ogebe"
      },
      {
        name: "Arongbolo Samuel",
        position: "EXECUTIVE PRODUCER",
        bio: `Samuel is a 5th year student of Landmark University,
        studying Electrical and Information and Engineering, with a great love for tech and
        knowledge. Samuel is the current executive producer for TEDx Landmark
        University as well as campus director for Hult Prize Landmark University. Samuel
        is a big fan of the NBA, Golf and Factual conversations.`,
        image: "bayo.jpg",
        ig: "",
        twitter: "SamuelArogbonlo"
      },
      {
        name: "Okpere Manuella",
        position: "EVENT MANAGER",
        bio: `Ella is a 2nd year student of Landmark University, studying
        Agriculture. Ella enjoys giving back to the society and is the event manager for
        TEDx Landmark University. Ella is passionate about books, loves lip sync and
        likes food. Ella is big fan of soccer and Manchester united.`,
        image: "manuella.jpg",
        ig: "okpereo",
        twitter: ""
      },
      {
        name: "Kemi Adeleye",
        position: "MARKETING DIRECTOR",
        bio: `She is currently a 4th year student of Accounting in Landmark
        University. Kemi is currently the sponsorship and ticketing manager for TEDx
        Landmark University, Kemi is passionate about Music, humanitarian services and
        enjoys an organized life. Kemi loves playing games and dancing and occasionally
        looking for trouble`,
        image: "kemi.jpg",
        ig: "adekemyy",
        twitter: ""
      },
      {
        name: "Uloko Gloria",
        position: "BUDGET MANAGER",
        bio: `Gloria is a 4th year student of landmark university, studying
        Computer science. Gloria is the current protocol manager TEDx Landmark
        University.Gloria is passionate about singing, playing games, watching movies and
        novels. Gloria enjoys writing and reading.`,
        image: "gloria.jpg",
        ig: "__ndidi",
        twitter: "__ndidi"
      },
      {
        name: "Abraham Ugbeshe",
        position: "WEBSITE MANAGER",
        bio:
          "Abraham Ugbeshe is a self driven developer and has worked on different roles ranging from backend to devops",
        image: "me2.jpg",
        ig: "klefcodes",
        twitter: "klefcodes"
      },
      {
        name: "Olusoga Olulana",
        position: "DESIGNER/ VIDEOGRAPHER",
        bio: `Soga is currently a 5th year student of Electrical and
        Information engineering in Landmark University. Soga is a motion graphics artist
        and occasionally transitions in graphics design. Soga is the design lead for TEDx
        Landmark University, Soga enjoys music and in his free time he codes and
        produces for the next billion users.`,
        image: "IMG-1457.jpg",
        ig: "untethered_v",
        twitter: "_Dayv_e"
      }
    ];
    response.render("team", { team });
  }
  static store(request, response) {
    response.render("store");
  }
  static contact(request, response) {
    response.render("contact");
  }
};
