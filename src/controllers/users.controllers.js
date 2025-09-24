export async function getUsers(req, res) {
    try {
        res.send("todos los usuaruios")
    } catch (error) {
        console.log(error)
    }
}