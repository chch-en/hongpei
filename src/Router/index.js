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