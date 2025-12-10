<template>
  <div class="bg-vna-light-green p-8 lg:p-12 flex flex-col items-center justify-center h-full min-h-[600px]">
    <!-- VNA Logo -->
    <div class="mb-6 text-center">
      <div class="flex items-center justify-center gap-2 mb-1">
        <div class="w-10 h-10 bg-vna-green rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
        <span class="text-2xl font-bold text-vna-green">VNA</span>
      </div>
      <div class="text-[10px] font-medium text-vna-green tracking-wide">ONLINE AUCTION</div>
    </div>

    <!-- Heading -->
    <h1 class="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-2">
      Nền tảng đấu giá trực tuyến VNA
    </h1>

    <!-- Subheading -->
    <p class="text-gray-600 text-center text-sm mb-10">
      Tham gia dễ dàng, sở hữu nhanh chóng!
    </p>

    <!-- Illustration Container -->
    <div class="relative w-full max-w-md">
      <!-- Main illustration area -->
      <div class="relative">
        <!-- BID Badge -->
        <div class="absolute top-0 right-12 bg-vna-green text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg transform -rotate-12">
          BID
        </div>

        <!-- 7500 Badge -->
        <div class="absolute top-8 left-8 bg-vna-green text-white px-3 py-1 rounded-full font-bold shadow-lg">
          7500
        </div>

        <!-- Central illustration -->
        <div class="bg-white rounded-2xl p-6 shadow-lg mb-6 border-4 border-vna-green">
          <div class="flex items-center justify-center h-40">
            <!-- House icon representation -->
            <div class="text-center">
              <div class="w-24 h-24 mx-auto mb-2 relative">
                <!-- Simple house illustration -->
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <!-- Roof -->
                  <polygon points="50,10 90,45 10,45" fill="#00AB4E" />
                  <!-- House body -->
                  <rect x="20" y="45" width="60" height="45" fill="#FF6B6B" />
                  <!-- Door -->
                  <rect x="40" y="60" width="20" height="30" fill="#8B4513" />
                  <!-- Windows -->
                  <rect x="25" y="52" width="12" height="12" fill="#87CEEB" />
                  <rect x="63" y="52" width="12" height="12" fill="#87CEEB" />
                </svg>
              </div>
              <div class="flex items-center justify-center gap-2">
                <div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                <span class="text-xs font-medium">BID...</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Character illustration placeholder -->
        <div class="flex items-center justify-center gap-8 mb-6">
          <!-- Left plant -->
          <div class="w-16 h-20 relative">
            <svg viewBox="0 0 50 60" class="w-full h-full">
              <!-- Leaf cluster -->
              <circle cx="25" cy="15" r="12" fill="#00AB4E" />
              <circle cx="15" cy="20" r="10" fill="#00AB4E" />
              <circle cx="35" cy="20" r="10" fill="#00AB4E" />
              <!-- Stem -->
              <rect x="22" y="25" width="6" height="35" fill="#2D5016" />
            </svg>
          </div>

          <!-- Center character -->
          <div class="flex flex-col items-center">
            <div class="w-20 h-32 bg-gradient-to-b from-vna-green to-green-700 rounded-full relative">
              <!-- Simple person shape -->
              <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div class="mt-2 w-12 h-12 relative">
              <svg viewBox="0 0 50 50" class="w-full h-full">
                <circle cx="25" cy="25" r="20" fill="#4CAF50" />
                <path d="M15,25 Q25,35 35,25" stroke="white" stroke-width="3" fill="none" />
              </svg>
            </div>
          </div>

          <!-- Right plant -->
          <div class="w-16 h-20 relative">
            <svg viewBox="0 0 50 60" class="w-full h-full">
              <circle cx="25" cy="15" r="12" fill="#00AB4E" />
              <circle cx="15" cy="20" r="10" fill="#00AB4E" />
              <circle cx="35" cy="20" r="10" fill="#00AB4E" />
              <rect x="22" y="25" width="6" height="35" fill="#2D5016" />
            </svg>
          </div>
        </div>

        <!-- Bottom plants -->
        <div class="flex justify-center gap-4">
          <div class="w-12 h-16">
            <svg viewBox="0 0 40 50" class="w-full h-full">
              <ellipse cx="20" cy="20" rx="18" ry="15" fill="#00AB4E" />
              <ellipse cx="12" cy="25" rx="10" ry="12" fill="#00AB4E" />
              <ellipse cx="28" cy="25" rx="10" ry="12" fill="#00AB4E" />
              <rect x="17" y="30" width="6" height="20" fill="#2D5016" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for static illustration
</script>
