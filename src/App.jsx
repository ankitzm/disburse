import { useState } from 'react'
import Web3 from 'web3';
import factoryABI from "./utils/FactoryABI.json"
// import MultiTransferCall from './components/MultiTransferCall';


const MultiTransferFactoryAddress = '0x29273F902F5d4De1cd0FC6bEbBe209C27c60bBb2'; // Replace with your MultiTransferFactory contract address
import './App.css'

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [contractDeploymentHash, setContractDeploymentHash] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [deployedContracts, setDeployedContracts] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  const handleContractInputChange = (event) => {
    setContractAddress(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };


  const connectToMetamask = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        console.error('MetaMask not found');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const deployContract = async () => {
    try {
      const factoryContract = new web3.eth.Contract(factoryABI, MultiTransferFactoryAddress);

      // Deploy MultiTransfer contract using the factory
      const transaction = await factoryContract.methods.createMultiTransferContract('0x1035cabc275068e0f4b745a29cedf38e13af41b1', '0x326C977E6efc84E512bB9C30f76E30c160eD06FB')
        .send({ from: account });

      setContractDeploymentHash(transaction.transactionHash);
      setContractAddress(transaction.contractAddress);
    } catch (error) {
      console.error('Error deploying contract:', error);
    }
  };

  const fetchDeployedContracts = async () => {
    try {
      const factoryContract = new web3.eth.Contract(factoryABI, MultiTransferFactoryAddress);

      // Call the getDeployedContracts function
      const deployedContractAddresses = await factoryContract.methods.getDeployedContracts().call();

      setDeployedContracts(deployedContractAddresses);
    } catch (error) {
      console.error('Error fetching deployed contracts:', error);
    }
  };

  return (
    <>
      <h3>**only supporting mumbai testnet at the moment</h3>
      <div className='buttons'>
        <button onClick={connectToMetamask}>Connect to MetaMask</button>
        <button onClick={deployContract} disabled={!web3 || !account}>Deploy MultiTransfer Contract</button>
        <button onClick={fetchDeployedContracts} disabled={!web3 || !account}>Get Deployed Contracts</button>

        <div>
          {contractDeploymentHash && (
            <p>Contract Deployment Hash: {contractDeploymentHash}</p>
          )}
          {contractAddress && (
            <p>Deployed Contract Address: {contractAddress}</p>
          )}

          {deployedContracts.length > 0 && (
            <div>
              <h4>Deployed Contracts:</h4>
              <ul>
                {deployedContracts.map((address, index) => (
                  <li key={index}>{address}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>

      <div>

        <
      </div>
    </>
  );
}

export default App
