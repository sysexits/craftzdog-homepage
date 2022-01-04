import NextLink from 'next/link'
import {Heading, Link} from '@chakra-ui/react'
import { PubSection, PubYear } from '../publication'
import Section from '../section'

function PubSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
            Publication
        </Heading>
        <PubYear>
            2021.7 [Conference, Demo]
        </PubYear>
        <PubSection>
        Jaehyun Jang, William Frier, Orestis Georgiou, and Jinah Park, <i>“Using Mid-air Tactile Patterns in
    Interactive Volume Exploration,”</i> presented at the IEEE World Haptics 2021.
    (Hands-on Demo) <Link href='/works/hologram'>[Work]</Link>
        </PubSection>
        <PubYear>
            2021.7 [Conference, Demo]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>“Interacting with Fluids using Ultrasonic Mid-Air Haptic
    Device,”</i> presented at the IEEE World Haptics Conference 2021. (Hands-on
    Demo)
        </PubSection>
        <PubYear>
        2021.4 [Conference, Oral]
        </PubYear>
        <PubSection>
        Jaehyun Jang, Joowon Lim, and Jinah Park, <i>“Real-time volume exploration technique for
    holographic display,”</i> in International Forum on Medical Imaging in Asia 2021,
    Apr. 2021, vol. 11792, p. 117920V. <Link href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11792/2590772/Real-time-volume-exploration-technique-for-holographic-display/10.1117/12.2590772.full?SSO=1" target="_blank">[Paper]</Link>
        </PubSection>
        <PubYear>
            2020.1 [Journal, Oral]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>“SPH Fluid Tactile Rendering for Ultrasonic
    Mid-Air Haptics,”</i> IEEE Transactions on Haptics, Jan. 2020 <Link href='/works/sph_fluid'>[Work]</Link> <Link href="https://ieeexplore.ieee.org/document/8959191/" target="_blank">[Paper]</Link> <Link href="https://www.youtube.com/watch?v=hCRA5dIRS3I" target="_blank">[Presentation]</Link>
        </PubSection>
        <PubYear>
            2019.7 [Conference, Demo]
        </PubYear>
        <PubSection>
        Jaehyun Jang, Jinah Park, <i>”Virtual Faucet: Stream Or Spray,”</i> presented at the IEEE
    World Haptics Conference 2019, Jul. 2019. (Hands-on Demo) <Link href="https://www.youtube.com/watch?v=UFgp7A1IK7o&t=229s" target="_blank">[Movie]</Link>
        </PubSection>

        <PubYear>
            2018.4 [Conference, Poster]
        </PubYear>
        <PubSection>
        Jaehyun Jang, Jinah Park, <i>”The Structure-aware Viewpoint Selection for 3D Branching
    Structures,”</i> presented at the IEEE PacificVis 2018, Apr. 2018. (Poster) <Link href='/works/vessel_navigator'>[Work]</Link>
        </PubSection>
        </Section>
    )
}

export default PubSubPage