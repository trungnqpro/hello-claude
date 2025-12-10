<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <div class="mb-8">
        <div class="mb-4 flex justify-center">
          <img src="~/assets/images/logo.png" alt="VNA Logo" class="h-20" />
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
