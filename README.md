# folders: Routes, Helpers, Models, Controllers

## Routes: 
  + Định nghĩa các request sẽ matching với route như thế nào (params, url,...)
  + index là nơi tổng hợp các router
  + những tệp khác là bổ trợ cho index để dễ maintain 

## Models:
  + Chứa định nghĩa các schema, entity
  + Và có thể tạo ra các sự liên kết giữa docs này tới docs khác trong model khác bằng "ref"

## Helpers:
  + Chứa các utils là function mà reusable nhiều lần như: AppError để định nghĩa lỗi, sendResponse: định nghĩa response trả về

## Controllers:
  + Sẽ được gắn vào vị trí callback function ở route
  + Chứa các callback function và kết thúc qúa trình của 1 client request bằng "sendResponse"
  + Đảm nhận các nhiệm vụ khác nhau: getAll, createSingle, addReferences, delete,...
  + nhận các input từ "(req, res, next)"
  + "NHỚ PHẢI Express-validator dữ liệu input trước khi dùng" 


# App.js
  + Kết nối tới mongoDB bằng Mongoose 
  "mongoose
  .connect(mongoURI)
  .then(() => console.log(`DB connected ${mongoURI}`))
  .catch((err) => console.log(err));"

  + DB connection nên cất vào file ".env" để sau này dễ thay đổi link và không up lên git
  "/* DB connection*/
const mongoURI = process.env.MONGODB_URI;"

