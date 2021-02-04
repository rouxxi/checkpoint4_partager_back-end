const connection = require('../service/mysql/connection');
const bcrypt = require('bcrypt');
const usersController = {};
var jwt = require('jsonwebtoken');

usersController.findAll = (req, res) => {
    connection.query('SELECT * from user', (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result.map((user) => {
                return {...user, password: 'hidden' };
            }))
        }
    })
}

usersController.createUser = (req, res) => {
    const { firstName, lastName, nickName, email, password } = req.body;

    bcrypt.hash(password, 10, function(err, hash) {
        connection.query('INSERT into user SET firstName = ?,  lastName = ?, nickName = ? , email = ? , password = ? ', [firstName, lastName, nickName, email, hash], (error, result) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.status(200).send({

                    result: {
                        ...result,
                        password: 'hidden',
                        message: 'Le compte à bien été crée !'
                    },

                })
            }
        })
    });

};

usersController.login = (req, res) => {
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

module.exports = usersController;