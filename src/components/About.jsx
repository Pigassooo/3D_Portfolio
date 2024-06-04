import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
                I am a software developer with a passion for building beautiful and functional websites and applications. I have a strong background in web development and have worked on several projects in the field. I have a strong understanding of HTML, CSS, JavaScript, and React.js. I am currently looking for new opportunities to expand my skills and grow professionally.
            </motion.p>
        </>
    )
}

export default About