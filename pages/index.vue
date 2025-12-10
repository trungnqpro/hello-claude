<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <div class="mb-8">
        <div class="inline-flex items-center gap-3 mb-4">
          <div class="w-16 h-16 bg-vna-green rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <h1 class="text-4xl font-bold text-vna-green">VNA</h1>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Nền tảng đấu giá trực tuyến VNA</h2>
        <p class="text-gray-600">Tham gia dễ dàng, sở hữu nhanh chóng!</p>
      </div>

      <NuxtLink
        to="/login"
        class="inline-block btn-primary"
      >
        Đăng nhập ngay
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'VNA - Nền tảng đấu giá trực tuyến',
  meta: [
    { name: 'description', content: 'Nền tảng đấu giá trực tuyến VNA - Tham gia dễ dàng, sở hữu nhanh chóng!' }
  ]
})
</script>
