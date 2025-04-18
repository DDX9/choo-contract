# Wallets
Choo choo spirits contract utilise Hot & Cold Wallet to manage contract ownership due to inflexibility of zkSync custom library to support hardware wallet signing

trezor passphrase and hot wallet private keys on separated google sheet instead.

## Staging Hardware wallets (Trezor Enginner)
Staging cold wallet address: 0x6827633c5357C04fCB51Ee82EeE31dc3F690a04D
### Hot wallet ( Contract holder )
Address: 0x678F9929c9f855D911Cb87CeF1069e56EAdb0065
## Production Hardware wallets (Trezor Enginner)
Production cold wallet address: 0x30c3CED08A27e7Ba1A7c6593a633522C327FCaab
### Hot wallet ( Contract holder )
Address: 0xCD08b7A911e6656912d7c5250472bD344945b14f

# Contract Address
## Check In
### Staging
    20th Mar 2025:  0xBB34dae6b5a68AaA89F5617ADdB4b966389f8331
### Production
    20th Mar 2025: 0x44f5663030fE1b671fe540a2Ba5de309aae4b2AF


Production:

# Quick Command
1. to deploy contract on zksyc network
``` yarn hardhat compile && yarn hardhat deploy-zksync --script deployCheckInAnnounce.ts --network zkCandySepoliaTestnet ```
2. the deployment will auto verify the contract as well


# zkCandy deployment guide
1. run the following command to deploy contract by specifying network 
```yarn hardhat clean && npx hardhat compile && npx hardhat deploy-zksync --network zkCandySepoliaTestnet --script deployCheckInAnnounce.ts --show-stack-traces```


## hardhat console command
To interact with any given network run: 
```
yarn hardhat console --network XXXX
```
### send transaction
```
let signer = await ethers.getSigners()
let me = signer[0]
me.sendTransaction({to:<xxx>,values:<xxx>})
```

### contract interaction
```
const contract  = hre.ethers.getContractAt(<contract name>,<address>)
await contract.checkin()
```



# ZKsync Hardhat project template

This project was scaffolded with [zksync-cli](https://github.com/matter-labs/zksync-cli).

## Project Layout

- `/contracts`: Contains solidity smart contracts.
- `/deploy`: Scripts for contract deployment and interaction.
- `/test`: Test files.
- `hardhat.config.ts`: Configuration settings.

## How to Use

- `npm run compile`: Compiles contracts.
- `npm run deploy`: Deploys using script `/deploy/deploy.ts`.
- `npm run interact`: Interacts with the deployed contract using `/deploy/interact.ts`.
- `npm run test`: Tests the contracts.

Note: Both `npm run deploy` and `npm run interact` are set in the `package.json`. You can also run your files directly, for example: `npx hardhat deploy-zksync --script deploy.ts`

### Environment Settings

To keep private keys safe, this project pulls in environment variables from `.env` files. Primarily, it fetches the wallet's private key.

Rename `.env.example` to `.env` and fill in your private key:

```
WALLET_PRIVATE_KEY=your_private_key_here...
```

### Network Support

`hardhat.config.ts` comes with a list of networks to deploy and test contracts. Add more by adjusting the `networks` section in the `hardhat.config.ts`. To make a network the default, set the `defaultNetwork` to its name. You can also override the default using the `--network` option, like: `hardhat test --network dockerizedNode`.

### Local Tests

Running `npm run test` by default runs the [ZKsync In-memory Node](https://docs.zksync.io/build/test-and-debug/in-memory-node) provided by the [@matterlabs/hardhat-zksync-node](https://docs.zksync.io/build/tooling/hardhat/hardhat-zksync-node) tool.

Important: ZKsync In-memory Node currently supports only the L2 node. If contracts also need L1, use another testing environment like Dockerized Node. Refer to [test documentation](https://docs.zksync.io/build/test-and-debug) for details.

## Useful Links

- [Docs](https://docs.zksync.io/build)
- [Official Site](https://zksync.io/)
- [GitHub](https://github.com/matter-labs)
- [Twitter](https://twitter.com/zksync)
- [Discord](https://join.zksync.dev/)

## License

This project is under the [MIT](./LICENSE) license.