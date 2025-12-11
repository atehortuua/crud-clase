import express from "express";
import { addVote, getVotesByProduct, getVoteCount, getAllVotes, getVotesRanking, getVotesRankingByOwner } from "../controllers/vote.controller.js";

const routerVotes = express.Router();


routerVotes.get("/", getAllVotes);

routerVotes.get("/ranking", getVotesRanking);

routerVotes.get("/ranking/owner", getVotesRankingByOwner);

routerVotes.post("/add/:id", addVote);

routerVotes.post("/:productId", getVotesByProduct);

routerVotes.post("/:productId/count", getVoteCount);





export default routerVotes;
