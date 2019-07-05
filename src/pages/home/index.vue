<template>
    <div>
        <!-- <router-view></router-view> -->
        <!-- <Charts/> -->
       <Welcome/>
    </div>
</template>

<script>
import TotalStatus from './component/total-status'
import TodoList from './component/todo-list'
import Charts from './component/charts'
import Welcome from './component/wellcome'
export default {
    data() {
        return {}
    },
    mounted() {

    },
    components: {
        TotalStatus,
        TodoList,
        Charts,
        Welcome
    }
}
</script>
