import { t } from 'i18next'
import { authRoutes } from '~/router/constants/authRoutes'
import { guestRoutes } from '~/router/constants/guestRoutes'
import { UserResponse } from '~/types'

export const home = {
  name: t('breadCrumbs.home'),
  path: guestRoutes.home.route
}

export const privacyPolicy = {
  name: t('breadCrumbs.privacyPolicy'),
  path: guestRoutes.privacyPolicy.route
}

export const myProfile = {
  name: t('breadCrumbs.myProfile'),
  path: authRoutes.accountMenu.myProfile.route
}

export const categories = {
  name: t('breadCrumbs.categories'),
  path: authRoutes.categories.route
}

export const myResources = {
  name: t('breadCrumbs.myResources'),
  path: authRoutes.myResources.root.route
}

export const newLesson = {
  name: t('breadCrumbs.newLesson'),
  path: authRoutes.myResources.newLesson.route
}

export const editLesson = {
  name: t('breadCrumbs.editLesson'),
  path: authRoutes.myResources.editLesson.route
}

export const newQuiz = {
  name: t('breadCrumbs.newQuiz'),
  path: authRoutes.myResources.newQuiz.route
}

export const editQuiz = {
  name: t('breadCrumbs.editQuiz'),
  path: authRoutes.myResources.editQuiz.route
}

export const userProfile = ({ data }: { data: UserResponse }) => ({
  name: `${data.firstName} ${data.lastName}`
})

export const newQuestion = {
  name: t('breadCrumbs.newQuestion'),
  path: authRoutes.myResources.newQuestion.route
}

export const editQuestion = {
  name: t('breadCrumbs.editQuestion'),
  path: authRoutes.myResources.editQuestion.route
}
