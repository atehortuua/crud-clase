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

export async function  update (req, res){
    try {
        res.send("subir o")
    } catch (error) {
        console.log(error)
    }
}

export async function  delete (req, res){
    try {
        res.send("o eliminado")
    } catch (error) {
        console.log(error)
    }
}