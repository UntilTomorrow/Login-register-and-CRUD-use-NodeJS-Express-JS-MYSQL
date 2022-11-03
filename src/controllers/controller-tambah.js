const config = require('../configs/database');
let mysql      = require('mysql');
let pool       = mysql.createPool(config);


pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    formtambah(req,res){
        res.render('tambah',{
            url: 'http//localhost:5050/',
            userName: req.session.username,
            Name: '',
            Price:''
            
        })
},
     
    savetambah(req,res){
        let data = { product_name: req.body.Name, product_price: req.body.Price};
        let sql = "INSERT INTO product SET ?";
        let query = pool.query(sql, data,(err, results) => {
                if(err) throw err;
                res.redirect('/tambah')
        });
},

    edittambah(re,res){
        let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
        let query = pool.query(sql,(err, results) => {
            if(err) throw err;
            res.redirect('/tambah');
        });
},


}