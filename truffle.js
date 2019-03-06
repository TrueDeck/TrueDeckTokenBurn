// Allows us to use ES6 in our migrations and tests.
require("babel-register");
require("babel-polyfill");

var HDWalletProvider = require("truffle-hdwallet-provider");

let mnemonic = "total survey degree bench road decide hello develop amount video rain top";
let infura_apikey = "v3/8b0fd12d481047628be5918e1891c438";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey);
            },
            network_id: 3,
            gas: 4600000
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/" + infura_apikey);
            },
            network_id: 1,
            gas: 4600000
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};
