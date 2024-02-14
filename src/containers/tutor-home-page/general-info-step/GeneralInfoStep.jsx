import { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { userService } from '~/services/user-service'

import { createFilterOptions } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AppTextField from '~/components/app-text-field/AppTextField'
import AppTextArea from '~/components/app-text-area/AppTextArea'
import AppAutoComplete from '~/components/app-auto-complete/AppAutoComplete'
import Loader from '~/components/loader/Loader'
import useBreakpoints from '~/hooks/use-breakpoints'
import useAxios from '~/hooks/use-axios'
import useForm from '~/hooks/use-form'

import img from '~/assets/img/tutor-home-page/become-tutor/general-info.svg'
import { useStepContext } from '~/context/step-context'
import { validations } from '~/components/user-steps-wrapper/constants'
import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'

const GeneralInfoStep = ({
  btnsBox,
  stepLabel,
  isUserFetched,
  setIsUserFetched
}) => {
  const { t } = useTranslation()
  const { isLaptopAndAbove, isMobile } = useBreakpoints()
  const { stepData, handleStepData } = useStepContext()
  const { userId, userRole } = useSelector((state) => state.appMain)
  const generalInfo = stepData[stepLabel]

  const {
    handleInputChange,
    handleBlur,
    handleNonInputValueChange,
    data,
    errors
  } = useForm({
    initialValues: generalInfo.data,
    initialErrors: generalInfo.errors,
    validations
  })

  const filterOptions = (options, state) => {
    const defaultFilterOptions = createFilterOptions()
    return defaultFilterOptions(options, state).slice(0, 300)
  }

  const onChangeCountry = (_, value) => {
    if (data.country !== value) {
      handleNonInputValueChange('city', null)
      handleNonInputValueChange('country', value)
    }
    if (value) fetchCities
  }

  const onChangeCity = (_, value) => {
    handleNonInputValueChange('city', value)
  }

  const getUserById = useCallback(
    () => userService.getUserById(userId, userRole),
    [userId, userRole]
  )

  const updateUserName = useCallback(
    (user) => {
      handleNonInputValueChange('firstName', user.firstName)
      handleNonInputValueChange('lastName', user.lastName)

      setIsUserFetched(true)
    },
    [handleNonInputValueChange, setIsUserFetched]
  )

  const { loading: userLoading, fetchData: fetchUser } = useAxios({
    service: getUserById,
    defaultResponse: { firstName: '', lastName: '' },
    fetchOnMount: false,
    onResponse: updateUserName
  })

  useEffect(() => {
    !isUserFetched && fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mockCountries = ['Ukraine', 'USA', 'Germany', 'France', 'Italy']
  const mockCities = ['Kyiv', 'New York', 'Berlin', 'Paris', 'Rome']

  const fetchCountries = () => mockCountries
  const fetchCities = () => mockCities

  useEffect(() => {
    handleStepData(stepLabel, data, errors)
  }, [data, errors, stepLabel, handleStepData])

  const onFocusCountry =
    !data.country && !mockCountries.length ? fetchCountries : undefined

  if (userLoading) {
    return (
      <Box sx={styles.container}>
        <Loader />
      </Box>
    )
  }

  return (
    <Box sx={styles.container}>
      {isLaptopAndAbove && (
        <Box sx={styles.imgContainer}>
          <Box component='img' src={img} sx={styles.img} />
        </Box>
      )}
      <Box component='form' sx={styles.form}>
        <Box>
          <Typography mb='20px'>
            {t('becomeTutor.generalInfo.title')}
          </Typography>

          {isMobile && (
            <Box sx={styles.imgContainer}>
              <Box component='img' src={img} sx={styles.img} />
            </Box>
          )}
          <Box sx={styles.formFieldsContainer}>
            <AppTextField
              autoFocus
              errorMsg={t(errors.firstName)}
              fullWidth
              label={t('common.labels.firstName')}
              onBlur={handleBlur('firstName')}
              onChange={handleInputChange('firstName')}
              required
              sx={{ mb: '5px' }}
              type='text'
              value={data.firstName}
            />
            <AppTextField
              errorMsg={t(errors.lastName)}
              fullWidth
              label={t('common.labels.lastName')}
              onBlur={handleBlur('lastName')}
              onChange={handleInputChange('lastName')}
              required
              sx={{ mb: '5px' }}
              type='text'
              value={data.lastName}
            />

            <AppAutoComplete
              onChange={onChangeCountry}
              onFocus={onFocusCountry}
              options={mockCountries}
              sx={{ mb: '30px' }}
              textFieldProps={{
                label: t('common.labels.country')
              }}
              type='text'
              value={data.country}
            />

            <AppAutoComplete
              disabled={!data.country}
              filterOptions={filterOptions}
              onChange={onChangeCity}
              options={mockCities}
              sx={{ mb: '30px' }}
              textFieldProps={{
                label: t('common.labels.city')
              }}
              type='text'
              value={data.city}
            />
          </Box>
          <AppTextArea
            fullWidth
            label={t('becomeTutor.generalInfo.textFieldLabel')}
            maxLength={200}
            onChange={handleInputChange('professionalSummary')}
            type='text'
            value={data.professionalSummary}
          />
        </Box>
        {btnsBox}
      </Box>
    </Box>
  )
}

export default GeneralInfoStep
