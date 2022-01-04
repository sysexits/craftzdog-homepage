import {Heading, Link, Box, Button} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../paragraph'
import Section from '../section'

import styled from '@emotion/styled'

export const ProfileParagraph = styled(Paragraph)`
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  font-weight: 300;
`

function ProfileSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
          Profile
        </Heading>
        <ProfileParagraph>
          I am a PhD candiate in School of Computing from Korea Advanced Institute of Science and Technology (KAIST). My research interests lie in computer graphics and computer haptics with a particular focus on extended reality and mid-air haptics. I focus on developing mid-air haptic rendering algorithms to produce rich tactile sensations for the real-time simulation. 
        </ProfileParagraph>
        <Box align="center" my={4}>
          <Link href="https://www.dropbox.com/s/ybees553mgjfhul/CV.pdf?dl=0" target='_blank'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My curriculum vitae
            </Button>
          </Link>
        </Box>
      </Section>
    )
}

export default ProfileSubPage