var CO2B = artifacts.require("../contracts/co2b.sol");
module.exports = function(deployer, network, accounts) {
 deployer.deploy(CO2B, 20000000, "CO2B", "CO2B");
};