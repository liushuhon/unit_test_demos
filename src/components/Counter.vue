<template>
    <div>
        {{count}}
        <el-button @click="increment">自增</el-button>
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
            return new Promise((resolve, reject) => {
                if (typeof this.count !== "undefined") {
                    resolve(1);
                } else {
                    reject('error')
                }
            }).then(() => {
                this.count++;
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
