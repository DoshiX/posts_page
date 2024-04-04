<template>
    <Card class="card" :id="id">
        <template #title>
            <h4>{{ title }}</h4>
        </template>
        <template #content>
            <p>{{ body }}</p>
        </template>
        <template #footer>
            <p>{{ author }}</p>
        </template>
    </Card>
</template>

<script setup>
defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})
</script>

<style scoped lang="scss">
.card {
    border-radius: 3px;
    min-width: 245px;

    &:deep(.p-card-title) {
        color: $card-title;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &:deep(.p-card-content) {
        &::first-letter {
            text-transform: uppercase;
        }
    }

    &:deep(.p-card-footer) {
        color: $card-body;
    }
}
</style>
