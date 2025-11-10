import vote from "../models/vote.model.js";
import { productModel } from "../models/products.models.js";
import { UserModel } from "../models/users.models.js";


export const addVote = async (req, res) =>{
    try {
        const {userId, productId } = req.body;


        const user = await UserModel.findById(userId);
        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

        const product = await productModel.findById(productId);
        if (!product) return res.status(404).json({ msg: "Producto no encontrado" });

        const existingVote = await vote.findOne ({User : userId , product: productId});
        if(existingVote){
            return res.status(400).json({msg: "Ya has votado!!"})
        }

        const newVote = new vote({ User : userId , product : productId});
        await newVote.save();

        await productModel.findByIdAndUpdate(productId, {$inc: {votes: 1}});

        res.status(201).json({msg: "Voto registrado con exito"});

    } catch (error) {
        console.log(error);
        res.status(500).json ({msg: "Ya vostaste gay"})
    }
};

export const getVotesByProduct = async (req, res) => {
    try {
        const {productId} = req.params;
        const votes = await vote.find({product : productId}).populate("user", "name email");

        res.status(200).json(votes)
    
    } catch (error) {
        res.status(500).json({msg : "error al obtener los votos"});
        
    }
};


export const getVoteCount = async (req, res) => {
    try {
        const {productId} = req.params;
        const count = await vote.countDocuments({product : productId});
        res.status(200).json({productId, totalVotes : count})
    } catch (error) {
        res.status(500).json({msg : "error al conatar los votos"})
    }
};

export const add = async (req, res) =>{
    
}


