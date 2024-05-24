# Mood Diary dApp

## Description

This project is a decentralized application (dApp) built on the Ethereum blockchain that allows users to set and get their mood. The dApp interacts with a smart contract deployed on the Sepolia testnet. The smart contract stores the mood, and users can update and retrieve it using the dApp interface.

## Technologies Used

- **Ethereum Blockchain**: For deploying the smart contract.
- **Solidity**: The programming language used to write the smart contract.
- **Ethers.js**: A library to interact with the Ethereum blockchain.
- **HTML/CSS**: For structuring and styling the frontend.
- **JavaScript**: For adding interactivity to the frontend.

## Project Structure

- **index.html**: The main HTML file that contains the structure of the dApp.
- **style.css**: The CSS file that styles the dApp.
- **script.js**: The JavaScript file that contains the logic for interacting with the Ethereum blockchain and the smart contract.
- **Mood.sol**: The Solidity smart contract code for storing and retrieving the mood.

## How to Run

1. **Install Dependencies**:
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Install [Lite-Server](https://github.com/johnpapa/lite-server) globally using `npm install -g lite-server`.

2. **Deploy the Smart Contract**:
   - Use [Remix IDE](https://remix.ethereum.org/) to deploy the `Mood.sol` contract on the Sepolia testnet.
   - Copy the deployed contract address.

3. **Configure MetaMask**:
   - Install the [MetaMask](https://metamask.io/) browser extension.
   - Connect to the Sepolia testnet and import an account with test Ether.

4. **Update the Contract Address**:
   - In `script.js`, update the `MoodContractAddress` with the address of your deployed contract.

5. **Run the Application**:
   - Navigate to the project directory and run `lite-server` to serve the files.
   - Open the provided localhost URL in your browser to interact with the dApp.

## Features

- **Set Mood**: Users can input their mood and store it on the blockchain.
- **Get Mood**: Users can retrieve the stored mood from the blockchain.

## Troubleshooting

- **Error Handling**: The JavaScript code includes error handling to log issues related to account access and contract interaction.
- **Browser Console**: Use the browser's console to check for any errors or logs while interacting with the dApp.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Ethers.js](https://docs.ethers.io/v5/)
- [Remix IDE](https://remix.ethereum.org/)
- [MetaMask](https://metamask.io/)

## Contributing

Feel free to fork this project, open issues, or submit pull requests.

---

This README file provides an overview of the Mood Diary dApp project, including its purpose, technologies used, setup instructions, features, and troubleshooting tips. For detailed code implementation, refer to the respective source files within the project directory.