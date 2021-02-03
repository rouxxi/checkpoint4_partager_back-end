const connection = require('../service/mysql/connection');
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

module.exports = usersController;