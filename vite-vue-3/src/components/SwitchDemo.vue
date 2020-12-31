<template>
    <div>
        <Switch v-model:value="bool"/>
    </div>
</template>

<script>
import Switch from "../lib/Switch.vue"
import {ref} from "vue";

export default {
    name: "SwitchDemo",
    components: {Switch},
    setup() {
        const bool = ref(true);
        return {bool}
    }
}
</script>

<style scoped lang="scss">

</style>
