import { useSession, signIn } from 'next-auth/react'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useRouter } from 'next/router'

import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { Photo } from '@/components/Photo'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const { data: session } = useSession()

  const router = useRouter()

  const isSignedIn = !!session
  const hasAuthError = !!router.query.error

  async function handleSignIn() {
    await signIn('google', { callbackUrl: '/register/connect-calendar' })
  }

  function handleNextStep() {
    router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo title="Conecte sua agenda do google | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>

            {isSignedIn ? (
              <Button variant="secondary" disabled>
                Conectado
                <Photo img={session?.user?.avatar_url} size="sm" />
              </Button>
            ) : (
              <Button variant="secondary" onClick={handleSignIn}>
                Conectar <ArrowRight />
              </Button>
            )}
          </ConnectItem>
          {hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar.
            </AuthError>
          )}
          <Button
            type="submit"
            disabled={isSignedIn === false}
            onClick={handleNextStep}
          >
            Próximo passo <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
