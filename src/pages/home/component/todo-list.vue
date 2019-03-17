<template>
    <div>
       mmm
       <div @click="sub">click</div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods:{
        sub(){
            this.$root.$emit('even','我是todo_list 模块（非父子组件通信）')
        }
    }
}
</script>
