<template>
    <footer class="footer">
        <Paginator
            :rows="store.state.posts.limitPosts"
            :totalRecords="totalPostsNumber"
            v-model="store.state.posts.page"
            @page="onPaginate"
        ></Paginator>
    </footer>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const onPaginate = async (e) => {
    store.commit('posts/setPage', e.page + 1);
};

onMounted(async () => {
    await store.dispatch('posts/fetchData');
});

const totalPostsNumber = computed(()=> {
    return store.getters['posts/getTotalPostNumber'];
});
</script>

<style scoped lang="scss">
.footer {
    &:deep(.p-paginator) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        border-radius: 0;

        background-color: $paginator-background;
        box-shadow: $paginator-shadow;
    }
}
</style>