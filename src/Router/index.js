<<<<<<< HEAD
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
=======
import Login from "../pages/Login";
import Index from "../pages/Index";
import Study from "../pages/Study";
import Show from "../pages/Show";
import Swiper from "../pages/Swiper";
import QuestionAndAnswer from "../pages/QuestionAndAnswer";
import My from "../pages/My";
import School from "../pages/School"
import Skill from "../pages/Skill"
import Novice from "../pages/Novice"
import University from "../pages/university"
import CourseOne from "../componets/CourseOne"
import CourseTwo from "../componets/CourseTwo"
import CourseThree from "../componets/CourseThree"
import RecipesClassify from "../pages/classify/RecipesClassify"
import ClassifyDetail from "../pages/classify/ClassifyDetail"
import Recipe from "../pages/classify/Recipe"


export default [
  {
    path: "/university",
    component: University
  },
  {
    path: "/skill",
    component: Skill
  },
  {
    path: "/classify",
    component: RecipesClassify
  },
  {
    path: "/classifyDetail/:name",
    component: ClassifyDetail
  },
  {
    path: "/recipe/:id",
    component: Recipe
  },

  {
    path: "/novice",
    component: Novice,
    childrens: [
      {
        path: "/",
        component: CourseOne,
      },
      {
        path: "/coursetwo",
        component: CourseTwo,
      },
      {
        path: "/coursethree",
        component: CourseThree,
      },
    ]
  },
  {
    path: "/school",
    component: School,
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Index,
    childrens: [

      {
        path: "/show",
        exact: true,
        component: Show,
      }, {
        path: "/questionAndAnswer",
        exact: true,
        component: QuestionAndAnswer,
      },
      {
        path: "/my",
        exact: true,
        component: My,
      },
      {
        path: "/",

        component: Study,

      }
    ]

  },
]
>>>>>>> 34da7f971316a73d0930225acb818d1d5d0a8e25
