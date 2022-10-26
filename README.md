# EXLC Token Smart Contracts

## Overview
This is Utility token in Exlance Ecosystem and based on BEP20.

## Getting Started
Recommended Node version is 16.0.0 and above.

```shell
npm run compile
npm run test
```

## Project Structure
This a hardhat typescript project.

## Tests
Tests are found in the ./test/ folder.

## Contracts
Solidity smart contracts are found in ./contracts/.

## Deploy
Deploy script can be found in the scripts folder.

Add .env file to the project root. To add the private key of a deployer account, assign the following variable

```shell
PRIVATE_KEY=...
BSCSCAN_API_KEY=...
```

example to deploy testnet:
```shell
npm run deploy-testnet
```

example to deploy mainnet:
```shell
npm run deploy-mainnet
```