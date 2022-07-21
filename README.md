# Installation
* yarn init
* yarn add --dev ethers dotenv solc @openzeppelin/contracts fs-extra

# Workflow
1. Create solidity file. [BasicNft.sol](BasicNft.sol)
2. Create deployment file. [deploy.js](deploy.js)
3. Compile the solidity file

```bash
yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o ./artifacts/ BasicNft.sol
```

4. Update the following in the .env file:
    1. Private Key of wallet from which deployment will be done.
    2. Alchemy node RPC. Get it from https://alchemy.com/?r=Dk4NTc0NjA4MzUyM
5. Deploy using the script by running

```bash
node ./deploy.js
```
