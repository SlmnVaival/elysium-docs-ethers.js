import {ethers, provider} from './provider-connection.js'

const addressFrom = '0x347D567d5727c0318f0A4F498b605403F2808348'; // Sender Wallet address
const addressTo = '0x83263dFda155DaC0b78Db23dcbB095322BD35783'; // Receiver Wallet address

// 3. Create balances function
const balances = async () => {
    // 4. Fetch balances
    const balanceFrom = ethers.formatEther(await provider.getBalance(addressFrom));
    const balanceTo = ethers.formatEther(await provider.getBalance(addressTo));

    console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH`);
    console.log(`The balance of ${addressTo} is: ${balanceTo} ETH`);
};

balances();