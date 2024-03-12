import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { styles } from '~/containers/tutor-home-page/subjects-step/SubjectsStep.styles'

const SubjectsStep = ({ btnsBox }) => {
  const { t } = useTranslation()

  return (
    <Box sx={styles.container}>
      <Box sx={styles.rigthBox}>
        <Box sx={styles.contentBox}>
          <Typography mb='20px'>{t('becomeTutor.categories.title')}</Typography>
        </Box>
        {btnsBox}
      </Box>
    </Box>
  )
}

export default SubjectsStep
