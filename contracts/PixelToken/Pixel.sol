pragma solidity ^0.4.18;
import './Ownable.sol';

/// @title PixelParty contract that colors pixels on a 1000 x 1000 board
/// @author Harry Chan

contract PixelParty is Ownable{

  uint16 private maxDimention; // Maximum amount of pixels
  Pixel[1000][1000] private board;

  struct Pixel {
    //String?
    uint256 color; //Hexidecimal of the pixel
    bool permanent; //Pixel can no longer change color
  }

  modifier withinBounds(uint16 x, uint16 y) {require(x < maxDimention && y < maxDimention);_;}

  event ColoredIn(uint16 x, uint16 y, uint256 color);

  /**
   * @dev Constructor declaring the maximum dimention of an axis to be 1000
   */
  function PixelParty() public {
    maxDimention = 1000;
  }

  /**
   * @dev Checks if a pixel is permanently colored
   * @param _x the horizontal axis of the Pixel Ledger 0 - 999
   * @param _y the vertical axis of the Pixel Ledger 0 - 999
   */
  function permanentCheck(uint16 _x, uint16 _y) public view returns(bool permanent) {
    return board[_x][_y].permanent;
  }

  /**
   * @dev Checks the color of a pixel
   * @param _x the horizontal axis of the Pixel Ledger 0 - 999
   * @param _y the vertical axis of the Pixel Ledger 0 - 999
   */
  function colorCheck(uint16 _x, uint16 _y) public view returns(uint256 color){
      return board[_x][_y].color;
  }

  /**
   * @dev Changes the color and/or permanency of a pixel on the board
   * @param x the horizontal axis of the Pixel Ledger 0 - 999
   * @param y the vertical axis of the Pixel Ledger 0 - 999
   * @param color the vertical axis of the Pixel Ledger 0 - 999
   */
  function paintPixel(uint16 x, uint16 y, uint256 color) public payable withinBounds(x, y){
    require(msg.value >= 0.001 ether);
    board[x][y].color = color;
    if(msg.value >= 0.01 ether){
      board[x][y].permanent = true;
      ColoredIn(x, y, color);
    }
  }

  /* function kill() public {
    require(owner == msg.sender);
    selfdestruct(owner);  // kills this contract and sends remaining funds back to creator
  } */
}
