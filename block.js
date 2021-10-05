/**
 * Import crypto-js/SHA256 library
 */
import sha256 from "crypto-js/sha256.js";

/**
 * Class with a constructor for block
 */
class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144434;
    this.body = data;
    this.hash = "";
  }

  generateHash() {
    // Use this to create a temporary reference of the class object
    let self = this;
    return new Promise(function (resolve, reject) {
      self.hash = sha256(JSON.stringify(self));
      resolve(self);
    });
  }
}

export default Block;
