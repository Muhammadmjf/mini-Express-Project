const { model, Schema } = require("mongoose");

const BookSchema = new Schema(
  {
    BookTitle: { type: String, required: true },
    BookAuthor: { type: String, required: true },
    BookPrice: { type: Number, default: 5 },
    BookImage: {
      type: String,
      // default: `assest/harrypotter.jpg`,
      // default: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_logo&psig=AOvVaw1aCEiV5slhyRfEL882_7mE&ust=1706027277255000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCYj4G18YMDFQAAAAAdAAAAABAD`,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Book", BookSchema);
