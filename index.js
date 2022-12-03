const MainClient = require("./swtbot");
const client = new MainClient();
client.connect();

module.exports = client; 

const Hyper = require("./hyper");
const hyperrunner = new Hyper();
hyperrunner.connect();