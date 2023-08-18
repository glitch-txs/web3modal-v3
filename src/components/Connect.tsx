import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const modal = useWeb3Modal()

  return (
    <>
      <button onClick={() => modal.open()}>Open Connect Modal</button>
      <button onClick={() => modal.open({ view: 'Networks' })}>Open Network Modal</button>
    </>
  )
}