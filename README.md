# 比特火炬-短链接重定向服务

一个基于纯静态技术实现的短链接重定向服务，支持自定义短链接、3秒倒计时跳转、现代渐变风格界面。
代码全栈使用MIT许可证开源。

## 功能特点

- 📌 **短链接重定向**：支持 `http://your-domain.com/u/?id={识别码}` 格式
- ⏱️ **3秒倒计时**：访问后自动倒计时跳转
- 🔒 **安全加密**：目标URL使用 Base64 加密存储
- 🎨 **现代渐变风格**：深色主题，玻璃拟态效果
- 🌙 **日夜间切换**：支持深色和浅色模式
- 📱 **响应式设计**：适配各种设备屏幕
- 🚀 **纯静态实现**：无需后端服务器，可托管在 GitHub Pages

## 项目结构

```
/
├── index.html          # 主页
├── u/                  # 短链接处理目录
│   ├── index.html      # 短链接重定向页面
│   ├── 404.html        # 404错误页面
│   └── error.html      # 通用错误页面
├── data/               # 数据目录
│   └── redirects.json  # 重定向配置文件
├── docs/               # 文档目录
│   └── 申请短链接.md    # 短链接申请指南
├── css/                # 样式目录
│   └── style.css       # 主样式文件
└── js/                 # 脚本目录
    ├── redirect.js     # 重定向逻辑
    └── theme.js        # 日夜间切换逻辑
```

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/bit-torch/shortlinks.git
cd shortlinks
```

### 2. 配置短链接

编辑 `data/redirects.json` 文件，添加您的短链接配置：

```json
{
  "redirects": {
    "abc123": {
      "target": "aHR0cHM6Ly9leGFtcGxlLmNvbQ==",  // Base64加密的 "https://example.com"
      "created": "2026-04-18T12:00:00Z"
    }
  }
}
```

### 3. 本地测试

启动本地服务器：

```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

访问 `http://localhost:8000/u/?id=abc123` 测试短链接。

### 4. 部署到 GitHub Pages

1. **创建 GitHub 仓库**
2. **上传项目文件**
3. **配置 GitHub Pages**：
   - 进入仓库设置
   - 找到 GitHub Pages 部分
   - 选择主分支作为源
   - 保存设置
4. **访问网站**：`https://your-username.github.io/shortlinks`

## 使用方法

### 访问短链接

```
https://your-domain.com/u/?id={识别码}
```

例如：
```
https://your-domain.com/u/?id=abc123
```

### 添加新短链接

详细步骤请参考 [docs/申请短链接.md](docs/申请短链接.md) 文件。

什么？你说你使用我们的短链接服务？没问题！按以下方式操作：
1. Fork 本仓库到您的 GitHub 账号
2. 按照 [docs/申请短链接.md](docs/申请短链接.md) 中的步骤申请短链接，并在docs/下创建一个新文件，文件名与短链接识别码相同，文件内容为申请的原因。
3. 提交Pull Request
4. 等待PR合并（这通常可能需要1-2周）
5. PR合并后，您就可以使用我们的短链接服务进行跳转。

## 技术实现

- **前端**：HTML5 + CSS3 + JavaScript
- **样式**：现代渐变风格，玻璃拟态效果
- **数据存储**：JSON 文件（Base64 加密）
- **部署**：GitHub Pages

## 安全特性

- **Base64 加密**：目标URL加密存储
- **URL 验证**：只允许 HTTP/HTTPS 协议
- **错误处理**：完善的错误提示机制

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系

如有问题或建议，请通过 GitHub Issues 联系我们。