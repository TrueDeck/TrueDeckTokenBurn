# TrueDeckTokenBurn
Smart-Contract to burn TrueDeck TDP Tokens.

---

## Smart-Contract Deployments on Mainnet

### TDP Token:
https://etherscan.io/token/0x5b11aacb6bddb9ffab908fdce739bf4aed554327

### TokenBurner:
https://etherscan.io/address/0x853f5a4e796a7494baa4eedb7e31ddf8ab3f1dca

---

## Smart-Contract Deployments on Ropsten

### TDP Token:
https://ropsten.etherscan.io/token/0x861b765d069bb08c4c8fc294cebfb4e85d2ca8b0

### TokenBurner:
https://ropsten.etherscan.io/address/0xa274564b895323d32df4c81eaa32988a6d116e88

### Token TX to TokenBurner:
100,000,000 TDP Tokens (Ropsten) allocated to [TokenBurner smart-contract](https://ropsten.etherscan.io/address/0xa274564b895323d32df4c81eaa32988a6d116e88)

https://ropsten.etherscan.io/tx/0x319928175cbddfc220edbe44b53e395f6320c56bba0a506e28ba42cb475cd391

### TokenBurner Burn (Self Destruct):
TokenBurner's `burn()` method called to self-destruct the smart-contract.

https://ropsten.etherscan.io/tx/0x57b839226624290859c9e03c9636520b7f61c1af90e0e4d6d21eb93bb130480f#internal

After which, smart-contract code is not accessible and tokens sent are stuck forever.

https://ropsten.etherscan.io/address/0xa274564b895323d32df4c81eaa32988a6d116e88#code
