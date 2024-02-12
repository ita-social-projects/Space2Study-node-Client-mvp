import Box from '@mui/material/Box'

import { useTranslation } from 'react-i18next'

import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { studentRoutes } from '~/router/constants/studentRoutes'
import { howItWorksCards } from '~/containers/student-home-page/student-how-it-works/HowItWorksCards'

import { styles } from '~/containers/student-home-page/student-how-it-works/student-how-it-works.styles'

const sectionId = studentRoutes.navBar.howItWorks.route

const StudentHowItWorks = () => {
  const { t } = useTranslation()

  const cards = howItWorksCards.map((item, index) => {
    return (
      <Box key={index} sx={styles.cardWrapper}>
        <Box
          alt={item.title}
          component='img'
          src={item.image}
          sx={styles.cardImg}
        ></Box>

        <TitleWithDescription
          description={t(item.description)}
          style={styles.titleWithDescription}
          title={t(item.title)}
        />
      </Box>
    )
  })

  return (
    <Box className='section' id={sectionId} sx={styles.container}>
      <TitleWithDescription
        description={t('studentHomePage.howItWorks.description')}
        style={styles.sectionTitleComp}
        title={t('studentHomePage.howItWorks.title')}
      />
      <Box sx={styles.cardsContainer}>{cards}</Box>
    </Box>
  )
}

export default StudentHowItWorks
