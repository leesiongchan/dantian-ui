'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export function Provider(props: ProviderProps) {
  return <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
}
export interface ProviderProps {
  children: React.ReactNode
}
