import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Spinner,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { UseQueryResult } from 'react-query'

export interface QueryGuardProps<T> {
  children: (res: T) => ReactElement
  query: UseQueryResult<T>
}

export function QueryGuard<T>(props: QueryGuardProps<T>) {
  if (props.query.status === 'loading') {
    return (
      <Center>
        <Spinner role="status" />
      </Center>
    )
  }

  if (props.query.status === 'error') {
    return (
      <Alert status="error">
        <VStack align="stretch">
          <Wrap>
            <AlertIcon />
            <AlertTitle>Error</AlertTitle>
          </Wrap>
          <AlertDescription whiteSpace="pre" fontFamily="monospace">
            {JSON.stringify(props.query.error, null, 2)}
          </AlertDescription>
        </VStack>
      </Alert>
    )
  }

  if (props.query.status === 'idle') {
    return <></>
  }

  return props.children(props.query.data)
}
