import Layout from '@/layout/index.vue';
const routes = [{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/query/user',
		children: [
			{
				path: '/query/user',
				name: 'queryUser',
				component: () => import('@/views/query/user/index.vue'),
				meta: {
					title: '查询用户',
					isNav: true,
				},
			},
		],
	},
	{
		path: '/error/404',
		name: 'error404',
		meta: {
			title: '错误页面-找不到资源',
		},
		component: () => import('@/views/errorPage/404.vue'),
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/error/404',
	},
];
export default routes;
