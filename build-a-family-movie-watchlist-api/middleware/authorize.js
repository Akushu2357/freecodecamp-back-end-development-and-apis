export function authorizeModification(req, res, next) {
    const { user } = req;
    const isParent = user?.role === "parent";
    const isOwnWatchlist = String(user?.id) === String(req.params.userId);
    const isChild = user?.role === "child" && isOwnWatchlist;

    if (!isParent && !isChild) {
        return res.status(403).json({ error: "Access denied" });
    }

    next();
}