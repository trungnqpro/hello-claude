# VNA Login UI - Nuxt 3 + Tailwind CSS

Giao diện đăng nhập pixel-perfect cho nền tảng đấu giá trực tuyến VNA, được xây dựng với Nuxt 3 và Tailwind CSS.

## Tính năng

- ✅ Giao diện đăng nhập responsive, pixel-perfect
- ✅ Hỗ trợ 2 loại tài khoản: Cá nhân và Doanh nghiệp
- ✅ Đăng nhập qua Google và VNeID
- ✅ Component architecture sạch và có thể tái sử dụng
- ✅ Tailwind CSS cho styling
- ✅ TypeScript support
- ✅ Responsive design (mobile & desktop)

## Cấu trúc thư mục

```
.
├── components/
│   └── login/
│       ├── LoginForm.vue           # Form đăng nhập chính
│       ├── LoginIllustration.vue   # Phần minh họa bên trái
│       ├── LoginTabSwitch.vue      # Component chuyển đổi tab
│       └── SocialLogin.vue         # Nút đăng nhập mạng xã hội
├── pages/
│   ├── index.vue                   # Trang chủ
│   └── login.vue                   # Trang đăng nhập
├── assets/
│   └── css/
│       └── main.css                # CSS chính với Tailwind
├── nuxt.config.ts                  # Cấu hình Nuxt
├── tailwind.config.js              # Cấu hình Tailwind
└── package.json
```

## Component Architecture

### LoginForm.vue
Component form đăng nhập chính với:
- Tab switching (Cá nhân / Doanh nghiệp)
- Input fields (Email/SĐT, Mật khẩu)
- Show/hide password
- Forgot password link
- Register link
- Social login integration

### LoginIllustration.vue
Component minh họa bên trái với:
- VNA logo
- Tiêu đề và mô tả
- Hình ảnh minh họa với SVG

### LoginTabSwitch.vue
Component tab có thể tái sử dụng cho việc chuyển đổi giữa các loại đăng nhập

### SocialLogin.vue
Component đăng nhập qua Google và VNeID

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Cấu hình Tailwind

Các màu tùy chỉnh trong `tailwind.config.js`:
- `vna-green`: #00AB4E (màu chính của VNA)
- `vna-green-hover`: #009441 (màu hover)
- `vna-light-green`: #F0FFF8 (màu nền)

## CSS Classes tùy chỉnh

- `.btn-primary`: Nút chính với màu xanh VNA
- `.input-field`: Input field với focus state
- `.tab-button`: Nút tab
- `.tab-button-active`: Trạng thái tab đang active
- `.tab-button-inactive`: Trạng thái tab không active

## Responsive Design

- **Mobile**: Hiển thị form đăng nhập với logo VNA ở footer
- **Desktop (lg+)**: Hiển thị layout 2 cột với illustration bên trái và form bên phải

## Technology Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: SVG inline

## Development

Để phát triển thêm tính năng:

1. Các component login nằm trong `components/login/`
2. Các trang nằm trong `pages/`
3. CSS utilities trong `assets/css/main.css`
4. Cấu hình màu sắc và theme trong `tailwind.config.js`

## Notes

- Component architecture được thiết kế để tái sử dụng và mở rộng
- Tất cả text đều tiếng Việt phù hợp với thị trường VN
- Form validation có thể được thêm vào tùy theo yêu cầu
- Social login handlers cần được implement theo backend API
