const MainClient = require("./hyper");
const client = new MainClient();
client.connect();

module.exports = client; 
