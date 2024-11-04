const { jobs } = require("../models/jobs");
const fs = require("fs").promises;
async function readJSON(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function writeJSON(object, filename) {
  try {
    const allObjects = await readJSON(filename);
    allObjects.push(object);
    await fs.writeFile(filename, JSON.stringify(allObjects), "utf8");
    return allObjects;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function applyjob(req, res) {
  try {
    const name = req.body.name;
    const age = req.body.age;
    const education = req.body.education;
    const phone = req.body.phone;

    // Validate input
    if (!phone || phone.length < 6) {
      return res.status(500).json({ message: 'Validation error: phone number must be at least 6 digits' });
    } else {
      // Create a new resource with the correct fields
      const newjob = { name, age, education, phone };

      // Write the new resource to the JSON file
      const updatedjob = await writeJSON(newjob, 'utils/jobs.json');
      return res.status(201).json(updatedjob);
    }
  } catch (error) {
    // Handle errors
    return res.status(500).json({ message: 'An error occurred', error });
  }
}

module.exports = {
  readJSON,
  writeJSON,
  applyjob
};
