<script>
export default {
  methods: {
    Checkout() {
      console.log("CLICKED");
      let data = fetch("http://localhost:3000/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            { id: 1, quantity: 12 },
            { id: 2, quantity: 1 },
          ],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("I HOPE THIS WORKS");
          window.location.href = data.url;
        });
    },
  },
};
</script>

<template>
  <div>
    <button
      class="bg-green-400 p-12 rounded-full text-red-300"
      @click="Checkout"
    >
      CLICK ME!!!!!!!!!!!
    </button>
  </div>
</template>
