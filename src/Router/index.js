import Login from "../pages/Login";
import Index from "../pages/Index";
import Study from "../pages/Study";
import Show from "../pages/Show";
import QuestionAndAnswer from "../pages/QuestionAndAnswer";
import My from "../pages/My";


export default [
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