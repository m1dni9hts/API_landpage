const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const params = Array(
        request.body.title,
        request.body.description
    )

    const query = "INSERT INTO db_landpage(title,description) VALUES (?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "sucesso",
                    data: results

                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops"
                })

        }
    })
}

module.exports = {
    storeTask
}