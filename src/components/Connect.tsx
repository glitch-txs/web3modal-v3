import { useWeb3ModalState } from '@web3modal/wagmi/react'

export default function ConnectButton() {

  const { open, selectedNetworkId } = useWeb3ModalState()
  console.log(open, selectedNetworkId)

  return (
    <>
      {/* <button onClick={() => modal.open()}>Open Connect Modal</button>
      <button onClick={() => modal.open({ view: 'Networks' })}>Open Network Modal</button> */}
      <w3m-button/>
    </>
  )
}