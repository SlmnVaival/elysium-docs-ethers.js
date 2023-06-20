// add dotenv
import {configDotenv} from "dotenv";

configDotenv();


// 1. Import ethers
import {ethers} from 'ethers';

// 3. Create ethers provider
const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT,
    {
        chainId: parseInt(process.env.CHAIN_ID),
        name: process.env.CHAIN_NAME,
    }
);

export {
    provider, ethers
};