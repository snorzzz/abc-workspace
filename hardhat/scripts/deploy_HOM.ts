import { ethers } from "hardhat";

async function main() {
  const HandOfMidas = await ethers.getContractFactory("HandOfMidas");
  const contract = await HandOfMidas.deploy(100000);
  await contract.waitForDeployment();
  console.log(
    `deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});