const connection = require('../../service/mysql/connection');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const verification = {};


verification.email = (req, res) => {
    const { email, password } = req.body;

    connection.query('SELECT * from user WHERE email = ?', [email], (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            if (result.length < 1) {
                res.status(403).send('Email non enregistré !')
            } else {
                bcrypt.hash(password, 10, function(errors, hash) {
                    bcrypt.compare(result[0].password, hash, function(error, resu) {
                        if (resu) {
                            const token = jwt.sign({ user: result[0].id }, process.env.JWT, { expiresIn: '1h', })
                            res.status(200).send({
                                success: true,
                                message: `Bienvenu ${result[0].nickName}`,
                                user: {...result[0], password: 'hidden' },
                                token: token
                            })
                        } else {
                            res.status(403).send('Mot de pass incorrect !')
                        }
                    });
                });
            }
        }
    });
}


// verification.token = (req, res) => {
//     const { userId } = req.body;
//     jwt.sign({ foo: }, process.env.JWT, { algorithm: 'RS256' }, function(err, token) {
//         console.log(token);
//     })
// };

module.exports = verification;