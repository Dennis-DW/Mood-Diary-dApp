// Address of the deployed Mood contract on the Ethereum Sepolia testnet
const MoodContractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

// ABI (Application Binary Interface) of the Mood contract
const MoodContractABI = [
    {
        "inputs": [],
        "name": "getMood",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_mood",
                "type": "string"
            }
        ],
        "name": "setMood",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Variables to hold the contract instance and signer
let MoodContract;
let signer;

// Create a provider to interact with the Ethereum network (Sepolia testnet in this case)
const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");

// Request access to the user's Ethereum account
provider.send("eth_requestAccounts", []).then(() => {
    // Get the list of accounts connected to the provider
    provider.listAccounts().then((accounts) => {
        // Get the signer from the provider using the first account
        signer = provider.getSigner(accounts[0]);
        
        // Create a contract instance with the ABI, address, and signer
        MoodContract = new ethers.Contract(MoodContractAddress, MoodContractABI, signer);
        
        // Log the contract instance to the console for debugging
        console.log("MoodContract:", MoodContract);
    }).catch(error => {
        // Handle errors that occur while listing accounts
        console.error("Error listing accounts:", error);
    });
}).catch(error => {
    // Handle errors that occur while requesting accounts
    console.error("Error requesting accounts:", error);
});

// Function to get the current mood from the contract
async function getMood() {
    try {
        // Call the getMood function from the contract
        const mood = await MoodContract.getMood();
        
        // Log the retrieved mood to the console for debugging
        console.log("Mood:", mood);
        
        // Display the retrieved mood on the webpage
        document.getElementById("moodDisplay").innerText = mood;
    } catch (error) {
        // Handle errors that occur while getting the mood
        console.error("Error getting mood:", error);
    }
}

// Function to set a new mood in the contract
async function setMood() {
    try {
        // Get the mood value from the input field
        const mood = document.getElementById("mood").value;
        
        // Call the setMood function from the contract to set the new mood
        const tx = await MoodContract.setMood(mood);
        
        // Log the transaction to the console for debugging
        console.log("Transaction:", tx);
        
        // Wait for the transaction to be mined
        await tx.wait();
        
        // Log a message to the console when the transaction is mined
        console.log("Transaction mined");
        
        // Update the displayed mood by calling getMood again
        getMood();
    } catch (error) {
        // Handle errors that occur while setting the mood
        console.error("Error setting mood:", error);
    }
}

