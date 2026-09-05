import express from "express";
import { authorizeModification } from "../middleware/authorize.js";
import { addMovie, deleteMovie, getWatchlist, updateMovie } from "../utils/db.js";

const router = express.Router({ mergeParams: true });

router.get("/:userId", (req, res) => {
    const userId = parseInt(req.params.userId);
    const watchlist = getWatchlist(userId);
    return res.status(200).json({ watchlist, test: `userId:${typeof userId}, watchlist:${watchlist}` });
});

router.post("/:userId/movies", authorizeModification, (req, res) => {
    const userId = parseInt(req.params.userId);

    const { title, genre } = req.body;
    const movie = addMovie(userId, { title, genre });
    return res.status(201).json({ message: `Add ${req.body.movieData} completed`, movie });
});

router.put("/:userId/movies/:movieId", authorizeModification, (req, res) => {
    const userId = parseInt(req.params.userId);
    const movieId = parseInt(req.params.movieId);

    const { watched } = req.body;

    const updatedMovie = updateMovie(userId, movieId, { watched });

    if (!updatedMovie) {
        return res.status(404).json({ error: "Movie to update does not exist." });
    }

    return res.status(200).json(updatedMovie);
});

router.delete("/:userId/movies/:movieId", authorizeModification, (req, res) => {
    const userId = parseInt(req.params.userId);
    const movieId = parseInt(req.params.movieId);

    const deleted = deleteMovie(userId, movieId);

    if (!deleted) {
        return res.status(404).json({ error: "Movie to delete does not exist." });
    }

    return res.status(200).json({ message: `Delete ${movieId} completed` });
});

export default router;