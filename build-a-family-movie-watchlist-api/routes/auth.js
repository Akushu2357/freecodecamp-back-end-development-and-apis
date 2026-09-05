import express from "express";
import bcrypt from "bcryptjs"
import { findByUsername } from "../utils/db.js";
import { createToken } from "../utils/jwt.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Login required username and password" });
    }
    const user = findByUsername(username);
    if (!user) {
        return res.status(401).json({ message: "Not found username" });
    }
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
        return res.status(401).json({ message: "Password is not correct" });
    }
    const token = createToken({
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role
    });
    res.status(200).json({ token: token });
})

export default router;