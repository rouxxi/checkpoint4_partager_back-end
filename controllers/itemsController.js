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
};

itemsController.createItem = (req, res) => {
    const { label, description, linkImage, price, user } = req.body;
    connection.query('INSERT into item SET label = ?,  price = ?, description = ? , picture = ? , creator = ?', [label, price, description, linkImage, user], (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
};

module.exports = itemsController;