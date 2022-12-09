import { nanoid } from "nanoid";
import fs from "fs";
import useSlugify from "../hooks/useSlugify.js";

// Path to json file
const dataPath = "./data/data.json"; // Check path
// Date to new member
const todayDate = new Date().toISOString().slice(0, 10);

// GET all Members from json file
export const getAllMembers = (req, res) => {
  try {
    let data = fs.readFileSync(dataPath);

    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET specific member by id
export const getMember = (req, res) => {
  try {
    let data = fs.readFileSync(dataPath);

    // Gets an updated list containing the specific member
    const getMember = JSON.parse(data).find(
      (member) => member.id === req.params.id
    );

    if (!getMember) {
      throw new Error("Member not found");
    }

    res.json(getMember);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

// DELETEs member by id
export const deleteMember = (req, res) => {
  try {
    let data = fs.readFileSync(dataPath);

    // Check if member exists
    const foundMember = JSON.parse(data).find(
      (member) => member.id == req.params.id
    );

    if (!foundMember) {
      throw new Error("Id does not exist");
    }

    // Removes object with the specific id and returns an updated list
    const updatedData = JSON.parse(data).filter(
      (member) => member.id != req.params.id
    );

    // updatedData replaces the previous data of the json-file
    fs.writeFileSync(dataPath, JSON.stringify(updatedData));

    res.json(`${foundMember.name} has been removed`);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

// POST - Creates new member
export const createMember = (req, res) => {
  try {
    let data = fs.readFileSync(dataPath);

    if (
      !req.body ||
      !req.body.name ||
      !req.body.title ||
      !req.body.presentation
    ) {
      throw new Error("Data was not provided correctly");
    }

    const slugyfiedName = useSlugify(req.body.name);

    let newMember = {
      id: nanoid(),
      slug: slugyfiedName,
      name: req.body.name,
      title: req.body.title,
      presentation: req.body.presentation,
      image: req.body.image,
      skills: req.body.skills,
      phone: req.body.phone,
      mail: req.body.mail,
    };

    // Gets json file and new member
    data = JSON.parse(data);

    // Adds the member to json file
    data.push(newMember);

    // Sends in the updated json-file
    fs.writeFileSync(dataPath, JSON.stringify(data));

    res.json(`${newMember.name} is created!`);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

// PUT Edit member
export const editMember = (req, res) => {
  try {
    let data = fs.readFileSync(dataPath);

    if (
      !req.body ||
      !req.body.name ||
      !req.body.title ||
      !req.body.presentation
    ) {
      throw new Error("Data was not provided correctly");
    }

    data = JSON.parse(data);

    // Find index and also checks if the member exists.
    const findIndex = data.findIndex((member) => member.id == req.body.id);

    if (findIndex == -1) {
      throw new Error("Id does not exist");
    }

    // Gets previous object before it gets edited (for use to feedback)
    const findMember = data.find((member) => member.id == req.body.id);

    const slugyfiedName = useSlugify(req.body.name);

    let updateMember = {
      id: req.body.id,
      slug: slugyfiedName,
      name: req.body.name,
      title: req.body.title,
      presentation: req.body.presentation,
      image: req.body.image,
      skills: req.body.skills,
      phone: req.body.phone,
      mail: req.body.mail,
    };

    // Updates the previous member with updated info
    data[findIndex] = updateMember;

    // Sends in the updated json-file
    fs.writeFileSync(dataPath, JSON.stringify(data));

    res.json(`Member ${findMember.name} has now ben updated with new info!`);
  } catch (err) {
    res.status(404).json(err.message);
  }
};
