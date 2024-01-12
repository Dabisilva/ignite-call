import { styled } from '@ignite-ui/react'

export const Container = styled('div', {})

export const UserImage = styled('img', {
  width: '$8',
  height: '$8',
  borderRadius: '$full',

  backgroundColor: '$gray400',

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      lg: {
        width: '$16',
        height: '$16',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const UserEmptyImage = styled('div', {
  width: '$8',
  height: '$8',
  borderRadius: '$full',

  backgroundColor: '$gray400',

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      lg: {
        width: '$16',
        height: '$16',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
