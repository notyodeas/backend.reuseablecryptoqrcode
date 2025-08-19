const { Web3 } = require('web3');
const notewbs = new Web3('http://localhost:8545');

notewbs.eth.sendTransaction({
    from: "0xb0e5c7895be46ba6032c1f6f6fe707f2e6b47536",
    to: '0x7CCB0F400FA0a0079a5DaFE83d155638362f99ba',
    value: notewbs.utils.toWei(1, 'ether')
}).then(console.log);
notewbs.eth.accounts.wallet.remove('0xA0de87c0c9B8AA64f4Ab7605521F4EB3196B9385');
notewbs.eth.accounts.wallet.add('0xe5b1df089e0053fc9233256feeeb8e9dc9f525c91e0afb76e7986724b0c79a27');

// notewbs.eth.getTransactionReceipt('0xfe88b53f851d078949cad4819b22d574b5e1c6b7885cafe991b9f873d7720145').then(console.log)