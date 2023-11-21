import { Box, Text, styled } from '@ignite-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '$4',

  border: '1px solid $gray600',
  padding: '$4 $6',
  borderRadius: '$md',
})

export const UserImage = styled('img', {
  width: '$8',
  height: '$8',
  borderRadius: '$full',

  backgroundColor: '$gray400',
})
export const UserEmptyImage = styled('div', {
  width: '$8',
  height: '$8',
  borderRadius: '$full',

  backgroundColor: '$gray400',
})

export const AuthError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})
