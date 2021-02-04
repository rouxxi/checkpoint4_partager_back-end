var jwt = require('jsonwebtoken');
const verification = {};

verification.jsonWebToken = (req, res, next) => {
    if (req.headers.authorization !== undefined) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT, (err) => {
            if (err) {
                res
                    .status(401)
                    .json({ errorMessage: "Vous n'etes pas autorisez d'entré dans cette section !" });
            } else {
                next();
            }
        });
    } else {
        res
            .status(401)
            .json({ errorMessage: "Vous n'etes pas autorisez d'entré dans cette section !" });
    }
};

module.exports = verification;