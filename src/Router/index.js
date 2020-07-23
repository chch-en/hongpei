import Login from "../pages/Login";
import Index from "../pages/Index";
import Study from "../pages/Study";
import Show from "../pages/Show";
import Swiper from "../pages/Swiper";
import QuestionAndAnswer from "../pages/QuestionAndAnswer";
import My from "../pages/My";
import Newbie from "../pages/skill/Newbie";




export default [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/swiper",
    component: Swiper
  },
  {
    path: "/",
    exact: true,
    component: Index,
    childrens: [
      {
        path: "/",
        component: Study,
      },
      {
        path: "/show",
        component: Show,
      }, {
        path: "/questionAndAnswer",
        component: QuestionAndAnswer,
      },
      {
        path: "/my",
        component: My,
      }, {
        path: "/newbie/:id",
        component: Newbie,
      }
    ]

  },
]