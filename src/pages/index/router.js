import Vue from 'vue'
import Router from 'vue-router'
//import auth from "@/auth/authService";

//import firebase from 'firebase/app'
//import 'firebase/auth'

import AuthenticationService from '@/services/AuthenticationService'
//import getData from '@/pages/trade/navbar/components/data.json'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            component: () => import('@/pages/trade/TradeMain.vue'),
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'WacaGlobal'
                    }
                },
                {
                    path: '/challenge',
                    name: 'challenge',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Home'
                    }
                },
                {
                    path: '/token-airdrop',
                    name: 'token-airdrop',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Home'
                    }
                },
                {
                    path: '/ho-tro',
                    name: 'Support',
                    component: () => import('@/pages/index/Faq.vue'),
                    meta: {
                        title: 'Help'
                    }
                },
                {
                    path: '/thong-bao',
                    name: 'Notification',
                    component: () => import('@/pages/index/Notification.vue'),
                    meta: {
                        title: 'Notify'
                    }
                },
                {
                    path: '/login',
                    name: 'login-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Login'
                    }
                },
                {
                    path: '/register',
                    name: 'register-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Register'
                    }
                },
                {
                    path: '/register/:r',
                    name: 'register-param-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Register'
                    }
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Forgot password'
                    }
                },
                {
                    path: '/register-resend-verify-email',
                    name: 'register-resend-verify-email-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Gửi lại email xác nhận'
                    }
                },
                {
                    path: '/reset-password',
                    name: 'reset-password-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đặt lại mật khẩu'
                    }
                },
                {
                    path: '/reset-password/:e',
                    name: 'reset-password-param-index',
                    component: () => import('@/pages/index/Home.vue'),
                    meta: {
                        title: 'Đặt lại mật khẩu'
                    }
                },
                {
                    path: '/trading',
                    name: 'client-index',
                    component: () => import('../../views/trading/Index.vue'),
                    meta: {
                        title: 'Trading',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/balance',
                    name: 'balance-user',
                    component: () => import('../../views/trading/Wallet.vue'),
                    meta: {
                        title: 'Balance',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/exchange',
                    name: 'exchange-user',
                    component: () => import('../../views/trading/Exchange.vue'),
                    meta: {
                        title: 'Exchange',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/trade/history',
                    name: 'trade-user-history',
                    component: () => import('../../views/trading/TradeHistory.vue'),
                    meta: {
                        title: 'Trade history',
                        requiresAuth: true
                    }
                },

                {
                    path: '/user/trade/copytrade',
                    name: 'copytrade',
                    component: () => import('../../views/trading/CopyTrade.vue'),
                    meta: {
                        title: 'Copy Trade',
                        requiresAuth: true
                    }
                },

                {
                    path: '/user/affiliate/general',
                    name: 'affiliate-user-general',
                    component: () => import('../../views/trading/Affiliate.vue'),
                    meta: {
                        title: 'Affiliate General',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/affiliate/championship',
                    name: 'championship',
                    component: () => import('../../views/trading/Championship.vue'),
                    meta: {
                        title: 'Championship',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/affiliate/lucky',
                    name: 'lucky',
                    component: () => import('../../views/trading/Lucky.vue'),
                    meta: {
                        title: 'Lucky',
                        requiresAuth: true
                    }
                },

                {
                    path: '/streak-challenge',
                    name: 'Streak Challenge',
                    component: () => import('../../views/trading/StreakChallenge.vue'),
                    meta: {
                        title: 'Streak Challenge',
                        requiresAuth: true
                    }
                },
                {
                    path: '/user/user-profile',
                    name: 'User Info',
                    component: () => import('../../views/users/Info.vue'),
                    meta: {
                        title: 'User Info',
                        requiresAuth: true
                    }
                },
            ],
            meta: {
                hideForAuth: true
            }
        },
        {
            path: '/',
            name: 'maintenance-page',
            component: () => import('@/pages/index/BaoTri.vue')
        },
       {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
    linkActiveClass: 'router-link-active ',
    linkExactActiveClass: ''
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    AuthenticationService.getStatusServer()
        .then((res) => {
            if (res.data.ok) {
                return next({ name: 'maintenance-page' })
            }
        });

    if (["login-index",
        "register-index",
        "register-param-index",
        "forgot-password-index",
        "forgot-password-index",
        "register-resend-verify-email-index",
        "reset-password-index",
        "reset-password-param-index"
    ].includes(to.name) && localStorage.hasOwnProperty("tokenUser")) {
        return next({ name: "client-index" })
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('tokenUser');
        if (!token){
            window.location.href = window.location.origin + '/login'
        } 
    }

    if (["lucky", "championship"].includes(to.name)) {
        AuthenticationService.getActiveGames().then((res) => {
            const activeGames = res.data;
            if (to.name == "lucky" && !activeGames.lucky) {
                return next({ name: "client-index" })
            }

            // if (to.name == "championship" && !activeGames.champion) {
            //     return next({ name: "client-index" })
            // }
        });
    }

    // firebase.auth().onAuthStateChanged(() => {
    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //         // const token = localStorage.getItem('tokenUser');

    //         // if (!token){
    //         //     //next({ name: 'login-index' })
    //         //     window.location.href = window.location.origin + '/login'
    //         // } else {
    //         //     next()
    //         // }

    //     } else {
    //         next() // does not require auth, make sure to always call next()!
    //     }

    //     // if (to.matched.some(record => record.meta.hideForAuth)) {
    //     //     const token = localStorage.getItem('tokenUser');

    //     //     if (token){
    //     //         next({ name: 'client-index' })
    //     //     } else {
    //     //         next()
    //     //     }
    //     // } else {
    //     //     next() // does not require auth, make sure to always call next()!
    //     // }

    // })

    return next()
})

export default router
