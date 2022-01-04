import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import ProfileSubPage from '../components/home/profile'
import AreaSubPage from '../components/home/area'
import BioSubPage from '../components/home/bio'
import CareerSubPage from '../components/home/career'
import SkillSubPage from '../components/home/skill'
import PubSubPage from '../components/home/publication'
import PatentSubPage from '../components/home/patent'
import FavoriteSubPage from '../components/home/favorite'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mt={6}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m haptic researcher based on Korea!
      </Box>

      <Box mb={12} display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jaehyun Jang
          </Heading>
          <Heading as="h2" variant="page-title">
            장재현 (張宰賢)
          </Heading>
          
          <p><b>VR & Haptics Researcher</b></p>
          <p><i>Contact: sysexits (at) gmail.com</i></p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/jaehyun.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <ProfileSubPage delay={0.1} />

      <AreaSubPage delay={0.2} />

      <BioSubPage delay={0.3} />

      <CareerSubPage delay={0.4} />

      <SkillSubPage delay={0.5} />

      <PubSubPage delay={0.6} />

      <PatentSubPage delay={0.7} />

      <FavoriteSubPage delay={0.8} />

      <Section delay={0.9}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sysexits" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @sysexits
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/jaehyunjang_soc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @jaehyunjang_soc (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/silvesterjang/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @jaehyunjang
              </Button>
            </Link>
          </ListItem>
        </List>

        
      </Section>
    </Container>
  </Layout>
)

export default Home
