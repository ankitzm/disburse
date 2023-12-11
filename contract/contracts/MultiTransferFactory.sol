// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./MultiTransfer.sol"; // Import the MultiTransfer contract

contract MultiTransferFactory {
    address[] public multiTransferContracts;

    event MultiTransferContractCreated(address indexed contractAddress, address indexed creator);

    function createMultiTransferContract(address _router, address _link) external {
        MultiTransfer newMultiTransfer = new MultiTransfer(_router, _link);
        multiTransferContracts.push(address(newMultiTransfer));

        emit MultiTransferContractCreated(address(newMultiTransfer), msg.sender);
    }

    function getDeployedContracts() external view returns (address[] memory) {
        return multiTransferContracts;
    }
}