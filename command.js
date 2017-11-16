#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} = require("./index");

// Customer question
const question = [
    {
        type: "input",
        name: "firstName",
        message: "First Name"
    },
    {
        type: "input",
        name: "lastName",
        message: "last Name"
    },
    {
        type: "input",
        name: "phone",
        message: "Phone Number"
    },
    {
        type: "input",
        name: "email",
        message: "email"
    }
]

program.version('0.0.1').description('test crud cli');

// add user
// program
//     .command('add <firstName> <lastName> <phone> <email>')
//     .alias('a')
//     .description('add user information')
//     .action((firstName, lastName, phone, email) => {
//         addCustomer({firstName, lastName, phone, email});
//     });

program
    .command("add")
    .alias('a')
    .description('add user information')
    .action(() => {
        prompt(question).then(answers => addCustomer(answers));
    });

program
    .command("find <name>")
    .alias('f')
    .description("find user")
    .action(name => {
        findCustomer(name);
    });

program
    .command("update <_id>")
    .alias('u')
    .description('update user information')
    .action(_id => {
        prompt(question).then(answers => updateCustomer(_id, answers));
    });

program
    .command("remove <_id>")
    .alias('r')
    .description("remove user")
    .action(_id => {
        removeCustomer(_id);
    });

program
    .command("list")
    .alias('l')
    .description("show all user")
    .action(() => listCustomers());

program.parse(process.argv);