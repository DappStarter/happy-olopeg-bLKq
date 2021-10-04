require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture street renew saddle arrow grunt light army gaze'; 
let testAccounts = [
"0x30f948d3a05fb27237a545796a2234dd788bd2dd0983a6cf51578344382e4805",
"0x85f095c851879bfbf3e2655d210a542e638b776fb9bd2a0fbb1b1e124927d236",
"0xb5a0266ee0edf19557bb26d478e0d2534fd69746c38e85e0aa2204d695b29138",
"0x44eba0cb28329405406f31f3aeacf304583db46b1bd0d608783f808b2900dcc2",
"0xe23376447384b42dbc1d8e0c2dbcc16ce7496c25bc7843a36f53493965eb1be5",
"0x407e9f05049c52099d26c34a0fd8cf19dcc6c861c35847a84ca1f9ea6d27543d",
"0x9285c4e94bbefe662996d53625833d0c801f4f7a5cf7c97f37ca7417759f3824",
"0xfb451ba184cbabfcafd35c5ce1241d7eb35ce2fbe1acb2cc7f36797bff1e1477",
"0x3787f6d7f8fe6e54182802babdefae0c27d472b1e0373b0cc2ca75887faf5d74",
"0x48eb65b5579a2a0e83b5489673cf884c13abb94eec31e3561dc9d951160f044f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

