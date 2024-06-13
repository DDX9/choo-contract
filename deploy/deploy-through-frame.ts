import { ethers, run } from "hardhat";
import { JsonRpcProvider } from "@ethersproject/providers";

async function main() {
  // Configure the Frame.sh provider
  const frameProvider = new JsonRpcProvider("http://localhost:1248");

  // Create a signer from the Frame.sh provider
  const frameSigner = frameProvider.getSigner();

  // Compile the contracts
  await run("compile");

  // Get the contract to deploy
  const YourContract = await ethers.getContractFactory(
    "YourContract",
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
