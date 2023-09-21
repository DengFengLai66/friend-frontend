import Index from '../pages/Index.vue';
import UserUpdatePage from '../pages/UserUpdatePage.vue';
import SearchPage from '../pages/SearchPage.vue';
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import TagUpdatePage from "../pages/TagUpdatePage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamDetailPage from "../pages/TeamDetailPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserRegisterPage from "../pages/UserRegisterPage.vue";


// 定义路由
const routes = [
    // { path: '/', component: Index },
    { path: '/user/login', title: '登录', component: UserLoginPage },
    { path: '/', component: Index },
    { path: '/team', title: '找队伍', component: TeamPage },
    { path: '/user', title: '个人', component: UserPage },
    { path: '/user/update', title: '用户详情', component: UserUpdatePage},
    { path: '/searchPage', title: '找伙伴', component: SearchPage },
    { path: '/user/edit', title: '编辑信息', component: UserEditPage },
    { path: '/user/list', title: '用户列表', component: SearchResultPage },
    // { path: '/user/login', title: '登录', component: UserLoginPage },
    { path: '/user/register', title: '注册', component: UserRegisterPage },
    { path: '/team/add', title: '创建队伍', component: TeamAddPage },
    { path: '/team/update', title: '更新队伍', component: TeamUpdatePage },
    {path: '/team/detail', title: '队伍详情', component: TeamDetailPage},
    { path: '/user/team/join', title: '我加入的队伍', component: UserTeamJoinPage },
    { path: '/user/team/create', title: '我创建的队伍', component: UserTeamCreatePage },
    { path: '/user/updateTags', title: '选择标签', component: TagUpdatePage},

    {
        path: "/:pathMatch(.*)*", name: "notFound", component: Index,  // 引入 组件
    },

]
export default routes