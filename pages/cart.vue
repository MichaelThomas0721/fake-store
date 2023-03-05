<script>
import Shoes from "~/data/shoes";

export default ({
    data() {
        return {
            cartItemsNum: 0,
            cartItems: [],
        }
    },
    mounted() {
        if (!localStorage) return;
        let items = JSON.parse(localStorage.getItem("items"));
        if (items) {
            let shoeItems = Shoes({ shoes: { id: items } });
            this.cartItems = shoeItems.shoes;
            this.cartItemsNum = shoeItems.shoes.length;
        }
    }
})
</script>

<template>
<CartItem v-for="cartItem in cartItems" :item="cartItem"/>
</template>