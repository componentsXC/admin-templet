///* 需要权限判断的路由 */
const dynamicRoutes = [
    ///* 软文推广 */
    {
        path: '/soft',
        component: () => import('@/pages/soft'),
        name: 'soft',
        meta: {
            name: '软文管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'softList',
                name: 'softList',
                component: () => import('@/pages/soft/softList'),
                meta: {
                    name: '软文列表',
                    icon: 'icon-order-manage'
                }
            },
        ]
    },
    ///* 会员管理 */
    {
        path: '/order',
        component: () => import('@/pages/order-manage'),
        name: 'order-manage',
        meta: {
            name: '会员管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: () => import('@/pages/order-manage/order-list'),
                meta: {
                    name: '会员信息',
                    icon: 'icon-order-manage'
                }
            },
        ]
    },

    ///* 分享管理 */
    {
        path: '/goods',
        component: () => import('@/pages/goods-manage'),
        name: 'goods',
        meta: {
            name: '分享管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'list',
                name: 'goods-list',
                component: () => import('@/pages/goods-manage/goods-list'),
                meta: {
                    name: '分享信息',
                    icon: 'icon-order-manage'
                }
            },
        ]
    },
    //系统管理
    {
        path: '/test',
        component: () => import('@/pages/test'),
        name: '系统管理',
        meta: {
            name: '系统管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'test1',
                component: () => import('@/pages/test/test1'),
                name: '权限管理',
                meta: {
                    name: '权限管理',
                    icon: 'icon-order-manage'
                }
            },

        ]
    },
]

export default dynamicRoutes
