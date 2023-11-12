import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, goerli, mainnet } from 'wagmi/chains'
import ConnectButton from './components/Connect'

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECT_ID
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum, goerli]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  customWallets: [
    {
      id: 'myCustomWallet',
      name: 'My Custom Wallet',
      homepage: 'www.mycustomwallet.com', // Optional
      image_url: 'https://link.trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.a073b4c3.png&w=96&q=75', // Optional
      mobile_link: 'https://link.trustwallet.com/',
    }
  ]
})

// 3. Rendering the Page
export default function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectButton />
      </WagmiConfig>
    </>
  )
}