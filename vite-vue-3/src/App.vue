<template>
    <router-view/>
</template>

<script>
import router from './router'
import {ref, provide} from "vue";

export default {
    name: 'App',
    setup() {
        const pagewidth = document.documentElement.clientWidth;
        const menuVisible = ref(pagewidth <= 500 ? false : true);
        provide("menuVisible", menuVisible);
        router.afterEach(() => {
            if (pagewidth <= 500) {
                menuVisible.value = false;
            }
        });
    }
}
</script>
