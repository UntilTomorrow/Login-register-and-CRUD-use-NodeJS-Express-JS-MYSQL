const config = require('../configs/database');
let mysql      = require('mysql');
let pool       = mysql.createPool(config);


pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    formedit(req,res){
        pool.getConnection(function(err, connection, rows){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM product WHERE product_id 
                `
                , function (error, rows){
                    if(error) throw error;
                    res.render("edit",{
                        url: 'http://localhost:5050/',
                        userName: req.session.username,
                        ID: rows[0].product_id,
                        Name: rows[0].product_name,
                        Price: rows[0].product_price
                    })                    
                }
            )
        })
},
     
    saveedit(req,res){
        let data = { product_name: req.body.Name, product_price: req.body.Price};
        let sql = "INSERT INTO product SET ?";
        let query = pool.query(sql, data,(err, results) => {
                if(err) throw err;
                res.redirect('/edit')
        });
}


}