import { ReactNode, useState,useEffect } from 'react'

export const Mounted = ({children}: {children: ReactNode}) => {
  const [mounted, setMounted] = useState<boolean>()

  useEffect(()=>{
    setMounted(true)
  },[])

  return mounted ? children : null
}