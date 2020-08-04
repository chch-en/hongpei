import Login from "../pages/Login";
import Index from "../pages/Index";
import Study from "../pages/Study";
import Show from "../pages/Show";
import QuestionAndAnswer from "../pages/QuestionAndAnswer";
import My from "../pages/My";
import School from "../pages/School"
import Rcamor from "../pages/Rcamor"


export default [
    {
        path: "/school",
        exact: true,
        component: School,
    },
    {
        path: "/rcamor/:id",
        exact: true,
        component: Rcamor,
    },


    {
        path: "/login",
        component: Login
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
            }
        ]

    },
]