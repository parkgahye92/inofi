import { createRouter, createWebHistory  } from "vue-router";
import Main from "../views/main/Main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/sub/Explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "@/views/contents/Explore.vue"),
    meta: {
      title: "Explore",
    },
  },
  {
    path: "/sub/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/contents/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/sub/Auction",
    name: "Auction",
    component: () =>
      import(/* webpackChunkName: "auction" */ "@/views/contents/Auction.vue"),
    meta: {
      title: "Auction",
    },
  },
  {
    path: "/sub/Create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "create" */ "@/views/contents/Create.vue"),
    meta: {
      title: "Create",
    },
  },
  {
    path: "/sub/MyPage",
    name: "MyPage",
    component: () =>
      import(/* webpackChunkName: "myPage" */ "@/views/contents/MyPage.vue"),
    meta: {
      title: "MyPage",
    },
  },
  {
    path: "/sub/Stake",
    name: "Stake",
    component: () =>
      import(/* webpackChunkName: "stake" */ "@/views/contents/Stake.vue"),
    meta: {
      title: "Stake",
    },
  },
  {
    path: "/sub/Tickets",
    name: "Tickets",
    component: () =>
      import(/* webpackChunkName: "Tickets" */ "@/views/contents/Tickets.vue"),
    meta: {
      title: "Tickets",
    },
  },
  {
    path: "/sub/Ethereum",
    name: "Ethereum",
    component: () =>
      import(/* webpackChunkName: "Ethereum" */ "@/views/contents/Ethereum.vue"),
    meta: {
      title: "Ethereum",
    },
  },
  {
    path: "/sub/Bsc",
    name: "Bsc",
    component: () =>
      import(/* webpackChunkName: "Bsc" */ "@/views/contents/Bsc.vue"),
    meta: {
      title: "Bsc",
    },
  },
  {
    path: "/sub/Klaytn",
    name: "Klaytn",
    component: () =>
      import(/* webpackChunkName: "klaytn" */ "@/views/contents/Klaytn.vue"),
    meta: {
      title: "Klaytn",
    },
  },
  {
    path: "/sub/Polygon",
    name: "Polygon",
    component: () =>
      import(/* webpackChunkName: "Polygon" */ "@/views/contents/Polygon.vue"),
    meta: {
      title: "Polygon",
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const makeTitle = (title) =>
  title ? `${title} | Inofi` : "Inofi";

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = makeTitle(to.meta.title);
  });
});

export default router;
