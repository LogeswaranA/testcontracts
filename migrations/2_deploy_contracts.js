var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.then(async() =>{
    await deployer.deploy(SimpleStorage);
  });
};
