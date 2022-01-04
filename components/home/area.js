import {Heading, List, ListItem, Icon} from '@chakra-ui/react'
import {QuestionIcon} from '@chakra-ui/icons'

import Section from '../section'

import styled from '@emotion/styled'

export const AreaListItem = styled(ListItem)`
  padding-left: 0.0em;
`

export const AreaContent = styled.span`
    padding-left: 0.5em;
    font-weight: 300;
`

function AreaSubPage({delay}) {
    return (
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        Research Areas  
        </Heading>
        <List>
        <AreaListItem><Icon as={QuestionIcon} w={5} h={5} color='teal.300'></Icon><AreaContent>Virtual Reality and Augmented Reality (multimodal interaction, real-time simulation)</AreaContent></AreaListItem>
        <AreaListItem><Icon as={QuestionIcon} w={5} h={5} color='teal.300'></Icon><AreaContent>Scientific and Medical Visualization (spatial interaction, multimodal interaction)</AreaContent></AreaListItem>
        </List>
        </Section>
    )
}

export default AreaSubPage