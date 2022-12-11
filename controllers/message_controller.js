function hello(req, res){
    res.status(200).send({message: "HOLA"})
}
module.exports = {
    hello
}