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
        <div class="inline-flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-vna-green rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span class="text-xl font-bold text-vna-green">VNA</span>
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
