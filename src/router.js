import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Auth from './views/Auth.vue';
import Teams from './views/Teams.vue';
import Team from './views/Team.vue';
import League from "./views/League.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/league/:id",
      name: "league",
      component: League,

      props: true

    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams,
      props: true
    },
    {
      path: "/team/:id",
      name: "team",
      component: Team,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
