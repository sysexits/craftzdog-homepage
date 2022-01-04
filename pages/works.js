import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbVolume from '../public/images/works/volume/volume_eyecatch.png'
import thumbSphFluid from '../public/images/works/sphfluid/sphfluid_eyecatch.png'
import thumbVessel from '../public/images/works/vessel/vessel_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mt={6} mb={4}>
        Featured Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hologram" title="Mid-air Tactile Pattern Rendering for Volume Data Exploration" thumbnail={thumbVolume}>
            Providing the shape of internal structures through spatiotemporal modulation.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sph_fluid" title="SPH Fluid Tactile Rendering for Ultrasonic Mid-Air Haptics" thumbnail={thumbSphFluid}>
            Ultrasonic mid-air haptic rendering algorithm to provide the pressure field of rigid-fluid interaction
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="vessel_navigator"
            title="The Structure-aware Viewpoint Selection for 3D Branching Structures"
            thumbnail={thumbVessel}
          >
            Viewpoint selection method for branching structures
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
