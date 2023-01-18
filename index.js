
import { createRequire } from 'module';
//const require = createRequire(import.meta.url);
//const inquirer = require('inquirer')

import inquirer from 'inquirer';
import fs from 'fs'
import util from 'util'

//const fs = require("fs");
//const util = require("util");
// Variables to connect modules to application
// const generateMarkdown = require("./utils/generateMarkdown");
// const licenseBadge = require("./utils/licenseBadge").licenseBadge;
// const questions = require("./utils/questions").questions;
// //Allows for use of async await
// const writeFileAsync = util.promisify(fs.writeFile);

import generateMarkdown from './utils/generateMarkdown.js';
import licenseBadge from './utils/licenseBadge.js';
import questions from './utils/questions.js';
import { writeFileSync } from 'fs';


// function to initialize program and create README file
async function init() {
  try {
     const answers = await inquirer.prompt(questions);
      answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    writeFileSync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}
// function call to initialize program
init();