# TrueDeckTokenBurn
Smart-Contract to burn TrueDeck TDP Tokens.

---

## Smart-Contract Deployments on Mainnet

### TDP Token:
https://etherscan.io/token/0x5b11aacb6bddb9ffab908fdce739bf4aed554327

### Phase #1 - [TokenBurner holding 50,000 TDP](https://etherscan.io/address/0x853f5a4e796a7494baa4eedb7e31ddf8ab3f1dca#code)
Description | Value
:---: | :---:
Duration | 24 to 30 March
Total tokens to burn | 50,000 TDP
TokenBurner Smart-Contract | [0x853f...1dca](https://etherscan.io/address/0x853f5a4e796a7494baa4eedb7e31ddf8ab3f1dca)
50,000 TDP Transaction | [0x8fc9...6ee5](https://etherscan.io/tx/0x8fc96e9cac749040a2f4b54015b5e82112c14f35574648700cb9917cafcd6ee5)
TokenBurner's `burn()` call | [0x2d34...9c2d](https://etherscan.io/tx/0x2d3497f631d36b4663095afc5a22cafba1ce25155d4c3a2c21510b334bb89c2d)

After which, smart-contract code is not accessible and tokens sent are stuck forever.

---

### Phase #2 - [TokenBurner holding 100,000 TDP](https://etherscan.io/address/0x2d14dcab0974361dd6fd6071f0ad88742522e9bf#code)
Description | Value
:---: | :---:
Duration | 1 to 7 April
Total tokens to burn | 100,000 TDP
TokenBurner Smart-Contract | [0x2d14...e9bf](https://etherscan.io/address/0x2d14dcab0974361dd6fd6071f0ad88742522e9bf)
100,000 TDP Transaction | [0x360c...1057](https://etherscan.io/tx/0x360c6aaa147462a47a5eecf2509274a869db4ec187f3209275de5cf7f2af1057)
TokenBurner's `burn()` call | [0xaa94...4fb7](https://etherscan.io/tx/0xaa9437f369549a1cc7a420b8c0553e3617d4b11894937c36b2225ba9c0f94fb7)

After which, smart-contract code is not accessible and tokens sent are stuck forever.

---

### Phase #3 - [TokenBurner holding 500,000 TDP](https://etherscan.io/address/0x66bcc8899b07b9c316fabb8e861602ef1b27fea2#code)
Description | Value
:---: | :---:
Duration | 8 to 14 April
Total tokens to burn | 500,000 TDP
TokenBurner Smart-Contract | [0x66bc...fea2](https://etherscan.io/address/0x66bcc8899b07b9c316fabb8e861602ef1b27fea2)
500,000 TDP Transaction | [0xab83...9670](https://etherscan.io/tx/0xab83090aca580059e2ef1c7de29b5741fb75c5f8fb0dc1459c4711a11a329670)
TokenBurner's `burn()` call | [0x2fcf...168a](https://etherscan.io/tx/0x2fcf16d9221a1df0d1f416b4c11328e53e0b48193bd4c6ea000fe5e4a262168a)

After which, smart-contract code is not accessible and tokens sent are stuck forever.

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
