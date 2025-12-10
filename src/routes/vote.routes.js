import express from "express";
import { addVote, getVotesByProduct , getVoteCount } from "../controllers/vote.controller.js";

const routerVotes = express.Router();

routerVotes.post("/add/:id", addVote);

routerVotes.post("/:productId", getVotesByProduct);

routerVotes.post  ("/:productId/count", getVoteCount);



export default routerVotes;