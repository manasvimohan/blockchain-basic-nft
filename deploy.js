const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    // 1. Set up the RPC node, using alchemy or infura link.
    let provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_RPC_URL) // Change to mainnet if needed
    
    // 2. Tell the wallet private key, with which deployment will happen.
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider) // Wallet private key
    
    // 3. Load the ABI. Note: Before the below, make sure you have already run "yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o ./artifacts/ BasicNft.sol"
    const abi = fs.readFileSync("./artifacts/BasicNft_sol_BasicNft.abi", "utf8") // Load ABI
    
    // 4. Loading the contract binary
    const binary = fs.readFileSync(
        "./artifacts/BasicNft_sol_BasicNft.bin",
        "utf8"
    )
    
    // 5. Setting up the contract factory for ethers, so that we can start the process of deployment.
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("Deploying, please wait...")
    
    // 6. Calling deploy function
    const contract = await contractFactory.deploy()
    
    // 7. Waiting for contract to deploy and provide its address
    const deploymentReceipt = await contract.deployTransaction.wait(1)
    console.log(`Contract deployed to ${contract.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
