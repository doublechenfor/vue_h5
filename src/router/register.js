export default [
    {
        path: '/forgetpw',
        name:'forgetpw',
        component:()=>import('../components/forgetpw.vue')
    },
    {
        path: '/phoneverify',
        name:'phoneverify',
        component:()=>import('../components/phoneverify.vue')
    },
    {
        path: '/home/blog/editblog',
        name:'editblog',
        component:()=>import('../components/editblog.vue')
    },
]