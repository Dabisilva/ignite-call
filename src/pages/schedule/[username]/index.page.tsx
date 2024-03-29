import { GetStaticPaths, GetStaticProps } from 'next'
import { Avatar, Heading, Text } from '@ignite-ui/react'
import { prisma } from '@/lib/prisma'
import { NextSeo } from 'next-seo'

import { Container, UserHeader } from './styles'
import { ScheduleForm } from './components/ScheduleForm'

type ScheduleProps = {
  user: {
    name: string
    avatar: string
    bio: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <>
      <NextSeo title={`Agenda de ${user.name} | Ignite Call`} />
      <Container>
        <UserHeader>
          <Avatar src={user.avatar} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        avatar: user.avatar_url,
        bio: user.bio,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
