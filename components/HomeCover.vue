<script></script>

<template>
  <div
    class="h-[650px] flex flex-row justify-center items-center bg-gradient-to-tr from-primary to-secondary"
  >
    <div class="flex flex-col gap-4">
      <h1 class="text-8xl max-w-2xl">Only The Best, For The Best</h1>
      <a href="/shoes?Gender=Men%27s" class="homeBtn">Shop Mens</a>
      <a href="/shoes?Gender=Women%27s" class="homeBtn">Shop Womens</a>
    </div>

    <div
      class="max-w-2xl w-full h-full relative pointer-events-none"
    >
      <img
        src="/assets/images/Replacement.webp"
        class="w-full h-full -scale-x-100 -rotate-[25deg] pb-16 object-contain"
      />
    </div>
  </div>
  <HomePopular />
</template>
