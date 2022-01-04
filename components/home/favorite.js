import {Heading, Link} from '@chakra-ui/react'

import Section from '../section'
import Paragraph from '../paragraph'

import styled from '@emotion/styled'

export const FavoriteParagraph = styled(Paragraph)`
    font-weight: 300;
`

function FavoriteSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <FavoriteParagraph>
          {' '}
          <Link href="https://open.spotify.com/user/1jqsqjcar26bh05nh5ida5s5f?si=822df6dc91934241" target="_blank">
            Music (Spotify)
          </Link>
          , Computer Graphics, Computer Animation (Pixar, Disney), Optimization Theory, Machine Learning
        </FavoriteParagraph>
        </Section>
    )
}

export default FavoriteSubPage