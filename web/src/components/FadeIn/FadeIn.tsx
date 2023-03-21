import * as React from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  threshold?: number
}

const FadeIn = ({ children, threshold = 1 }: Props) => (
  <InView threshold={threshold} triggerOnce={true}>
    {({ inView, ref, entry }) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ width: '100%' }}
        ref={ref}
      >
        {children}
      </motion.div>
    )}
  </InView>
)

export default FadeIn
