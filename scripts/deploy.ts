import { ethers, run } from "hardhat";

async function main() {
  const SMC = await ethers.getContractFactory("ExLanceCoin");
  const smc = await SMC.deploy("ExLance Coin", "EXLC");

  console.log("ExLanceCoin address:", smc.address);

  await run("verify:verify", {
    address: smc.address,
    contract: "contracts/ExLanceCoin.sol:ExLanceCoin",
    constructorArguments: ["ExLance Coin", "EXLC"],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
