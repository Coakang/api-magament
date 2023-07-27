const express = require('express');
const cors = require('cors');
const app = express();

// 使用cors中间件来允许跨域请求
app.use(cors());

app.get('/api/data', (req, res) => {
// 这里模拟后端返回的数据
  const data = { message: 'Hello from the server yahooo~~!' };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


