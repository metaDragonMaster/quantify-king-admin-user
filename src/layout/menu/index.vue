<template>
	<div class="menu">
		<el-menu
			:collapse="isCollapse"
			:default-active="defaultMenuActive"
			text-color="#fff"
			:router="true"
		>
			<el-menu-item
				v-for="item in menuData"
				:key="item.path"
				:index="item.path"
			>
				<img
					class="icon"
					src="@/assets/icons/icon-menu-1.png"
					alt="errorImage"
				/>
				<span>{{ item.title }}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { toRefs, computed, defineProps } from "vue";
const props = defineProps({
	isCollapse: {
		type: Boolean,
		default: false,
	},
});
const { isCollapse } = toRefs(props);
const Route = useRoute();
const defaultMenuActive = computed(() => Route.path);

const Router = useRouter();
const menuData = computed(() =>
	Router.getRoutes()
		.filter((item) => item.meta && item.meta.isNav)
		.map((item) => {
			return {
				path: item.path,
				title: item.meta && item.meta.title ? item.meta.title : "",
			};
		})
);
</script>
<style lang="scss" scoped>
:deep(.el-menu) {
	background-color: transparent;
	border-right: none;
	.el-menu-item {
		.icon {
			margin-right: 10px;
		}
		&:hover {
			background-color: rgba($color: #bdbdbd, $alpha: 0.5);
		}
		&.is-active {
			color: inherit;
			background-image: linear-gradient(87deg, #333333 0%, #3d3d3d 100%);
			background-color: transparent;
			border-right: 4px solid #47a663;
		}
		&.el-menu--collapse {
			span {
				display: none;
				@media screen and (min-width: 769px) {
					display: inline-block;
				}
			}
		}
	}
}
</style>
