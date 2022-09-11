const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: Number, required: true },
        pages: { type: Number, required: true, min: 1 },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

BookSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Book", BookSchema);
