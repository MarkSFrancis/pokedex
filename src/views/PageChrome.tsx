import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const appTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'whiteAlpha' })
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      retry: false,
    },
  },
})

export const PageChrome: FC<{ children?: ReactNode }> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={appTheme}>{props.children}</ChakraProvider>
    </QueryClientProvider>
  )
}
