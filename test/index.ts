import { expect } from "chai";
import { ethers } from "hardhat";

describe("ExLanceCoin", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const SMC = await ethers.getContractFactory("ExLanceCoin");
    const smc = await SMC.deploy("ExLance Coin", "EXLC");

    const mintRole = await smc.MINTER_ROLE();

    expect(await smc.hasRole(mintRole, owner.address)).to.equal(true);

    const tx = await smc.connect(owner).mint(owner.address, "1000000000000000000000000");
    await tx.wait();

    const balance = await smc.balanceOf(owner.address);
    expect(await smc.totalSupply()).to.equal(balance);
  });
});
