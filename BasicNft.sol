// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNft is ERC721 {
    // Token URI needs to be generated before contract deployment.
    // 1. Upload the main file to IPFS, which we want the NFT out of. Image, mp3, zipped, movie anything.
    //    - IPFS will delete it soon, due to garbage collection; hence we need to pin it.
    //    - Use a service like pinata or nft storage to pin your ipfs upload.
    // 2. Now create a json metadata file, in which you will place the file's ipfs link
    // 3. Then the metadata's ipfs link goes into the TOKEN URI

    string public constant TOKEN_URI = "ipfs://blajblahblah/?filename=MetaData.json"; // Dummy Link is used here
    uint256 private s_tokenCounter;

    constructor() ERC721("DigitalOrganism", "DORG") {
        s_tokenCounter = 0;
    }

    function mintNft() public returns (uint256) {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
        return s_tokenCounter;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
