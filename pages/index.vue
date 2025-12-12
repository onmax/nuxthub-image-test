<template>
  <div class="p-8 max-w-2xl">
    <h1 class="text-2xl font-bold mb-4">NuxtHub Blob + NuxtImg Test (FS driver)</h1>

    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-2">1. Raw img from public folder</h2>
      <img src="/test.jpg" width="300" class="rounded shadow" />
    </section>

    <section class="mb-8">
      <h2 class="text-lg font-semibold mb-2">2. NuxtImg from public folder (FS)</h2>
      <p class="text-sm text-gray-500 mb-2">FS driver: pass-through (no optimization)</p>
      <NuxtImg src="/test.jpg" width="300" quality="80" class="rounded shadow" />
    </section>
  </div>
</template>
