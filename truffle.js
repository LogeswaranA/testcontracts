require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks:{
    ropsten:{
      provider : function(){
        return new HDWalletProvider(
         process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
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
