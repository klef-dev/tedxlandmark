const router = require("express").Router();
const { create } = require("../app/Controllers/TicketController");
router.post("/", create);
module.exports = router;
