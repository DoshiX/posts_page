<template>
    <div class="page">
        <HeaderComponent v-model="search" />

        <main class="page__content">
            <div class="page__container">
                <CardsGroupComponent
                    class="page__posts"
                    :cardData="filteredList"
                    :loading="store.state.posts.loading"
                />
            </div>
        </main>

        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CardsGroupComponent from '@/components/CardsGroupComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const searchTarget = ref('');
const search = computed({
  get: () => { 
    return searchTarget.value;
  },
  set: (val) => {
    searchTarget.value = val;
    store.commit('posts/setPage', 1);
    store.commit('posts/setSearchValue', searchTarget.value);
  }
});

const filteredList = computed(()=> {
    const { filteredList } = store.getters['posts/filteredList'];
    return filteredList;
});

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

    &__posts {
        margin-bottom: 105px;

        @media #{$screen-desktop} {
            margin-bottom: 80px;
        }
    }
}
</style>
