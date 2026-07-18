import IntroSequence from '../../components/IntroSequence';

import {
  Container,
  Content,
  Title,
  Subtitle,
  Button,
} from './styles';

function Home() {
  return (
    <Container>

      <IntroSequence />

      <Content>
        <Title>DevClub Universe</Title>

        <Subtitle>
          Onde o universo da programação ganha vida.
        </Subtitle>

        <Button>Explorar Universo</Button>
      </Content>

    </Container>
  );
}

export default Home;