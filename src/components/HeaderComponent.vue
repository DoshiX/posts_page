<template>
    <header class="header">
        <div class="header__search">
            <IconField
                iconPosition="left"
                class="header__input-wrapper"
            >
                <InputIcon class="pi pi-search"></InputIcon>
                <InputText
                    v-model="model"
                    placeholder="Filter by author..."
                    size="large"
                />
            </IconField>
        </div>
    </header>
</template>

<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const model = defineModel()

</script>

<style scoped lang="scss">
.header {
    position: fixed;
    z-index: $z-index-header;
    top: 0;
    right: 0;
    left: 0;

    flex-shrink: 0;

    height: $height-header-mobile;

    background-color: $header-background;

    @media #{$screen-desktop} {
        height: $height-header-desktop;
    }

    &__search {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
    }

    &__input {
        &-wrapper {
            box-shadow: $input-shadow;
        }
    }
}
</style>
