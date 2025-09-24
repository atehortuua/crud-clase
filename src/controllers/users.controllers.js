export async function getUsers(req, res) {
    try {
        res.send("todos los usuaruios")
    } catch (error) {
        console.log(error)
    }
}

export async function  createUsers (req, res){
    try {
        res.send("usuario creado")
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