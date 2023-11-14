import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, goerli, mainnet } from 'wagmi/chains'
import ConnectButton from './components/Connect'
import Write from './components/Write'

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
  excludeWalletIds:[
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0"
  ]
})

// 3. Rendering the Page
export default function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectButton />
        <Write/>
      </WagmiConfig>
    </>
  )
}