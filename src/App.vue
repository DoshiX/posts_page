<template>
    <div class="page">
        <HeaderComponent v-model="searchAuthor"/>

        <main class="page__content">
            <div class="page__container">Список постов</div>
        </main>
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref } from 'vue';

const searchAuthor = ref('');

</script>

<style scoped lang="scss">
.page {
    &__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        margin-top: $height-header-mobile;

        @media #{$screen-desktop} {
            margin-top: $height-header-desktop;
        }
    }

    &__container {
        width: 100%;
        max-width: $width-conteiner + 2 * $gap-conteiner;
        margin: 0 auto;
        padding: 0 $gap-conteiner
    }
}
</style>
