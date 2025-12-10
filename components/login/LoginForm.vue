<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-10 w-full max-w-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Đăng nhập</h2>

    <!-- Tab Switch -->
    <LoginTabSwitch v-model="activeTab" :tabs="tabs" class="mb-6" />

    <!-- Login Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Email/Phone Input -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Số điện thoại/Email
        </label>
        <div class="relative">
          <input
            id="email"
            v-model="formData.email"
            type="text"
            placeholder="Nhập số điện thoại hoặc email"
            class="input-field pl-10"
            required
          />
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Password Input -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
          Mật khẩu
        </label>
        <div class="relative">
          <input
            id="password"
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Nhập mật khẩu"
            class="input-field pr-10"
            required
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Forgot Password Link -->
      <div class="flex items-center justify-between text-sm">
        <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors">
          Quên mật khẩu?
        </a>
        <a href="#" class="text-vna-green hover:text-vna-green-hover font-medium transition-colors">
          Chưa có tài khoản? <span class="underline">Đăng ký</span>
        </a>
      </div>

      <!-- Login Button -->
      <button type="submit" class="btn-primary w-full">
        Đăng nhập
      </button>
    </form>

    <!-- Social Login -->
    <div class="mt-6">
      <LoginSocialLogin
        @google-login="handleGoogleLogin"
        @vneid-login="handleVNeidLogin"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Icons components
const UserIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  `
}

const BuildingIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  `
}

// Tabs configuration
const tabs = [
  {
    label: 'Cá nhân',
    value: 'individual',
    icon: UserIcon
  },
  {
    label: 'Doanh nghiệp',
    value: 'business',
    icon: BuildingIcon
  }
]

// State
const activeTab = ref('individual')
const showPassword = ref(false)
const formData = ref({
  email: '',
  password: ''
})

// Methods
const handleSubmit = () => {
  console.log('Login submitted:', {
    type: activeTab.value,
    ...formData.value
  })
  // Add your login logic here
}

const handleGoogleLogin = () => {
  console.log('Google login clicked')
  // Add Google OAuth logic here
}

const handleVNeidLogin = () => {
  console.log('VNeid login clicked')
  // Add VNeid login logic here
}
</script>
