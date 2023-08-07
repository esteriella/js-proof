/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(nftName, description, imageUrl) {
    const nft = {
      name: nftName,
      description,
      image: imageUrl,
    };
  
    nfts.push(nft);
  }

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log("Name:", nft.name);
        console.log("Description:", nft.description);
        console.log("Image:", nft.image);
        console.log("============================");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply of NFTs:", nfts.length);
}

// call your functions below this line

mintNFT("First", "First NFT", "image1.jpg");
mintNFT("Second", "Second NFT", "image2.jpg");
mintNFT("Third", "Third NFT", "image3.jpg");
mintNFT("Fourth", "Fourth NFT", "image3.jpg");

listNFTs();

getTotalSupply();