require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stock royal noble miss hidden problem army general'; 
let testAccounts = [
"0x66b1029d3ea41a6cba0fe2852097673b8983a33ea154d846dfe6e2ea16d522e4",
"0x603739811622cd4d5e2646ac86896e813cb0d99d7c79948261ec1c2af24b564a",
"0x81a67935e2e957e79e020d15f92b79ed50d1a7c81ffc83c804801d8d33e8e803",
"0x4cc3d452ba7141796b6c75b85dbe808ffabf3fa90fdd0adefe4317f58956b4d3",
"0xfe42e75247c3a6f2836300eee8c8665be5f1c4c865b6f1b2c899ac950c287cea",
"0x56cc41c72d513b1692a2085e57aa91001753216e821d010bf471ccf69830b606",
"0x8b4b8fd4a2774d351f8c31f129f1eb74b8d3a89ad47d7884ef57074545218e0d",
"0x0a1d8837b7e1d332f96485852bb8b7ee46946ae2eaf0b07488dedad4c241c597",
"0xa6fba664c3b8b749b07fb6bea83c650ef7e0adf75933fe1a00fa575eb146d247",
"0x7dc512b440a956d4d79107a5a819f8992353e57bf163976ee431eb08aa6cac2a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


