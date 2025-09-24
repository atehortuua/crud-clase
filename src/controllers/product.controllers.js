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

export async function  updateProduct (req, res){
    try {
        res.send("subir producto")
    } catch (error) {
        console.log(error)
    }
}

export async function  deleteProduct (req, res){
    try {
        res.send("producto eliminado")
    } catch (error) {
        console.log(error)
    }
}