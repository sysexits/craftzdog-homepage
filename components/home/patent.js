import {Heading, Link} from '@chakra-ui/react'
import { PubSection, PubYear } from '../publication'
import Section from '../section'


function PatentSubPage({delay}) {
    return (
        <Section delay={delay}>
        <Heading as="h3" variant="section-title">
            Patent
        </Heading>
        <PubYear>
            2021.12 [Korea]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>&quot;Method for Providing Tactile Feedback based on
    Interaction with Virtual Fluid and Apparatus for Performing the Same,&quot;</i> patent
    registered for Korea Advanced Institute of Science and Technology, filed by KR,
    10-2021-0176503, Dec, 2021
        </PubSection>

        <PubYear>
            2021.6 [Korea]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>&quot;Method and Apparatus of Providing Tactile Feed-
    back for Volume Data Interaction,&quot;</i> patent registered for Korea Advanced Insti-
    tute of Science and Technology, filed by KR, 10-2021-0078848, Jun 2021.
        </PubSection>

        <PubYear>
            2021.4 [Korea]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>&quot;Method and Apparatus of Providing Tactile Feed-
    back (Method of Providing Tactile Feedback of Virtual Fluid through Mid-air
    Haptic Interface),&quot;</i> patent registered for Korea Advanced Institute of Science
    and Technology, granted by KR, 10-2245898, Apr 2021. <Link href="https://doi.org/10.8080/1020190077184" target="_blank">[Link]</Link>
        </PubSection>

        <PubYear>
            2020.12 [Korea]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>&quot;Method of Providing Virtual Fluid Pressure
    Field using Ultrasound Haptic Interface,&quot;</i> patent registered for Korea Advanced
    Institute of Science and Technology, filed by KR, 10-2020-0176583, Dec 2020.
        </PubSection>

        <PubYear>
            2018.7 [Korea]
        </PubYear>
        <PubSection>
        Jaehyun Jang and Jinah Park, <i>&quot;A Method and Apparatus for Setting Virtual
    Camera based on Branching Region and Structures for Exploring 3D Treelike
    Objects,&quot;</i> patent registered for Korea Advanced Institute of Science and Tech-
    nology, granted by KR, 10-1934202, Jul 2018. <Link href="https://doi.org/10.8080/1020170095242" target="_blank">[Link]</Link>
        </PubSection>
        </Section>
    )
}

export default PatentSubPage