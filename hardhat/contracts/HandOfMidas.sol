// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HandOfMidas is ERC20{
    constructor(uint256 initialSupply) ERC20("HandOfMidas", "HOM") {
        _mint(msg.sender, initialSupply);
    }
}