const connection = require('../service/mysql/connection');
const itemsController = {};


itemsController.findAll = (req, res) => {
    connection.query('SELECT * from item', (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
}

module.exports = itemsController;