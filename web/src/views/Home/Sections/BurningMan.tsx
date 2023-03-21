// Burning Man:
// ___________________________________________________________________

// Core
import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

// Components
import FadeIn from '../../../components/FadeIn'
import Section from '../../../components/Section'
import Circles from '../../../components/Circles'
import Accordion from '../../../components/Accordion'
import BlockContent from '../../../components/BlockContent'

// Elements
import { Box, Flex, Heading, Text } from '../../../elements'

// Styles
import * as S from '../styles.scss'

// Hooks
import useServiceGroup, {
  SanityServiceCategoryNode
} from '../../../hooks/useServiceGroup'

// ___________________________________________________________________

type ServiceCategoryShape = {
  data: SanityServiceCategoryNode
}

const PortableWaterTankRental = ({ data }: ServiceCategoryShape) => (
  <Accordion title={data.serviceCategoryName}>
    <div className="content">
      <S.HighlightGrid>
        {data.services.map((service, idx) => (
          <div className="highlight" key={idx}>
            <div className="rental__title">{service.name}</div>
            <Box fontSize={2}>
              <BlockContent blocks={service._rawDescription || []} />
            </Box>
            <div className="rental__price">${service.price}</div>
          </div>
        ))}
        <div className="highlight highlight--emphasized">
          <Text as="p" fontSize={3}>
            Payment due at time of service.
          </Text>
        </div>
      </S.HighlightGrid>

      <BlockContent blocks={data._rawBody || []} />

      {/* <Text as="p">
        If you decide to rent one of our potable water tanks, we will set up a
        delivery date with you and get your playa address.
      </Text>
      <Text as="p">
        Contact MECO Amanda with your playa location as soon as you know it,
        along with your requested tank delivery date.{' '}
        <strong>Deadline August 1st.</strong>
      </Text>
      <Box px={[0]} mt={7}>
        <StaticImage
          src="../../../images/placement-map.jpg"
          alt="Burning Man Placement Map"
        />
      </Box> */}

      <S.HighlightGrid>
        <div className="highlight highlight--emphasized">
          <div className="title title--sector">
            sector:
            <br />
            <strong>2:00-6:30</strong>
          </div>
          <ul>
            <li>8/15</li>
            <li>8/17</li>
            <li>8/19</li>
            <li>8/21</li>
            <li>8/23</li>
            <li>8/25</li>
            <li>8/27</li>
            <li>8/29</li>
            <li>8/31</li>
            <li>9/2</li>
            <li>9/4</li>
            <li>9/6</li>
          </ul>
        </div>
        <div className="highlight highlight--emphasized">
          <div className="title title--sector">
            sector:
            <br />
            <strong>6:30-10:00</strong>
          </div>
          <ul>
            <li>8/16</li>
            <li>8/18</li>
            <li>8/20</li>
            <li>8/22</li>
            <li>8/24</li>
            <li>8/26</li>
            <li>8/28</li>
            <li>8/30</li>
            <li>9/1</li>
            <li>9/3</li>
            <li>9/5</li>
            <li>9/7</li>
          </ul>
        </div>
      </S.HighlightGrid>

      <BlockContent blocks={data._rawBody2 || []} />

      {/* <Text as="p" fontWeight={500} color="secondary">
        BE READY TO PLACE AND RECEIVE YOUR TANK ON YOUR SCHEDULED DELIVERY DATE!
      </Text>
      <Text as="p">
        Your tank will either have to be set up by the street or you will have
        to have an access road 12ft wide that the trucks can drive through. The
        access road needs to be a THROUGH ROAD that trucks can Enter and Exit
        (we are not backing down into camps anymore). MECO trucks must be able
        to get within 10 feet of potable water rental tank.
      </Text>
      <Box px={[0, 8]} my={6} mx="auto">
        <StaticImage
          src="../../../images/water-container.jpg"
          alt="Burning Man Placement Map"
        />
      </Box>
      <Text as="p">
        MECO will be by every other day to check your tank and top off if
        needed. It will be your choice to top off or not. Please have cash at
        the time of delivery.
      </Text>
      <Text as="p">
        Your potable water tank rental will only be filled or refilled by MECO
        potable trucks, all of our trucks are labeled MECO Potable Water. If a
        non MECO truck fills or refills rental tank you will then be liable for
        contaminating the potable water rental tank. We will no longer fill or
        refill rental tank and you will be charged a decontamination fee of $500
        to clean all equipment. As soon as we receive the decontamination fee we
        will bring you a clean rental tank, pump and hose. You will have to pay
        for the water to refill the cleaned rental tank at $1.50 a gallon.
      </Text>
      <Text as="p">
        At the end of the event if there is any unused potable water left in the
        tank, MECO will dispose of it for you. There is no refund on left over
        water in tank, once it leaves a MECO truck it is your camps water. State
        regulations don’t allow us to put that water back in our trucks or
        resell because there could be contaminations. Know your water usage!
      </Text>
      <Text as="p">
        The pump that comes with your rental is a 120VAC/6A pump. Make sure that
        your generator can power the pump, if it is under powered it will burn
        up the motor and you will have to purchase the pump. It will be $500 to
        replace pump. We are now offering 110 volt pumps that are smaller and
        require less energy.
      </Text>
      <Text as="p">
        The hoses MECO uses on the end of rental pumps are standard ¾ potable RV
        water hoses.
      </Text> */}

      <S.HighlightGrid pt={6}>
        <div className="highlight highlight--emphasized">
          <Text as="p">
            As soon as you arrive on the playa be sure to map out and mark
            exactly where you would like your tank placed. X MARKS THE SPOT!
          </Text>
        </div>
        <div className="highlight highlight--emphasized">
          <Text as="p">
            If you are not present or ready to receive your tank on your
            scheduled delivery date, your tank will be delivered on the next
            available date/time.
          </Text>
        </div>
      </S.HighlightGrid>

      <Text as="p">
        <strong>Liability:</strong> The renter is liable for any and all lost or
        damaged equipment.
      </Text>

      {data.tutorial?.url && (
        <Box mt={6}>
          <Heading fontSize={2} fontWeight={500} mb={4}>
            {data.tutorial.title}
          </Heading>
          <ResponsiveEmbed src={data.tutorial.url} allowFullScreen={true} />
          <Text as="caption" textAlign="left" mt={4}>
            {data.tutorial.caption}
          </Text>
        </Box>
      )}
    </div>
  </Accordion>
)

