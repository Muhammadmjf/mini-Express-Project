const express = require("express");
const router = express.Router();
const Books = require("../../models/Books");

const {
  UpdateaBook,
  GetAllBooks,
  GetOneBookbyID,
  CreateaBook,
  DeleteaBook,
} = require("./controllers");
const upload = require("../../middlewares/multer");

//
router.param("_id", async (req, res, next, _id) => {
  const book = await Books.findById(_id);
  if (!book)
    return res
      .state(404)
      .json({ message: `book with the id ${id},was not found` });
  req.book = book;
  next();
});

router.put("/:_id", UpdateaBook);
router.get("/", GetAllBooks);
router.get("/:_id", GetOneBookbyID);
router.post("/", upload.single("BookImage"), CreateaBook);
router.delete("/:_id", DeleteaBook);

module.exports = router;
