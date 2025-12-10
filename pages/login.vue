<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8">
    <div class="w-full max-w-7xl">
      <!-- Top header - visible on mobile -->
      <div class="lg:hidden mb-6">
        <h1 class="text-2xl font-bold text-gray-800 text-center">Đăng nhập</h1>
      </div>

      <!-- Main Content -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Left Side - Illustration -->
          <div class="hidden lg:block">
            <LoginIllustration />
          </div>

          <!-- Right Side - Login Form -->
          <div class="flex items-center justify-center p-8 lg:p-12">
            <div class="w-full max-w-md">
              <!-- Header for desktop - matches the screenshot layout -->
              <div class="mb-4 text-right">
                <p class="text-sm text-gray-500">Sign in / Đăng nhập</p>
              </div>

              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <!-- Footer text for mobile illustration -->
      <div class="lg:hidden mt-8 text-center">
        <div class="mb-2">
          <img src="~/assets/images/logo.png" alt="VNA Logo" class="h-12 mx-auto" />
        </div>
        <p class="text-gray-600 text-sm">Nền tảng đấu giá trực tuyến VNA</p>
        <p class="text-gray-500 text-xs">Tham gia dễ dàng, sở hữu nhanh chóng!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO and meta tags
useHead({
  title: 'Đăng nhập - VNA',
  meta: [
    { name: 'description', content: 'Đăng nhập vào nền tảng đấu giá trực tuyến VNA' }
  ]
})
</script>
