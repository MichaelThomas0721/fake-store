<template>
  <div class="home">
    <div class="card">
      <h1 class="title"><slot name="title">Nuxt 3 Starter Kit</slot></h1>
      <p><slot name="message">This is a Nuxt 3 starter kit.</slot></p>
      <p class="credit">
        Brought to you by
        <a href="https://twitter.com/RicardoBalk">Ricardo Balk</a>.
      </p>
    </div>
  </div>
</template>
