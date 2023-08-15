<script></script>

<template>
  <div
    class="h-[650px] flex flex-col md:flex-row justify-center items-center bg-gradient-to-tr from-primary to-secondary p-8"
  >
    <div class="flex flex-col items-center md:items-start gap-4">
      <h1 class="text-4xl lg:text-8xl max-w-2xl w-fit">Only The Best, For The Best</h1>
      <a href="/shoes?Gender=Men%27s" class="homeBtn">Shop Mens</a>
      <a href="/shoes?Gender=Women%27s" class="homeBtn">Shop Womens</a>
    </div>

    <div
      class="flex-grow h-full relative pointer-events-none flex justify-center items-center bottom-10"
    >
      <img
        src="/assets/images/Replacement.webp"
        class="w-5/6 h-fit -scale-x-100 -rotate-[25deg] object-contain"
      />
    </div>
  </div>
  <HomePopular />
</template>
