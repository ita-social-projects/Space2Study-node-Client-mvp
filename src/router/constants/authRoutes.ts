export const authRoutes = {
  categories: { route: 'categories', path: '/categories' },
  subjects: { route: 'categories/subjects', path: '/categories/subjects' },
  userProfile: { route: 'user/:id', path: '/user' },
  myResources: {
    root: { route: 'my-resources', path: '/my-resources' },
    newLesson: {
      route: 'my-resources/new-lesson',
      path: '/my-resources/new-lesson'
    },
    editLesson: {
      route: 'my-resources/edit-lesson/:id',
      path: '/my-resources/edit-lesson'
    },
    newQuiz: {
      route: 'my-resources/new-quiz',
      path: '/my-resources/new-quiz'
    },
    editQuiz: {
      route: 'my-resources/edit-quiz/:id',
      path: '/my-resources/edit-quiz'
    },
    newQuestion: {
      route: 'my-resources/new-question',
      path: '/my-resources/new-question'
    },
    editQuestion: {
      route: 'my-resources/edit-question/:id',
      path: '/my-resources/edit-question'
    }
  },
  accountMenu: {
    myProfile: { route: 'my-profile', path: '/my-profile' },
    logout: { route: 'logout', path: '/logout' }
  }
}
