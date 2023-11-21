import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import previewImage from '../../assets/calendar-preview.png'

import { Container, Hero, Preview } from './styles'
import { CaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <CaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calender simbolizing app working"
        />
      </Preview>
    </Container>
  )
}
