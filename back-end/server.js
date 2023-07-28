const express = require('express');
const cors = require('cors');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const multer  = require('multer');
const path = require('path');

// 使用cors中间件来允许跨域请求
app.use(cors());

// 模拟后端返回的数据
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the server yahooo~~!' };
  res.json(data);
});

// 解析POST请求中的表单数据
app.use(bodyParser.urlencoded({ extended: false }));
// dest指定临时文件的保存目录,处理上传字段名为image的文件
app.use(multer({ dest: '/home/yown/tmp/'}).array('image'));


// 设置文件保存的目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


app.post('/file_upload', (req, res) => {
  const des_file = path.join(uploadDir, req.files[0].originalname);
  console.log(req.files[0]); 
  // 读取临时文件的内容并写入目标文件中
  fs.readFile(req.files[0].path, (err, data) => {
       fs.writeFile(des_file, data, (err) => {
        if(err){
             console.log(err);
        }else{
              response = {
                  message:'File uploaded successfully', 
                  filename:req.files[0].originalname
             };
         }
         console.log(response);
         // 响应json字符串给浏览器
         res.end(JSON.stringify(response));
      });
  });
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



