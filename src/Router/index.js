import Login from '../pages/Login'
import Index from '../pages/Index'
import Study from '../pages/Study'
import Show from '../pages/Show'
import QuestionAndAnswer from '../pages/QuestionAndAnswer'
import My from '../pages/My'
import Medal from '../person/medal'
import Activity from '../person/activity'
import Sign from '../person/sign'
import Course from '../person/course'
import History from '../person/history'
import Talent from '../person/talent'
import Contribution from '../person/contribution'
import Details1 from '../person/details1'
import Works from '../works/works'
import Ask from '../works/ask'
import Recipes from '../works/recipes'
export default [
  {
    path: '/works',
    component: Works,
  },
  {
    path: '/ask',
    component: Ask,
  },
  {
    path: '/recipes',
    component: Recipes,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/details1/:id',
    component: Details1,
  },
  {
    path: '/medal',
    component: Medal,
  },
  {
    path: '/activity',
    component: Activity,
  },
  {
    path: '/sign',
    component: Sign,
  },
  {
    path: '/course',
    component: Course,
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/talent',
    component: Talent,
  },
  {
    path: '/contribution',
    component: Contribution,
  },
  {
    path: '/',
    exact: true,
    component: Index,
    childrens: [
      {
        path: '/',
        component: Study,
      },
      {
        path: '/show',
        component: Show,
      },
      {
        path: '/questionAndAnswer',
        component: QuestionAndAnswer,
      },
      {
        path: '/my',
        component: My,
      },
    ],
  },
]
