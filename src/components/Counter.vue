<template>
    <div>
        {{count}}
        <button @click="increment">自增</button>
    </div>
</template>

<script>
export default {
    name: "Counter",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            setTimeout(() => {
                this.count++
            }, 1000);
        }
    }
}
</script>

<style scoped>

</style>
