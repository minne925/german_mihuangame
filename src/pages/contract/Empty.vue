<template>
    <van-empty :style="`height: ${emptyHeight}`"
        image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" image-size="40">
        <template #description>
            <span :style="`color: ${emptyColor};`">{{ emptyTxt != '' ? emptyTxt : $t('暂时没有数据') }}</span>
        </template>
    </van-empty>
</template>
<script>

export default {
    name: 'Empty',
    props: {
        emptyTxt: {
            type: String,
            default: '',
        },
        emptyColor: {
            type: String,
            default: '#969799',
        },
        emptyHeight: {
            type: String,
            default: '36px',
        },
    },
    data() {
        return {
            
        }
    },
    methods: {

    },
    created() {

    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
.van-empty {
    min-height: 100px;
    padding: 0;

    ::v-deep(img) {
        object-fit: contain;
    }

    ::v-deep(.van-empty__description) {
        margin-top: 10px;
        padding: 0 40px;
        text-align: center;
    }
}
</style>
