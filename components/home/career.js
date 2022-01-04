import {Box, Heading, Link} from '@chakra-ui/react'
import Section from '../section'
import styled from '@emotion/styled'

export const CareerSection = styled(Box)`
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 1.0em;
  font-size: 0.9em;
  font-weight: 300;
`

export const CareerYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

function CareerSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
        Career
        </Heading>
        <CareerYear>2012.2 - 2012.8</CareerYear>
        <CareerSection>
          Worked at <Link href="https://flaskon-studio.tumblr.com/about/" target="_blank">Flaskon</Link> as a Unity3D client developer (internship program), Seoul, Korea.
        </CareerSection>

        <CareerYear>2014.6 - 2015.5</CareerYear>
        <CareerSection>
          Worked at <Link href="https://www.kiswe.com/" target="_blank">Kiswe Mobile</Link> as a front-end and back-end developer (<Link href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiK3dDu9pT1AhUmjVYBHUbrD0kQFnoECAcQAQ&url=https%3A%2F%2Fiicc.stepi.re.kr%2Fcommon%2Freport%2FDownload.do%3FreIdx%3D2%26streFileNm%3DA0510_2%26cateCont%3DA0510&usg=AOvVaw0eJE5D_Ixmf76K53e3lT6x" target="_blank">Global Entrepreneurship by Doing program (p. 17)</Link>), New Providence, NJ.
        </CareerSection>
      </Section>
    )
}

export default CareerSubPage