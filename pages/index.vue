<script setup lang="ts">
const images = ref<string[]>([])
const loading = ref(false)

async function upload(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file)
    return

  loading.value = true
  try {
    const form = new FormData()
    form.append('file', file)
    const res = await $fetch<{ pathname: string }>('/api/upload', { method: 'POST', body: form })
    images.value.unshift(res.pathname)
  }
  catch {
    console.error('Upload failed')
  }
  finally {
    loading.value = false
  }
}

onMounted(async () => {
  const res = await $fetch<{ blobs: { pathname: string }[] }>('/api/list')
  images.value = res.blobs.map(b => b.pathname)
})
</script>

<template>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-2">
      NuxtHub Image Demo
    </h1>
    <p class="text-gray-500 mb-6">
      Cloudflare R2 + Image Resizing
    </p>

    <section class="mb-8 p-4 bg-gray-100 rounded-lg">
      <h2 class="font-semibold mb-2">
        Upload Image
      </h2>
      <input type="file" accept="image/*" @change="upload">
      <p v-if="loading" class="text-blue-500 text-sm mt-2">
        Uploading...
      </p>
    </section>

    <section v-if="images.length" class="mb-8">
      <h2 class="font-semibold mb-4">
        Blob Images (with CF Image Resizing)
      </h2>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="img in images" :key="img" class="border rounded p-2">
          <NuxtImg :src="`/images/${img}`" width="300" quality="80" class="rounded" />
          <p class="text-xs text-gray-500 mt-1 truncate">
            {{ img }}
          </p>
        </div>
      </div>
    </section>

    <section class="p-4 bg-blue-50 rounded-lg text-sm">
      <p><strong>How it works:</strong></p>
      <ul class="list-disc ml-4 mt-2 space-y-1">
        <li>Images stored in Cloudflare R2</li>
        <li>Served via <code>/images/**</code> route (auto-generated)</li>
        <li>Optimized with Cloudflare Image Resizing</li>
      </ul>
    </section>
  </div>
</template>
