import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyNFT", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const AnVai = await ethers.getContractFactory("FiredGuys");
    const anvai = await AnVai.deploy();
    await anvai.deployed();

    const recipient = '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199';
    const metadataURI = 'cid/test.png';

    let balance = await anvai.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await anvai.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.05') });

    // wait until the transaction is mined
    await newlyMintedToken.wait();

    balance = await anvai.balanceOf(recipient)
    expect(balance).to.equal(1);

    expect(await anvai.isContentOwned(metadataURI)).to.equal(true);
    const newlyMintedToken2 = await anvai.payToMint(recipient, 'foo', { value: ethers.utils.parseEther('0.05') });
  });
});