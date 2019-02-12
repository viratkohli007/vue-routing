import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserEdit from './components/user/UserEdit.vue'
import Profiel from './components/user/profiel.vue'
import Ustart from './components/user/UserStart.vue'
import Udetails from './components/user/UserDetail.vue'

export const routes = [
{path: '', component: Home, name: "home" },
{path: '/user', component: User, children: [
    {path:"", component: Ustart},
    {path:":id", component: Profiel},
    {path:":id/edit", component: UserEdit}
] },
 {path:"/userDetail", component: Udetails, name: 'userd'},
 {path: "/redirect-me", redirect:"/"},
 {path: '*', redirect: '/'}
];
