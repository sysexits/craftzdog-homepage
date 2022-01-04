import { Heading, Container, Badge, Link, List, ListItem, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ReactPlayer from 'react-player/youtube'

const Work = () => (
    <Layout title="Mid-air Tactile Pattern Rendering for Volume Data Exploration">
        <Container>
            <Title>
            Mid-air Tactile Pattern Rendering for Volume Data Exploration <Badge>2020 - 2021</Badge>
            </Title>
            <P>
            We propose a tactile pattern rendering method for volume data exploration. Specifically, we enable a tangible experience where touching internal structures of volume data is now possible, thanks to our haptic rendering technique based on a voxel classification method of specifying the region of interest (ROI). For each ROI information intersecting with the interacting hand surface, we extract several primitive patterns that we then render as tactile feedback through an ultrasonic mid-air haptic interface using spatiotemporal modulation (STM). In this work, we present how the generated tactile patterns approximate the ROI field so that the user can perceive the presence of boundary information obtained from the voxel classification method.

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
                    <span>Microsoft Hololens 2, Looking Glass</span>
                </ListItem>
            </List>

            <Heading as="h3" variant="section-title">
                Overview
            </Heading>
            <WorkImage src='/images/works/volume/overview.png' alt='overview' />
            <P></P>

            <Heading as="h3" variant="section-title">
                Demo Video
            </Heading> 
            <ReactPlayer controls width='100%' url="https://youtu.be/-4RM8ErbVPM" /> <br />

            <Heading as="h3" variant="section-title">
                Publication
            </Heading>
            <UnorderedList my={4}>
                <ListItem>
                    <Badge mr={2}></Badge>
                    <span>
                    Jaehyun Jang, William Frier, Orestis Georgiou, and Jinah Park, <i>“Using Mid-air Tactile Patterns in
    Interactive Volume Exploration,”</i> presented at the IEEE World Haptics 2021.
    (Hands-on Demo) 
                    </span>
                </ListItem>

            </UnorderedList>
        </Container>
    </Layout>
)

export default Work