// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract ExLanceCoin is ERC20Capped, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
        ERC20Capped(800000000000000000000000000)
    {
        _setupRole(MINTER_ROLE, msg.sender);
    }

    modifier checkRole(
        bytes32 role,
        address account,
        string memory message
    ) {
        require(hasRole(role, account), message);
        _;
    }

    function mint(address to, uint256 amount)
        external
        checkRole(MINTER_ROLE, msg.sender, "Caller is not a minter")
    {
        super._mint(to, amount);
    }
}
