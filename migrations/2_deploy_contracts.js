var PixelToken = artifacts.require("../PixelToken/EIP20.sol");

module.exports = function(deployer) {
  deployer.deploy(PixelToken);
};
