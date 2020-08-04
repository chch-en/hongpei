import Index from '../pages/Index'
import Study from '../pages/Study'
import Show from '../pages/Show'
import Swiper from '../pages/Swiper'
import QuestionAndAnswer from '../pages/QuestionAndAnswer'
import My from '../pages/My'
import School from '../pages/School'
import Skill from '../pages/Skill'
import Newbie from '../pages/skill/Newbie'
import Novice from '../pages/Novice'
import University from '../pages/university'
import CourseOne from '../componets/CourseOne'
import CourseTwo from '../componets/CourseTwo'
import CourseThree from '../componets/CourseThree'
import RecipesClassify from '../pages/classify/RecipesClassify'
import ClassifyDetail from '../pages/classify/ClassifyDetail'
import Recipe from '../pages/classify/Recipe'
import Activity from '../person/activity'
import Contribution from '../person/contribution'
import Course from '../person/course'
import Details1 from '../person/details1'
import History from '../person/history'
import Medal from '../person/medal'
import Sign from '../person/sign'
import Talent from '../person/talent'
import Login from '../pages/Login'
import Works from '../works/works'
import Ask from '../works/ask'
import Recipes from '../works/recipes'
import Answer from '../pages/answer'
import Question from '../pages/question'
export default [
  {
    path: '/question/:id',
    component: Question,
  },
  {
    path: '/answer/:id',
    component: Answer,
  },
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
    path: '/newbie/:id',
    component: Newbie,
  },
  {
    path: '/talent',
    component: Talent,
  },
  {
    path: '/sign',
    component: Sign,
  },
  {
    path: '/medal',
    component: Medal,
  },
  {
    path: '/details1/:id',
    component: Details1,
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/course',
    component: Course,
  },
  {
    path: '/contribution',
    component: Contribution,
  },
  {
    path: '/activity',
    component: Activity,
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
    path: '/classify',
    component: RecipesClassify,
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
