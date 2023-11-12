import { useContractWrite } from 'wagmi'
import { erc20ABI } from '../abi/erc20'

export default function Write() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    abi: erc20ABI,
    functionName: 'approve',
    args: ['0xeE241fCbD96847c9886E92ff31D8Ba8c59a912B7', BigInt(1)]
  })
 
  return (
    <div>
      <button onClick={() => write()}>Feed</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}