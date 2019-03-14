pragma solidity 0.4.23;

contract TokenBurner {
    function burn() public {
        selfdestruct(address(this));
    }
}
