import Skill from "../pages/Skill"
import Classify from "../pages/Classify"
import Novice from "../pages/Novice"
import School from "../pages/School"
import Rcamor from "../pages/Rcamor"


export default [
    {
        path: "/Skill",
        component: Skill
    },
    {
        path: "/classify",
        component: Classify,
    },
    {
        path: "/novice",
        component: Novice,
    },
    {
        path: "/school",
        component: School,
        childrens: [
            {
                path: "/rcamor/:id",
                component: Rcamor,
            },
        ],

    }

]