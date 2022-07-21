// This file is not used here.
// A basic example was needed, so using ethers and solcjs to perform the task
// If using hardhat, this code will be used to deploy.
// But in that case, contract and deploy folders must have the files, rather than in open.
//
const { ethers } = require("hardhat")

async function main() {
  const BasicNftFactory = await ethers.getContractFactory("BasicNft")
  console.log("==== 01 - Deploying contract")
  const basicNft = await BasicNftFactory.deploy()
  await basicNft.deployed()
  console.log(`==== 02 - Deployed contract to: ${basicNft.address}`)
  }

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
