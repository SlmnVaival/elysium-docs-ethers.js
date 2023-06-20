import {ethers, provider} from './provider-connection.js';
import balance from './balance.js';

// create wallet.
let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// send function to send transaction.
const send = async () => {

    try {
        // get balance of account
        let balances = await balance();

        // check if you have enough balance to transfer
        if (balances.from > process.env.TRANSFER_AMOUNT) {
            console.log(`Attempting transaction ${process.env.TRANSFER_AMOUNT} LAVA from ${process.env.FROM_ADDRESS} to ${process.env.TO_ADDRESS}`);

            // transaction object
            const tx = {
                to: process.env.TO_ADDRESS, // receiver
                value: ethers.parseEther(process.env.TRANSFER_AMOUNT) // amount
            }

            // Sign and send the transaction.
            const createReceipt = await wallet.sendTransaction(tx);
            await createReceipt.wait();

            console.log(`Transaction successful with hash: ${createReceipt.hash}`);
        } else {
            console.log("============ !! ERROR !! ============");
            console.error(`You account is not having enough balance to do this transaction`, [{
                sender_account_address: process.env.FROM_ADDRESS,
                balance: balances.from
            }]);
        }
    } catch (exception) {
        console.log("============ !! ERROR !! ============");
        console.error(exception.error);
    }

}

send();


