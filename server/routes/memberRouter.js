import {
  getAllMembers,
  createMember,
  editMember,
  getMember,
  deleteMember,
} from "../controllers/memberControllers.js";
import express from "express";

export const router = express.Router();

// GET all members from json file
router.get("/", getAllMembers);
// POST Create new member
router.post("/", createMember);
// PUT Edit member
router.put("/", editMember);

// GET specific member by id
router.get("/:id", getMember);
// DELETEs member by id
router.delete("/:id", deleteMember);
