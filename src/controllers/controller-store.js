const config = require('../configs/database');

let mysql      = require('mysql');
let pool       = mysql.createPool(config);


pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    store(req,res){
        pool.getConnection(function(err, connection){
            connection.query(
                `
                SELECT * FROM product 
                `
            , (error, rows ) => {
                    if (error)
                        throw error;
                    res.render("store", {
                        url: 'http//localhost:5050/',
                        userName: req.session.username,
                        data: rows,
                        
                    });
                });
            connection.release();
        })
    }
}