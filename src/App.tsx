import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, goerli, mainnet } from 'wagmi/chains'
import ConnectButton from './components/Connect'

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECT_ID
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum, goerli]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
const modal = createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains, 
  themeMode:'light',
  themeVariables:{
    "--w3m-accent": '#fff',
  },
  termsConditionsUrl:"https://www.youtube.com/watch?v=uZcW7G5o6g8",
  privacyPolicyUrl:"https://www.youtube.com/watch?v=uZcW7G5o6g8",
})
modal.subscribeState(console.log)

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