const connection = require('../service/mysql/connection');
const bcrypt = require('bcrypt');
const usersController = {};


usersController.findAll = (req, res) => {
    connection.query('SELECT * from user', (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
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
                res.status(200).send(result)
            }
        })
    });

};
module.exports = usersController;