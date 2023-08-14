<script>
export default {
  async setup() {
    const route = useRoute();
    let session_id;
    if (route.query.session_id) {
      session_id = route.query.session_id;
    }
    let sessionDetails;
    await fetch(this.$config.ABS_URL + "/api/stripeCheckedout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionDetails = data;
      });
    sessionDetails = sessionDetails.session;
    if (!sessionDetails) return;
    let emptyCart = true;
    let name = sessionDetails.customer_details.name;
    return { session_id, name, emptyCart };
  },
  mounted() {
    if (!localStorage) return;
    localStorage.setItem("items", JSON.stringify([]));
    this.$emit("updateCart");
  },
};
</script>
<template>
  <div>
    <p>Thank you for your order {{ name }}, this is a fake store for my portfolio so you items will not be shipped and you will not receive a tracking number</p>
  <p>If you enjoyed this site, check out my other work at</p>
  <a href="https://michaelthomastech.ca">michaelthomastech.ca</a>
  </div>
</template>
