import { authRoutes } from '~/router/constants/authRoutes'

export const findOffersChildRoutes = [
  { route: 'categories', path: authRoutes.categories.route },
  { route: 'subjects', path: authRoutes.subjects.path }
]

export const tutorRoutes = {
  navBar: {
    findOffers: {
      route: 'findOffers',
      path: authRoutes.categories.path
    },
    myResources: {
      route: 'my-resources',
      path: authRoutes.myResources.root.path
    }
  }
}
