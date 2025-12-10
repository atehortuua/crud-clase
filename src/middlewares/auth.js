import { decodeToken } from "../helpers/jwt.js";




export function validarToken(req, res, next){
    const token = req.headers.authorization?.split(' ')[1];
    if (!token){
        return res.status(401).json({
          ok : false,
          message: 'token no proporcionado'  
        });
    }

console.log('tok midd', token)
const result = decodeToken(token);

if (!result.ok){
    return res.status(403).json({
        ok:false,
        message:'token inavlido o expirado',
        error: result.error
    });
}

req.userId = result.payload.id;

next();

}