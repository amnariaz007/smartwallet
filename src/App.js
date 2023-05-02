import {
  Etherspot,
  TRANSACTION_BLOCK_TYPE,
} from "@etherspot/react-transaction-buidler";
import {
  SessionStorage,
} from 'etherspot';
//import { Web3Auth } from "@web3auth/modal";

function RenderEtherspot(props) {

  // const web3auth = new Web3Auth({
  //   clientId: "YOUR_WEB3AUTH_CLIENT_ID", // Get your Client ID from Web3Auth Dashboard
  //   chainConfig: {
  //     chainNamespace: "eip155",
  //     chainId: "0x138819", // Use 0x13881 for Mumbai Testnet
  //   },
  // });
  //await web3auth.initModal();
  //await web3auth.connect();

  return <Etherspot 



  
  etherspotSessionStorage={SessionStorage}
    defaultTransactionBlocks={[{ type: TRANSACTION_BLOCK_TYPE.SEND_ASSET,
    type: TRANSACTION_BLOCK_TYPE.SEND_ASSET,
    type: TRANSACTION_BLOCK_TYPE.ASSET_BRIDGE }]}
    
    
  />;
}

export default RenderEtherspot;
