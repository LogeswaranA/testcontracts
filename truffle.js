require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks:{
    ropsten:{
      provider : function(){
        return new HDWalletProvider(
         `novel loop surround depth trade fire aerobic same dumb student market number`,
          `https://ropsten.infura.io/v3/f5c7e5dd1dc043a483c77cfcd69683a5`
        );
      },
     gas:270000,
     gasPrice:44,
     network_id: "3"
    },
  ganache:{
    host:"127.0.0.1",
    port:7545,
    network_id: "*"
    }
  },
  solc:{
    optimizer:{
      enabled:true,
      runs:200
    }
  }

};
