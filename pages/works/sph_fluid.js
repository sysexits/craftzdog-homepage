import { Heading, Container, Badge, Link, List, ListItem, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ReactPlayer from 'react-player/youtube'

const Work = () => (
    <Layout title="SPH Fluid Tactile Rendering for Ultrasonic Mid-Air Haptics">
        <Container>
            <Title>
            SPH Fluid Tactile Rendering for Ultrasonic Mid-Air Haptics <Badge>2018 - 2020</Badge>
            </Title>
            <WorkImage src='/images/works/sphfluid/img1.jpg' alt='overview' />
            <P>
            In our daily lives, we interact with fluids by touching them directly with our hands. Fluids produce a pressure field against the surface of our hands, and we experience fluid dynamics over our skin temporally and spatially at varying pressure distributions depending on fluid properties as well as on the interacting hand's poses and motions. To improve the realism of fluid simulation together with user interaction, we propose a real-time fluid tactile rendering technique that computes the pressure field on a virtual hand surface to be delivered to the user's actual hand via ultrasound-based mid-air haptic display. Our haptic rendering algorithm computes the feedback force in two stages: First, the pressure distribution of the rigid-fluid interaction is computed from a real-time Lagrangian fluid simulation, and then a set of focal points that reflects the generated pressure field is extracted by using a hill-climbing method which gives the local extrema of the pressure field of simulation. We implement a real-time smoothed-particle hydrodynamics fluid simulator and the proposed haptic rendering algorithm using adaptive amplitude modulation approach to demonstrate the effectiveness of our method in fluid tactile rendering in various scenarios.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity3D (C#, DirectCompute)</span>
                </ListItem>
                <ListItem>
                    <Meta>VR/AR Platform</Meta>
                    <span>Oculus, Vive (SRWorks), Microsoft Hololens 2</span>
                </ListItem>
            </List>

            <Heading as="h3" variant="section-title">
                Overview
            </Heading>
            <WorkImage src='/images/works/sphfluid/img0.jpg' alt='overview' />
            <P>

            </P>

            <Heading as="h3" variant="section-title">
                Tactile Rendering
            </Heading>
            <WorkImage src="/images/works/sphfluid/tactile_rendering.png" alt="tactile_rendering" />
            <P>

            </P>

            <Heading as="h3" variant="section-title">
                Presentation
            </Heading> 
            <ReactPlayer controls width='100%' url="https://youtu.be/hCRA5dIRS3I" /> <br />

            <Heading as="h3" variant="section-title">
                Demo Video
            </Heading> 
            <ReactPlayer controls width='100%' url="https://youtu.be/rO0tYTOqshE" /> <br />

            <Heading as="h3" variant="section-title">
                Publication
            </Heading>
            <UnorderedList my={4}>
                <ListItem>
                    <Badge mr={2}></Badge>
                    <span>
                    Jaehyun Jang, Jinah Park, <i>”Virtual Faucet: Stream Or Spray,”</i> presented at the IEEE
    World Haptics Conference 2019, Jul. 2019. (Hands-on Demo)
                    </span>
                </ListItem>

                <ListItem>
                    <Badge mr={2}></Badge>
                    <span>
                    Jaehyun Jang and Jinah Park, <i>“SPH Fluid Tactile Rendering for Ultrasonic
    Mid-Air Haptics,”</i> IEEE Transactions on Haptics, Jan. 2020
                    </span>
                </ListItem>

                <ListItem>
                    <Badge mr={2}></Badge>
                    <span>
                    Jaehyun Jang and Jinah Park, <i>“Interacting with Fluids using Ultrasonic Mid-Air Haptic
    Device,”</i> presented at the IEEE Haptics Symposium 2020 and IEEE World Haptics Conference 2021. (Hands-on
    Demo)
                    </span>
                </ListItem>
            </UnorderedList>
        </Container>
    </Layout>
)

export default Work