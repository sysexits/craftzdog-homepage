import { Heading, Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ReactPlayer from 'react-player/youtube'

const Work = () => (
    <Layout title="The Structure-aware Viewpoint Selection for 3D Branching Structures">
        <Container>
            <Title>
            The Structure-aware Viewpoint Selection for 3D Branching Structures <Badge>2016 - 2018</Badge>
            </Title>
            <P>
            Viewpoint selection is a fundamental technique in  computer-aided external guidance. In this work, we present a structure-aware viewpoint selection technique for exploring a tube-like object to reveal the possible paths in complex branching area. We define a transition region and adjacent segments from the branch of interests (BOI) in order to abstract structure information for computing context-based viewpoint entropy. We sample some positions on the bounding sphere, with respect to BOI, to capture the average information of the branching area, and we compute self-occlusion effects at each position. We further propose the effectiveness of structure information (ESI) for automatic viewpoint selection based on our BOI construction and sampled positions. We examine the proposed measure of the context-based viewpoint entropy on CTA medical image data of 3D cerebrovascular structure as well as leg artery structure. Results show that the highest value corresponds to the best view which delivers the structure information on branching area, and that the view automatically chosen by fast view selection falls within reasonably high valued area.</P> 

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>C++, VTK, ITK</span>
                </ListItem>
            </List>

            <Heading as="h3" variant="section-title">
                Demo Video
            </Heading> 

            <ReactPlayer controls width='100%' url="https://youtu.be/zTgATbjNUlY" /> <br />

            <ReactPlayer controls width='100%' url="https://youtu.be/XHPOFPnKWTI" /> <br />
            
        </Container>
    </Layout>
)

export default Work