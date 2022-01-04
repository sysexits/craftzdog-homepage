import {Heading, Box, Link} from '@chakra-ui/react'
import Section from '../section'
import styled from '@emotion/styled'

export const SkillSection = styled(Box)`
  padding-left: 1.0em;
  font-weight:300;
`

function SkillSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <SkillSection>
        C#, HLSL (DirectCompute), Heterogeneous computing (<Link href="https://www.dropbox.com/s/ww6hd6lz9x2sb8l/XHYUA4JCK3.pdf?dl=0" target="_blank">Coursera</Link>, issued Mar 2014), Unity3D
        </SkillSection>
        </Section>
    )
}

export default SkillSubPage