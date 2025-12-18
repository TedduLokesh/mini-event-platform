const router = require("express").Router(); // ← THIS LINE MUST BE FIRST
const Event = require("../models/Event");
const auth = require("../middleware/auth");
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); // temporary storage

// CREATE EVENT with image upload
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const event = await Event.create({
      title: req.body.title,
      capacity: req.body.capacity,
      creator: req.userId, // ✅ required
      attendees: [],
      image: req.file ? req.file.path : null, // ✅ FIX
    });

    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET ALL EVENTS
router.get("/", async (req, res) => {
  res.json(await Event.find());
});

// RSVP EVENT
router.post("/:id/rsvp", auth, async (req, res) => {
  const event = await Event.findOneAndUpdate(
    {
      _id: req.params.id,
      attendees: { $ne: req.userId },
      $expr: { $lt: [{ $size: "$attendees" }, "$capacity"] },
    },
    { $push: { attendees: req.userId } },
    { new: true }
  );
  if (!event) return res.status(400).send("Full or already joined");
  res.json(event);
});

module.exports = router;
