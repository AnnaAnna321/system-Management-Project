export default {
    state: {
        isCollapse: false
        // 用于控制菜单展开或者收起
    },
    mutations: {
        // 修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}