<script>
import shoes from '~/data/shoes';
export default {
    data() {
        return {
            shoes: shoes,
        }
    }
}
</script>

<template>
    <StoreTemplate :items="shoes"/>
</template>