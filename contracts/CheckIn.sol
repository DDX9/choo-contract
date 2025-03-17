// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// version:A4Prod
contract CheckInAnnounce {
    event CheckIn(
        address indexed from,
        uint256 indexed blockNumber,
        uint256 timestamp
    );

    function checkIn() public {
        emit CheckIn(msg.sender, block.number, block.timestamp);
    }
}
