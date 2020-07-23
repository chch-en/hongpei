import Login from "../pages/Login";
import Index from "../pages/Index";
import Study from "../pages/Study";
import Show from "../pages/Show";
import Swiper from "../pages/Swiper";
import QuestionAndAnswer from "../pages/QuestionAndAnswer";
import My from "../pages/My";
import School from "../pages/School"
import Skill from "../pages/Skill"
import Classify from "../pages/Classify"
import Novice from "../pages/Novice"
import University from "../pages/university"
import CourseOne from "../componets/CourseOne"
import CourseTwo from "../componets/CourseTwo"
import CourseThree from "../componets/CourseThree"
import Newbie from "../pages/skill/Newbie"


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
    path: "/newbie/:id",
    component: Newbie,
  },
  {
    path: "/classify",
    component: Classify,
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