const Book = require("../../models/Books");

//all Book
const GetAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
///get Book by id

const GetOneBookbyID = async (req, res, next) => {
  try {
    return res.status(200).json(req.book);
  } catch (error) {
    next(error);
  }
};

// add new book from body//
const CreateaBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};
// DElete one book
const DeleteaBook = async (req, res, next) => {
  try {
    await Book.deleteOne(req.book);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
///update a book
const UpdateaBook = async (req, res, next) => {
  try {
    await req.book.UpdateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  GetAllBooks,
  CreateaBook,
  DeleteaBook,
  GetOneBookbyID,
  UpdateaBook,
};
