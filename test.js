class NFT {
  constructor(id, name, eyeColor, shirtType, bling) {
    this.id = id;
    this.name = name;
    this.eyeColor = eyeColor;
    this.shirtType = shirtType;
    this.bling = bling;
  }
}

let nftCollection = [];

function mintNFT(name, eyeColor, shirtType, bling) {
  const id = nftCollection.length + 1; // Simple unique ID
  const newNFT = new NFT(id, name, eyeColor, shirtType, bling);
  
  nftCollection.push(newNFT);
}

function printNFTs() {
  nftCollection.forEach(nft => {
    console.log(`ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Eye Color: ${nft.eyeColor}`);
    console.log(`Shirt Type: ${nft.shirtType}`);
    console.log(`Bling: ${nft.bling}`);
    console.log('-----------------------');
  });
}

mintNFT("CryptoPanda", "Blue", "Hoodie", "Gold Chain");
mintNFT("CryptoLion", "Green", "T-Shirt", "Diamond Ring");
mintNFT("CryptoTiger", "Red", "Tank Top", "Silver Bracelet");

printNFTs();
