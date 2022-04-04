const hre = require("hardhat");

async function main() {

  const AnVai = await hre.ethers.getContractFactory("AnVai");
  const anvai = await AnVai.deploy();

  await anvai.deployed();

  console.log("My NFT deployed to:", anvai.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });