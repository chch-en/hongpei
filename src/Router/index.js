import Login from '../pages/Login'
import Index from '../pages/Index'
import Study from '../pages/Study'
import Show from '../pages/Show'
import QuestionAndAnswer from '../pages/QuestionAndAnswer'
import My from '../pages/My'
import School from '../pages/School'
import Skill from '../pages/Skill'
import Novice from '../pages/Novice'
import University from '../pages/university'
import CourseOne from '../componets/CourseOne'
import CourseTwo from '../componets/CourseTwo'
import CourseThree from '../componets/CourseThree'
import Newbie from '../pages/skill/Newbie'
import Register from '../pages/Register'
import Demo from '../pages/skill/Demo'
import RecipesClassify from '../pages/classify/RecipesClassify'
import ClassifyDetail from '../pages/classify/ClassifyDetail'
import Recipe from '../pages/classify/Recipe'
import AllDish from '../pages/classify/AllDish'
import DishDetail from '../pages/classify/DishDetail'
import Client from '../pages/classify/Client'
import Answer from '../pages/answer'
import Question from '../pages/question'

export default [
  {
    path: '/answer/:id',
    component: Answer,
  },
  {
    path: '/question/:id',
    component: Question,
  },
  {
    path: '/university',
    component: University,
  },
  {
    path: '/skill',
    component: Skill,
  },
  {
    path: '/newbie/:id',
    component: Newbie,
  },
  {
    path: '/classify',
    component: RecipesClassify,
  },
  {
    path: '/demo',
    component: Demo,
  },

  {
    path: '/classifyDetail/:name',
    component: ClassifyDetail,
  },
  {
    path: '/recipe/:id',
    component: Recipe,
  },
  {
    path: '/allDish/:id',
    component: AllDish,
  },
  {
    path: '/dishDetail/:id',
    component: DishDetail,
  },
  {
    path: '/client/:id',
    component: Client,
  },

  {
    path: '/novice',
    component: Novice,
    childrens: [
      {
        path: '/',
        component: CourseOne,
      },
      {
        path: '/coursetwo',
        component: CourseTwo,
      },
      {
        path: '/coursethree',
        component: CourseThree,
      },
    ],
  },
  {
    path: '/school',
    component: School,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/',
    component: Index,
    childrens: [
      {
        path: '/show',
        exact: true,
        component: Show,
      },
      {
        path: '/questionAndAnswer',
        exact: true,
        component: QuestionAndAnswer,
      },
      {
        path: '/my',
        exact: true,
        component: My,
      },
      {
        path: '/',

        component: Study,
      },
    ],
  },
]
