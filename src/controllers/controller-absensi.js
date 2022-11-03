module.exports ={
    absensi(req,res){
        res.render("absensi",{
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    }
}