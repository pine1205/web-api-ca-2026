import mongoose from 'mongoose';


const favouriteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    movieId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    posterPath: {
      type: String,
    },
    addedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Prevent duplicate favourites per user
favouriteSchema.index({ userId: 1, movieId: 1 }, { unique: true });

module.exports = mongoose.model("Favourite", favouriteSchema);