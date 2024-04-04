<template>
    <div class="cards">
        <div class="cards__item" v-for="item in cardData" :key="item.id">
            <CardComponent
                :id="item.id"
                :title="item.title"
                :body="item.body"
                :author="item.author"
            />
        </div>
    </div>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';

const props = defineProps({
    cardData: {
        type: Array
    }
})

</script>

<style scoped lang="scss">
.cards {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    margin-top: -20px;

    @media #{$screen-tablet} {
        flex-direction: row;

        margin-left: -10px;
        margin-right: -10px;
    }

    &__item {
        margin-top: 20px;

        @media #{$screen-tablet} {
            width: math.percentage(math.div(1,2));

            padding-right: 10px;
            padding-left: 10px;
        }

        @media #{$screen-desktop} {
            width: math.percentage(math.div(1,3));
        }
    }
}
</style>
