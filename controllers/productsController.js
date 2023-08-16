module.exports = {
    list : (req, res) =>{
        return res.send('Todos los productos')
    },
    addProductOneImage : (req,res) =>{
        return res.render('addProductOneImage')
    }
}