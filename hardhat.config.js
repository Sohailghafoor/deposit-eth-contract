require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/WVSqL_ylPlpBRQBG3uiHtuX71YINC8Tg",
      accounts: [
        "0xc766e3df5afcea960863cd45e7b172b2dcf542a74f8f48460f7faf23b0fbb09a",
      ],
    },
  },
  etherscan: {
    apiKey: "GIWJMU3CXQD9SKA6H5RDZT5FZB1B83DXIP",
  },
  solidity: "0.8.4",
};
