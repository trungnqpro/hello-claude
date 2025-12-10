# Hello Claude - Firebase Google Authentication

Ứng dụng React đơn giản với chức năng đăng nhập bằng Google sử dụng Firebase Authentication.

## Tính năng

- ✅ Đăng nhập với Google (Firebase Authentication)
- ✅ Quản lý trạng thái đăng nhập
- ✅ Hiển thị thông tin người dùng
- ✅ Đăng xuất
- ✅ Giao diện đẹp, responsive

## Công nghệ sử dụng

- React 18
- Firebase 10 (Authentication)
- Webpack 5
- Babel

## Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Cấu hình Firebase

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Tạo project mới hoặc chọn project có sẵn
3. Vào **Project Settings** > **General** > **Your apps**
4. Chọn **Web app** và sao chép Firebase configuration
5. Mở file `src/firebase/config.js` và thay thế các giá trị sau:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Bật Google Authentication trong Firebase

1. Trong Firebase Console, vào **Authentication** > **Sign-in method**
2. Click vào **Google** và bật tính năng này
3. Nhập email hỗ trợ project
4. Click **Save**

### 4. Cấu hình Authorized domains

1. Trong **Authentication** > **Settings** > **Authorized domains**
2. Thêm domain của bạn (ví dụ: `localhost` đã có sẵn cho development)

## Chạy ứng dụng

### Development mode

```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Production build

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

## Cấu trúc dự án

```
hello-claude/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   ├── Login.js         # Component đăng nhập
│   │   ├── Login.css
│   │   ├── Dashboard.js     # Component dashboard sau khi đăng nhập
│   │   └── Dashboard.css
│   ├── firebase/
│   │   └── config.js        # Cấu hình Firebase
│   ├── services/
│   │   └── authService.js   # Service xử lý authentication
│   ├── App.js               # Component chính
│   ├── App.css
│   └── index.js             # Entry point
├── webpack.config.js        # Webpack configuration
├── package.json
└── README.md
```

## Các chức năng chính

### AuthService (`src/services/authService.js`)

- `signInWithGoogle()` - Đăng nhập với Google (popup)
- `signInWithGoogleRedirect()` - Đăng nhập với Google (redirect, tốt cho mobile)
- `logOut()` - Đăng xuất
- `onAuthChange(callback)` - Subscribe thay đổi trạng thái authentication
- `getCurrentUser()` - Lấy thông tin user hiện tại

### Components

#### Login Component
- Hiển thị nút đăng nhập Google
- Xử lý loading state
- Hiển thị error messages

#### Dashboard Component
- Hiển thị thông tin người dùng sau khi đăng nhập
- Cho phép đăng xuất
- Responsive design

## Xử lý lỗi

Các lỗi phổ biến:

1. **Firebase configuration error**: Kiểm tra lại config trong `src/firebase/config.js`
2. **Google Sign-in not enabled**: Bật Google provider trong Firebase Console
3. **Unauthorized domain**: Thêm domain vào Authorized domains trong Firebase

## Bảo mật

- Không commit file `.env` hoặc Firebase config có chứa thông tin nhạy cảm lên repository public
- Sử dụng Firebase Security Rules để bảo vệ dữ liệu
- Cấu hình CORS và Authorized domains đúng cách

## License

MIT

## Tác giả

Developed with Claude
