<template>
<div>
    <el-row class="titleName">佳颖</el-row>
    <el-menu
        :collapse="isSidebarNavCollapse"
        background-color="#304156"
        text-color="#eee"
        active-text-color="#4dbcff"
        :default-active="currentMenu"
    >
        <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
    </el-menu>
</div>
    
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isCollapse: true
        }
    },
    computed: {
        ...mapState(['isSidebarNavCollapse']),
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/_mixin.scss';
.titleName{
    &{font-size: 20px;color: #f5f5f5;@include flex-center();border-bottom: 1px rgba(255,255,255,.5) solid;padding: 20px 0;}
}
</style>

