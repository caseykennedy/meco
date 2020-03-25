// Home:

// ___________________________________________________________________

// Core
import React, { useRef } from 'react'

// Components
import Section from '../../../components/Section'
import Circles from '../../../components/Circles'
import Accordion from '../../../components/Accordion'

// Elements
import { Box, Heading, Text } from '../../../elements'
import Divider from '../../../elements/Divider'

// Styles
import * as S from '../styles.scss'

// Theme
import theme from '../../../../config/theme'

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.secondary,
  borderColor: theme.colors.text
}

const BurningMan: React.FC = () => {
  return (
    <>
      <Section border={true}>
        <S.Illustration pt={[5, 0]} pb={[7, 8]} px={4}>
          <Circles />
        </S.Illustration>
        <Heading as="h5" color="secondary" mb={5}>
          Burning Man
        </Heading>
        <Heading as="h3">
          Supplying the Playa’s Water Needs for nearly 20 Years!
        </Heading>
        <Text as="p">
          Burning man backjack five rhythms rawthentic self my brothers and
          sisters community, all-encompassing eye gazing. Somatic grass-fed
          herbal tea equinox.
        </Text>
      </Section>
      <Box>
        <Accordion title="Potable Water Tank Rental" {...AccordionProps}>
          <Box pt={3} px={4}>
            <Text as="p" mt={3}>
              <Text as="span" fontWeight={500} mb={0}>
                500 Gallon Tank — $1000
              </Text>
              <Text as="span" fontSize={1}>
                includes: first fill, pump and 15ft garden hose
                <br />
                dimensions: 5 feet in diameter, 4 feet tall
              </Text>
            </Text>
            <Divider bg="primary" py="1px" />
            <Text as="p" mt={3}>
              <Text as="span" fontWeight={500} mb={0}>
                1000 Gallon Tank — $2000
              </Text>
              <Text as="span" fontSize={1}>
                includes: first fill, pump and 15ft garden hose
                <br />
                dimensions: 6 feet in diameter, 6.5 feet tall
              </Text>
            </Text>
            <Divider bg="primary" py="1px" />
            <Text as="p" mt={3}>
              <Text as="span" fontWeight={500} mb={0}>
                Bulk tank rentals refill and top off — $1.00 /gal
              </Text>
            </Text>
            <Divider bg="primary" py="1px" />
            <Text as="p" mt={3}>
              <Text as="span" fontSize={1}>
                payment: cash at time of fillup
              </Text>
            </Text>

            <Text as="p" mt={7}>
              If you decide to rent one of our potable water tanks, we will set
              up a delivery date with you and get your playa address.
            </Text>
            <Text as="p">
              Contact MECO Amanda with your playa location as soon as you know
              it, along with your requested tank delivery date.{' '}
              <strong>Deadline August 1st.</strong>
            </Text>
            <Text as="p" fontWeight={500} color="secondary">
              BE READY TO PLACE AND RECEIVE YOUR TANK ON YOUR SCHEDULED DELIVERY
              DATE!
            </Text>
            <Text as="p">
              Your tank will either have to be set up by the street or you will
              have to have an access road 12ft wide that the trucks can back
              down. If you set the tank inside your camp, you will need to keep
              the access road clear. MECO trucks must be able to get within 15
              feet of potable water rental tank.
            </Text>
            <Text as="p">
              MECO will be by every other day to check your tank and top off if
              needed. It will be your choice to top off or not. It will be cash
              at time of delivery at $1.00 a gallon.
            </Text>
            <Text as="p">
              Your potable water tank rental will only be filled or refilled by
              MECO potable trucks, all of our trucks are labeled MECO Potable
              Water. If a non MECO truck fills or refills rental tank you will
              then be liable for contaminating the potable water rental tank. We
              will no longer fill or refill rental tank and you will be charged
              a decontamination fee of $500 to clean all equipment. As soon as
              we receive the decontamination fee we will bring you a clean
              rental tank, pump and hose. You will have to pay for the water to
              refill the cleaned rental tank at a $1.00 a gallon.
            </Text>
            <Text as="p">
              At the end of the event if there is any unused potable water left
              in the tank, MECO will dispose of it for you. There is no refund
              on left over water in tank, once it leaves a MECO truck it is your
              camps water. State regulations don’t allow us to put that water
              back in our trucks or resell because there could be
              contaminations. Know your water usage!
            </Text>
            <Text as="p">
              The pump that comes with your rental is a 120VAC/6A pump. Make
              sure that your generator can power the pump, if it is under
              powered it will burn up the motor and you will have to purchase
              the pump. It will be $150 to replace pump. We are now offering 110
              volt pumps that are smaller and require less energy.
            </Text>
            <Text as="p">
              The hoses MECO uses on the end of rental pumps are standard ¾
              potable RV water hoses.
            </Text>
            <Text as="p">
              <strong>Liability:</strong> The renter is liable for any and all
              lost or damaged equipment.
            </Text>
            <Text as="p">
              The pump that comes with your rental is a 120VAC/6A pump. Make
              sure that your generator can power the pump, if it is under
              powered it will burn up the motor and you will have to purchase
              the pump. It will be $150 to replace pump. We are now offering 110
              volt pumps that are smaller and require less energy.
            </Text>
          </Box>
        </Accordion>
        <Accordion
          title="Private Bulk Potable Water Storage"
          {...AccordionProps}
        >
          <Box pt={3} px={4}>
            <Text as="p">
              <Text as="span" fontWeight={500} mb={0}>
                Fill or top off — $1.50 /gal
              </Text>
              <Text as="span" fontSize={1}>
                payment: cash at time of fillup
              </Text>
            </Text>
            <Divider bg="primary" py="1px" />
            <Text as="p" mt={7}>
              If you decide to bring your own bulk storage and have MECO fill
              it, MECO will set up a date with you to deliver your potable water
              and get your playa address.
            </Text>
            <Text as="p">
              Contact MECO Amanda with your playa location and requested fill
              dates as soon as you know it, deadline August 1.
            </Text>
            <Text as="p">
              Private bulk storage consist of 50 gallons or more, bladders,
              drums, or tanks. MECO uses 2 inch male cam lock hoses to fill
              bladders, drums, and tanks. MECO must be able to get within 15
              feet of what MECO will be filling.
            </Text>
            <Text as="p">
              Opening on tank, bladder or drum must be 2 inches or larger. MECO
              bulk potable water trucks only carry 20 feet of 2 inch hose,
              therefore, if for some reason MECO must use garden hose to fill or
              refill (can't get close enough or opening is too small on bulk
              storage) water will be $2.00 a gallon.
            </Text>
          </Box>
        </Accordion>
        <Accordion title="RV Potable Water" {...AccordionProps}>
          <Box pt={3} px={4}>
            <Text as="p">
              <Text as="span" fontWeight={500} mb={0}>
                Fill or top off — $2.00 gallon
              </Text>
              <Text as="span" fontSize={1}>
                payment: cash at time of fillup
              </Text>
            </Text>
            <Divider bg="primary" py="1px" />
            <Text as="p" mt={7}>
              MECO requires a 5 RV minimum in order to make a reservation. All
              must be within the same location. Anything less than 5 RV’s will
              be a flag down service.
            </Text>
            <Text as="p">
              If you decide to have MECO fill or top off your RV’s with potable
              water, MECO will set up a date with you to deliver your potable
              water and get your playa address. It will be $2.00 a gallon, cash
              at time of delivery.
            </Text>
            <Text as="p">
              MECO potable water trucks have digital meters to measure the water
              that goes into your RV.
            </Text>
          </Box>
        </Accordion>
      </Box>
    </>
  )
}

export default BurningMan
