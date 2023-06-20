# Send Transaction on Elysium Network

In this guide, you'll learn how to use the Ethers.js library to send a transaction and deploy a contract on Elysium
Mainnet or Testnet. This guide can be adapted for [Elysium](https://blog.elysiumchain.tech/docs/networks/elysium-chain)

> **_NOTE:_**
>
> For complete guide follow the [Elysium documentation](https://blog.elysiumchain.tech)

Open terminal and follow these code to check balance and transfer

- Clone the code.

```angular2html
git clone https://github.com/SlmnVaival/elysium-docs-ethers.js.git
```

- Change the directory.

``` 
cd elysium-docs-ethers.js
```

- Install libraries.

```angular2html
npm ci
```

- Change the environment variables in .env file `TO_ADDRESS`, `FROM_ADDRESS`, `RPC_ENDPOINT`, `PRIVATE_KEY` and to
  switch on different network change `CHAIN_ID`, `RPC_ENDPOINT`

- To check the balances of account, Run this script in terminal

``` angular2html
  node balance.js
```

- To send transaction, Run this script in terminal

 ``` angular2html
node transaction.js
```