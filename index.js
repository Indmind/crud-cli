const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// connect to database
const db = mongoose.connect('mongodb://localhost:27017/crud_cli', {
    useMongoClient: true
});

// import model
const Customer = require('./models/customer');

// add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info("New Customer Added");
        db.close();
    })
};


// find customer
const findCustomer = name => {
    // make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstName:search}, {lastName:search}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} Matches`);
            db.close();
        })
};

// udate customers
const updateCustomer = (_id, customer) => {
    Customer.update({_id}, customer)
        .then(customer => {
            console.info("Customer Updated");
            db.close();
        });
};

// remove customers
const removeCustomer = (_id) => {
    Customer.remove({_id})
        .then(() => {
            console.info("Customer Removed");
            db.close();
        });
};

// list all customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} Data`);
            db.close();
        })
};

// export all modules
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}