export async function getproduct(req, res) {
    try {
        res.send("todos los productos")
    } catch (error) {
        console.log(error)
    }
}

export async function  createProduct (req, res){
    try {
        res.send("producto creado")
    } catch (error) {
        console.log(error)
    }
}

export async function  updateUser (req, res){
    try {
        res.send("usuario actualizado")
    } catch (error) {
        console.log(error)
    }
}

export async function  deleteUser (req, res){
    try {
        res.send("usuario eliminado")
    } catch (error) {
        console.log(error)
    }
}