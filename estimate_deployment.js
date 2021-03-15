var CO2B = artifacts.require("./contracts/co2b.sol");

module.exports = function(callback) {

    CO2B.web3.eth.getGasPrice(function(error, result){
        var gasPrice = Number(result);
        console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

        var CO2BContract = new web3.eth.Contract(CO2B._json.abi);
        var contractData = CO2BContract.getData({data: CO2B._json.bytecode});
        var gas = Number(web3.eth.estimateGas({data: contractData}))


        console.log("gas estimation = " + gas + " units");
        console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
        console.log("gas cost estimation = " + CO2B.web3.fromWei((gas * gasPrice), 'ether') + " ether");

    });
};