import * as ethers from 'ethers';

export class EthereumService {
  async createWallet() {
    const randomWallet = ethers.Wallet.createRandom();
    return {
      phrase: randomWallet.mnemonic.phrase,
      address: randomWallet.address,
      privateKey: randomWallet.privateKey
    }
  }

  // async getBalance(address: string) {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const balance = await provider.getBalance(address);
  //   const balanceInEth = ethers.utils.formatEther(balance);
  //   console.log(balanceInEth);
  // }
}