# 电商商品详情页（PDP）

一个完整的电商商品详情页项目，支持商品规格选择、数量控制和加入购物车功能。

## 功能特性

- ✅ 商品图片展示（支持多图切换）
- ✅ 商品信息展示（名称、价格、描述）
- ✅ 多规格选择（颜色、容量等）
- ✅ 数量控制（最小1，最大库存限制）
- ✅ 加入购物车功能
- ✅ 加载状态和错误处理
- ✅ Toast 通知
- ✅ 购物车角标
- ✅ 组件测试
- ✅ TypeScript 类型支持
- ✅ 性能优化（图片懒加载）

## 技术栈

- React 18
- TypeScript
- Vite
- Jest + React Testing Library
- CSS Modules
- react-hot-toast

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
npm run preview
```

### 运行测试

```bash
npm test
npm run test:watch
```

## 项目结构

```
ecommerce-pdp/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 可复用组件
│   ├── pages/             # 页面组件
│   ├── services/          # API服务
│   ├── hooks/             # 自定义hooks
│   ├── types/             # TypeScript类型
│   ├── utils/             # 工具函数
│   └── styles/            # 样式文件
├── tests/                 # 测试文件
└── package.json
```

## 使用说明

1. 启动开发服务器：`npm run dev`
2. 访问 http://localhost:3000 查看商品详情页
3. 选择商品规格和数量
4. 点击"加入购物车"按钮
5. 查看Toast通知和购物车角标更新

## 测试

运行所有测试：
```bash
npm test
```

运行测试并监听文件变化：
```bash
npm run test:watch
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT