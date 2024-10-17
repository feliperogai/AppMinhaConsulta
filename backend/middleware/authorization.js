const authorizeUser = (req, res, next) => {
    const userId = req.user.id;
    const role = req.user.role;

    req.userId = userId;
    req.role = role;

    next();
};

module.exports = authorizeUser;
