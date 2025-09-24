export async function getusers(req, res) {
    try {
        res.send("todos los usuarios")
    } catch (error) {
        console.log(error)
    }
}

export async function  createusers (req, res){
    try {
        res.send("usuario creado")
    } catch (error) {
        console.log(error)
    }
}

export async function  updateusers (req, res){
    try {
        res.send("usuario actualizado")
    } catch (error) {
        console.log(error)
    }
}

export async function  deleteusers (req, res){
    try {
        res.send("usuario eliminado")
    } catch (error) {
        console.log(error)
    }
}