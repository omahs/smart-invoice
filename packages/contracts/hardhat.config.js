require('hardhat/config');
require('dotenv').config();
require('@nomiclabs/hardhat-ganache');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('solidity-coverage');

const { INFURA_PROJECT_ID, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: '0.8.0',
  },
  paths: {
    artifacts: './build',
  },
  networks: {
    xdai: {
      url: `https://rpc.xdaichain.com`,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 1000000000,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ganache: {
      url: 'http://127.0.0.1:8555',
      defaultBalanceEther: 1000,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
