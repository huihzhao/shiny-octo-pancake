import { ethers } from 'ethers';

export async function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Create Wallet ${counter}`
  }

  element.addEventListener('click', async () => {
    const wallet = ethers.Wallet.createRandom();
    const address = await wallet.getAddress();
    const mnemonic = wallet.mnemonic?.phrase;
    
    console.log(`Public Address: ${address}`);
    console.log(`Recovery Phrase: ${mnemonic ?? 'Not available'}`);
    
    setCounter(counter + 1)
  });

  setCounter(0)
}
