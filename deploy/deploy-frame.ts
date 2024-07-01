import ethers from "ethers";
import hardhat from "hardhat";

hardhat.zksyncEthers.Provider;
// Configure the Frame.sh provider
const frameProvider = new hardhat.zksyncEthers.JsonRpcProvider(
  "http://localhost:1248"
);

// Create a signer from the Frame.sh provider
const frameSigner = frameProvider.getSigner();

import hre from "hardhat";
// import { ethers } from "ethers";

async function main() {
  // Configure the Frame.sh provider
  const frameProvider = new ethers.JsonRpcProvider("http://localhost:1248");

  // Create a signer from the Frame.sh provider
  const frameSigner = frameProvider.getSigner();

  // Compile the contracts
  await hre.run("compile");

  // Get the contract to deploy
  const YourContract = await hardhat.zksyncEthers.getContractFactory(
    "CheckInAnnounce",
    frameSigner
  );

  // Deploy the contract
  const yourContract = await YourContract.deploy(/* constructor arguments */);

  // Wait for the deployment to be mined
  await yourContract.deployed();

  console.log("YourContract deployed to:", yourContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