const PrivateBulkPotableWaterStorage = ({ data }: ServiceCategoryShape) => (
  <Accordion title={data.serviceCategoryName}>
    <div className="content">
      <S.HighlightGrid>
        {data.services.map((service, idx) => (
          <div className="highlight" key={idx}>
            <div className="rental__title">{service.name}</div>
            <Box fontSize={2}>
              <BlockContent blocks={service._rawDescription || []} />
            </Box>
            <div className="rental__price">${service.price}</div>
          </div>
        ))}
        <div className="highlight highlight--emphasized">
          <Text as="p" fontSize={3}>
            Payment due at time of service.
          </Text>
        </div>
      </S.HighlightGrid>

      <BlockContent blocks={data._rawBody || []} />

      {data.tutorial?.url && (
        <Box mt={6}>
          <Heading fontSize={2} fontWeight={500} mb={4}>
            {data.tutorial.title}
          </Heading>
          <ResponsiveEmbed src={data.tutorial.url} allowFullScreen={true} />
          <Text as="caption" textAlign="left" mt={4}>
            {data.tutorial.caption}
          </Text>
        </Box>
      )}
    </div>
  </Accordion>
)

const RvWater = ({ data }: ServiceCategoryShape) => (
  <Accordion title={data.serviceCategoryName}>
    <div className="content">
      <S.HighlightGrid>
        {data.services.map((service, idx) => (
          <div className="highlight" key={idx}>
            <div className="rental__title">{service.name}</div>
            <Box fontSize={2}>
              <BlockContent blocks={service._rawDescription || []} />
            </Box>
            <div className="rental__price">${service.price}</div>
          </div>
        ))}
        <div className="highlight highlight--emphasized">
          <Text as="p" fontSize={3}>
            Payment due at time of service.
          </Text>
        </div>
      </S.HighlightGrid>

      <BlockContent blocks={data._rawBody || []} />

      {data.tutorial?.url && (
        <Box mt={6}>
          <Heading fontSize={2} fontWeight={500} mb={4}>
            {data.tutorial.title}
          </Heading>
          <ResponsiveEmbed src={data.tutorial.url} allowFullScreen={true} />
          <Text as="caption" textAlign="left" mt={4}>
            {data.tutorial.caption}
          </Text>
        </Box>
      )}
    </div>
  </Accordion>
)

const BurningMan: React.FC = () => {
  const data = useServiceGroup()
  console.log('data:', data)

  const potableWaterTankRental = data[0].node
  const privateBulkPotableWaterStorage = data[1].node
  const rvWater = data[2].node
  return (
    <>
      <Section border={true}>
        <S.Illustration pt={[5, 0]} pb={[7, 7]} px={4}>
          <FadeIn>
            <Circles />
          </FadeIn>
        </S.Illustration>
        <Heading className="text--sm" color="secondary" mt={4} mb={5}>
          Burning Man
        </Heading>
        <Heading as="h3" style={{ maxWidth: '28ch' }}>
          Supplying the Playa's Water Needs for over 20 Years!
        </Heading>
        <Text as="p">
          We offer storage tank rentals and potable water fill-ups and top-offs.
        </Text>
      </Section>
      <Box>
        <PortableWaterTankRental data={potableWaterTankRental} />
        <PrivateBulkPotableWaterStorage data={privateBulkPotableWaterStorage} />
        <RvWater data={rvWater} />
      </Box>
    </>
  )
}

export default BurningMan
