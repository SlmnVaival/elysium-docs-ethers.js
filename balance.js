import {ethers, provider} from './provider-connection.js'

const addressFrom = process.env.FROM_ADDRESS; // Sender Wallet address
const addressTo = process.env.TO_ADDRESS; // Receiver Wallet address

// 3. Create balances function
const balance = async () => {
    // 4. Fetch balances
    const balanceFrom = ethers.formatEther(await provider.getBalance(addressFrom));
    const balanceTo = ethers.formatEther(await provider.getBalance(addressTo));

    console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH`);
    console.log(`The balance of ${addressTo} is: ${balanceTo} ETH`);

    return {
        from: balanceFrom,
        to: balanceTo
    }
};

export default balance;