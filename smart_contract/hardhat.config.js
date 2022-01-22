 
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TzB-mb5mzn5xHPyI1sjBfRauD6Loldw2',
      accounts: ['ca16b802220c2972faecaf4ed81d24d8d7e2cc1d8bb9909fb0be06870ac90200']
    }
  }
}