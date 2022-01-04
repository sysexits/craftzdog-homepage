import NextLink from 'next/link'
import {Heading, Box, Button, Link} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../section'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 1.0em;
  font-size: 0.9em;
  font-weight: 300;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

function BioSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioYear>2010.2 - 2014.8</BioYear>
        <BioSection>
          Bacholer of Computer Science at Korea Advanced Institute of Science and Technology 
        </BioSection>

        <BioYear>2014.9 - 2016.8</BioYear>
        <BioSection>
          Master&apos;s Program in School of Computing at Korea Advanced Institute of Science and Technology <br /> 
          
          Advisor: <Link href="https://cgv.kaist.ac.kr/members/professor" target="_blank">Prof. Jinah Park (박진아)</Link><br />
          <Box align="Left" my={4}>
          <Link href="https://www.dropbox.com/s/4jr68f2ooyoqdm2/jaehyun_master.pdf?dl=0" target='_blank'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Thesis Paper
            </Button>
          </Link>
        </Box>
        
        </BioSection>
        <BioYear>2016.9 - 2022.2</BioYear>
        <BioSection>
          Doctor of Philosophy in School of Computing at Korea Advanced Institute of Science and Technology<br />
          Advisor: <Link href="https://cgv.kaist.ac.kr/members/professor" target="_blank">Prof. Jinah Park (박진아)</Link><br />
          <Box align="Left" my={4}>
          
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              Dissertation Paper (in Private)
            </Button>
          
          </Box>
        </BioSection>
      </Section>
    )
}

export default BioSubPage