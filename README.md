# Hello Claude - Auction API Authentication

Ứng dụng React đơn giản với chức năng đăng nhập bằng REST API (Auction API v2).

## Tính năng

- ✅ Đăng nhập với username/password
- ✅ JWT token authentication (access token + refresh token)
- ✅ Quản lý trạng thái đăng nhập với localStorage
- ✅ Hiển thị thông tin người dùng
- ✅ Đăng xuất
- ✅ Hỗ trợ 2 loại tài khoản: Cá nhân & Doanh nghiệp
- ✅ Giao diện đẹp, responsive

## Công nghệ sử dụng

- React 18
- REST API (Fetch API)
- JWT Authentication
- Webpack 5
- Babel

## Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Cấu hình (Optional)

Nếu muốn thay đổi API base URL, tạo file `.env`:

```bash
cp .env.example .env
```

Sau đó chỉnh sửa trong file `.env`:

```env
REACT_APP_API_BASE_URL=https://stg-auction-api-v2.famtechvn.com
```

### 3. Chạy ứng dụng

#### Development mode

```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

#### Production build

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
│   ├── config/
│   │   └── api.js           # API configuration & constants
│   ├── services/
│   │   └── authService.js   # Service xử lý authentication
│   ├── App.js               # Component chính
│   ├── App.css
│   └── index.js             # Entry point
├── webpack.config.js        # Webpack configuration
├── package.json
└── README.md
```

## API Integration

### Endpoint được sử dụng

#### Login
```
POST /auth/login
```

**Request Body:**
```json
{
  "customerType": "personal",
  "username": "0393510439",
  "password": "12345678Aa@",
  "deviceId": "auto_generated",
  "reCaptchaToken": "a",
  "deviceToken": "auto_generated"
}
```

**Response:**
```json
{
  "data": {
    "profile": {
      "_id": "user_id",
      "customerType": "personal",
      "fullname": "Tên người dùng",
      "twofa": {
        "isEnabled": false
      }
    },
    "accessToken": "jwt_access_token",
    "refreshToken": "jwt_refresh_token"
  }
}
```

### Auth Service (`src/services/authService.js`)

**Các hàm chính:**

- `login({ username, password, customerType })` - Đăng nhập
- `logout()` - Đăng xuất
- `refreshAccessToken()` - Làm mới access token
- `getCurrentUser()` - Lấy thông tin user hiện tại
- `isAuthenticated()` - Kiểm tra trạng thái đăng nhập

**Token Management:**
- `getAccessToken()` - Lấy access token
- `getRefreshToken()` - Lấy refresh token
- `getUserProfile()` - Lấy profile từ localStorage
- `clearAuthData()` - Xóa toàn bộ auth data

### Components

#### Login Component
- Form đăng nhập với username/password
- Chọn loại tài khoản (Cá nhân/Doanh nghiệp)
- Validation & error handling
- Loading states

#### Dashboard Component
- Hiển thị thông tin người dùng
- Hiển thị trạng thái 2FA
- Nút đăng xuất
- Responsive design

## Xử lý lỗi

Các lỗi phổ biến:

1. **401 Unauthorized**: Username/password không đúng
2. **Network Error**: Không thể kết nối đến API
3. **Token Expired**: Access token hết hạn (cần implement refresh token logic)

## Bảo mật

- Tokens được lưu trong localStorage
- Device ID được tự động generate và lưu trữ
- Support cho refresh token
- TODO: Implement reCaptcha thực tế (hiện tại dùng giá trị giả)

## Tài khoản test

Bạn có thể sử dụng thông tin sau để test (nếu có):

```
Username: 0393510439
Password: 12345678Aa@
Customer Type: personal
```

## TODO / Improvements

- [ ] Implement real reCaptcha integration
- [ ] Auto refresh token khi access token hết hạn
- [ ] Remember me functionality
- [ ] Forgot password flow
- [ ] Registration flow
- [ ] Better error messages from API
- [ ] Loading skeleton screens
- [ ] Toast notifications

## License

MIT

## Tác giả

Developed with Claude
