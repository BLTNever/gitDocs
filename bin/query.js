const inquirer = require("inquirer");

const questions = require("../config/questions");

module.exports = cmdName => inquirer.prompt(questions[cmdName]);
