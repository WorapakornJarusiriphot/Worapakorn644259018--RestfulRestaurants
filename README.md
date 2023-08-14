# Worapakorn644259018-RestfulRestaurants
 ชื่อ นายวรปกร จารุศิริพจน์ รหัสนักศึกษา644259018 หมู่เรียน64/45


# restful_api_sql

## ไฟล์ package.json

### 1. `name`: "restful_api_sql"
- ชื่อของโปรเจ็กต์หรือแพ็กเกจ

### 2. `version`: "1.0.0"
- เวอร์ชันของโปรเจ็กต์หรือแพ็กเกจ

### 3. `description`: "this is a restful api using MySQL"
- คำอธิบายของโปรเจ็กต์

### 4. `main`: "server.js"
- ไฟล์หลักที่ใช้เริ่มต้นโปรเจ็กต์

### 5. `scripts`
- `test`: 'echo "Error: no test specified" && exit 1'
  - สคริปต์สำหรับทดสอบ
- `start`: 'nodemon server.js'
  - สคริปต์สำหรับเริ่มต้นแอปพลิเคชันด้วย Nodemon

### 6. `author`: "Worapakorn Jarusiriphot"
- ผู้เขียนของโปรเจ็กต์

### 7. `license`: "ISC"
- สัญญาอนุญาตที่ใช้ในโปรเจ็กต์

### 8. `dependencies`
- `cors`: "^2.8.5"
  - ใช้จัดการ Cross-Origin Resource Sharing (CORS)
- `express`: "^4.18.2"
  - เว็บเฟรมเวิร์กสำหรับ Node.js
- `mysql`: "^2.18.1" และ `mysql2`: "^3.5.2"
  - ไลบรารีสำหรับเชื่อมต่อกับฐานข้อมูล MySQL
- `nodemon`: "^2.0.22"
  - เครื่องมือสำหรับพัฒนาที่จะรีสตาร์ทแอปพลิเคชันเมื่อมีการเปลี่ยนแปลงไฟล์
- `sequelize`: "^6.32.1"
  - ORM สำหรับ Node.js ที่รองรับ MySQL

ไฟล์ `package.json` เป็นส่วนสำคัญในการจัดการโปรเจ็กต์ Node.js โดยเก็บข้อมูลเกี่ยวกับโปรเจ็กต์และแพ็กเกจที่ต้องการ





## server.js

### 1. การนำเข้าไลบรารี
- `const express = require("express");`: นำเข้าไลบรารี Express ที่ใช้ในการสร้างเซิร์ฟเวอร์ HTTP
- `const cors = require("cors");`: นำเข้าไลบรารี CORS สำหรับการจัดการความปลอดภัยในการเข้าถึงข้ามแหล่งที่มา

### 2. การสร้างและตั้งค่าเซิร์ฟเวอร์
- `const app = express();`: สร้างอินสแตนซ์ของเซิร์ฟเวอร์ Express
- `app.use(cors());`: ใช้ middleware CORS เพื่ออนุญาตข้ามแหล่งที่มา
- `app.use(express.json());`: ใช้ middleware สำหรับการแปลงข้อมูล JSON จาก request body

### 3. การกำหนดข้อมูลเริ่มต้น
- `const restaurants = [];`: สร้างตัวแปรสำหรับเก็บรายการของร้านอาหาร
- `let currentId = 1;`: ตัวแปรสำหรับการจัดการ ID ของร้านอาหาร

### 4. ตั้งค่า Routes
ตั้งค่าเส้นทางต่างๆ สำหรับเซิร์ฟเวอร์ โดยมีการจัดการ GET, POST, PUT, DELETE เช่น:
- การรับรายการร้านอาหาร
- การเพิ่มร้านอาหาร
- การแก้ไขร้านอาหาร
- การลบร้านอาหาร

### 5. การตั้งค่าพอร์ตและเริ่มเซิร์ฟเวอร์
- `const PORT = process.env.PORT || 5000;`: ตั้งค่าพอร์ตจากตัวแปรสภาพแวดล้อมหรือใช้พอร์ต 5000
- `app.listen(PORT, () => ...);`: เริ่มต้นการทำงานของเซิร์ฟเวอร์บนพอร์ตที่กำหนด






# restful_api_sql ในโฟลเดอร์ config


## ไฟล์ db.config.js

ไฟล์ `db.config.js` เป็นไฟล์ที่มีการกำหนดค่าเพื่อเชื่อมต่อกับฐานข้อมูล

### รายละเอียดของโค้ด:

```javascript
module.exports = {
  HOST: "localhost",             // (1)
  USER: "root",                  // (2)
  PASSWORD: "",                  // (3)
  DB: "restaurantss",            // (4)
};
```

#### คำอธิบาย:

- `HOST: "localhost"`: การกำหนดค่าที่อยู่ของเซิร์ฟเวอร์ฐานข้อมูล
  - "localhost" หมายถึงเซิร์ฟเวอร์ที่เดียวกับเครื่องที่รันโค้ดนี้
  - การกำหนดค่านี้ทำให้โปรแกรมทราบว่าจะเชื่อมต่อกับฐานข้อมูลที่ไหน

- `USER: "root"`: การกำหนดชื่อผู้ใช้ในการเข้าถึงฐานข้อมูล
  - "root" เป็นผู้ใช้งานระดับสูงสุดในระบบฐานข้อมูล MySQL
  - ชื่อผู้ใช้นี้มีสิทธิ์ในการทำรายการทุกรายการในฐานข้อมูล

- `PASSWORD: ""`: การกำหนดรหัสผ่านสำหรับผู้ใช้ที่กำหนดไว้
  - ค่าว่าง "" หมายถึงไม่มีรหัสผ่าน
  - สามารถกำหนดรหัสผ่านได้ตามต้องการ เช่น "12345678" ถ้าระบบฐานข้อมูลต้องการรหัสผ่าน

- `DB: "restaurantss"`: การกำหนดชื่อฐานข้อมูลที่จะเชื่อมต่อ
  - "restaurantss" คือชื่อฐานข้อมูลที่ต้องการใช้งาน
  - ชื่อนี้ต้องตรงกับฐานข้อมูลที่สร้างไว้ในระบบฐานข้อมูลของคุณ

#### สรุป:

- ไฟล์ `db.config.js` เป็นไฟล์การกำหนดค่าที่ใช้ในการเชื่อมต่อกับฐานข้อมูล 
- โดยมีการกำหนดค่าที่อยู่ของเซิร์ฟเวอร์, ชื่อผู้ใช้, รหัสผ่าน, และชื่อฐานข้อมูล 
- การแยกไฟล์นี้ออกมาจะทำให้ง่ายต่อการจัดการและยืดหยุ่นในการเปลี่ยนแปลงการตั้งค่า
- ต้องระวังในการเก็บรหัสผ่านในไฟล์นี้ เนื่องจากอาจเป็นความลับที่สำคัญ.








# restful_api_sql ในโฟลเดอร์ controllers


## ไฟล์ restaurant.controllers.js

ไฟล์นี้เป็นส่วนหนึ่งของระบบจัดการร้านอาหาร ซึ่งประกอบด้วย function ที่ใช้ในการสร้างและจัดการข้อมูลร้านอาหาร

### รายละเอียดโค้ด

#### การนำเข้าโมดูลร้านอาหาร (Restaurant model)

```javascript
const Restaurant = require("../models/restaurant.model")
```

บรรทัดนี้นำเข้าโมดูลที่เกี่ยวข้องกับร้านอาหาร โมดูลนี้สามารถใช้ในการจัดการข้อมูลร้านอาหารได้

#### การสร้างร้านอาหาร (Create Restaurant)

```javascript
Restaurant.createRestaurant = async(newRestaurant) => {
    try {
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}
```

ฟังก์ชันนี้ใช้สำหรับการสร้างร้านอาหารโดยรับข้อมูลร้านอาหารเข้ามา แล้วจัดเก็บลงฐานข้อมูล หากเกิดข้อผิดพลาดจะได้รับการจัดการโดยบล็อก `catch`

#### การดึงข้อมูลร้านอาหารทั้งหมด (Get All Restaurants)

```javascript
Restaurant.getAll = async () => {
    try {
        const restaurants = await Restaurant.findAll();
        return restaurants.map(restaurant => restaurant.toJSON());
    } catch (error) {
        console.error("error:", error);
        throw error;
    }
}
```

ฟังก์ชันนี้ใช้สำหรับการดึงข้อมูลร้านอาหารทั้งหมดจากฐานข้อมูล และส่งกลับเป็นรูปแบบ JSON

#### การดึงข้อมูลร้านอาหารตามไอดี (Get Restaurant By ID)

```javascript
Restaurant.getById = async (restaurantId) => {
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if(restaurant){
            return restaurant.toJSON();
        }
        else{
            throw {kind: "not_found"};
        }
    } catch (err) {
        ...
    }
}
```

ฟังก์ชันนี้ใช้สำหรับการดึงข้อมูลร้านอาหารตามไอดี หากไม่พบร้านอาหารด้วยไอดีนั้น จะส่งกลับข้อผิดพลาด `not_found`

#### การดึงข้อมูลร้านอาหารทั้งหมด (Get All Restaurants)

```javascript
Restaurant.getAll = async () => {
    try {
        const restaurants = await Restaurant.findAll();
        return restaurants.map(restaurant => restaurant.toJSON());
    } catch (error) {
        console.error("error:", error);
        throw error;
    }
}
```

- `Restaurant.getAll`: กำหนดฟังก์ชัน getAll ในอ็อบเจกต์ Restaurant
- `async ()`: ประกาศฟังก์ชันแบบ asynchronous ที่ไม่รับพารามิเตอร์ใดๆ
- `try`: ใช้งานบล็อก try-catch สำหรับการจัดการข้อผิดพลาด
- `const restaurants = await Restaurant.findAll()`: ดึงข้อมูลร้านอาหารทั้งหมดและจัดเก็บไว้ในตัวแปร `restaurants`
- `return restaurants.map(restaurant => restaurant.toJSON())`: แปลงข้อมูลร้านอาหารเป็นรูปแบบ JSON และส่งกลับ
- `catch (error)`: จัดการข้อผิดพลาดและพิมพ์ลงคอนโซล และส่งต่อข้อผิดพลาด

#### การดึงข้อมูลร้านอาหารตามไอดี (Get Restaurant By ID)

```javascript
Restaurant.getById = async (restaurantId) => {
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if(restaurant){
            return restaurant.toJSON();
        }
        else{
            throw {kind: "not_found"};
        }
    } catch (err) {
        ...
    }
}
```

- `Restaurant.getById`: กำหนดฟังก์ชัน getById ในอ็อบเจกต์ Restaurant
- `async (restaurantId)`: ประกาศฟังก์ชันแบบ asynchronous ที่รับพารามิเตอร์ `restaurantId`
- `try`: ใช้งานบล็อก try-catch สำหรับการจัดการข้อผิดพลาด
- `const restaurant = await Restaurant.findByPk(restaurantId)`: ดึงข้อมูลร้านอาหารด้วยไอดีที่กำหนดและจัดเก็บไว้ในตัวแปร `restaurant`
- `if(restaurant)`: ตรวจสอบว่าพบข้อมูลร้านอาหารหรือไม่
- `return restaurant.toJSON()`: ถ้าพบ ส่งกลับข้อมูลร้านอาหารในรูปแบบ JSON
- `else`: ถ้าไม่พบ ส่งกลับข้อผิดพลาด `not_found`
- `catch (err)`: จัดการข้อผิดพลาด









# restful_api_sql ในโฟลเดอร์ models



## ไฟล์ db.js

### การนำเข้าโมดูล Sequelize และ db.config

```javascript
const {Sequelize} = require("sequelize");
const dbConfig = require("../config/db.config");
```

- `const {Sequelize} = require("sequelize")`: นำเข้าคลาส Sequelize จากโมดูล sequelize
- `const dbConfig = require("../config/db.config")`: นำเข้าการตั้งค่าฐานข้อมูลจากไฟล์ db.config.js ที่อยู่ในโฟลเดอร์ config

### การสร้าง Instance ของ Sequelize

```javascript
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "mysql"
});
```

- `const sequelize`: ประกาศตัวแปร sequelize เพื่อจัดเก็บ instance ของ Sequelize
- `new Sequelize(...)`: สร้าง instance ของ Sequelize ด้วย constructor
- `dbConfig.DB`: ชื่อฐานข้อมูล
- `dbConfig.USER`: ชื่อผู้ใช้ฐานข้อมูล
- `dbConfig.PASSWORD`: รหัสผ่านของฐานข้อมูล
- `host: dbConfig.HOST`: ที่อยู่ IP หรือ hostname ของเซิร์ฟเวอร์ฐานข้อมูล
- `dialect: "mysql"`: ระบุว่าใช้ dialect ของฐานข้อมูลประเภทอะไร (ในที่นี้เป็น MySQL)

### ทำการเชื่อมต่อฐานข้อมูล

```javascript
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(error => {
        console.error("Unable to connect to the database:", error);
    });
```

- `sequelize.authenticate()`: ทำการเชื่อมต่อกับฐานข้อมูล
- `.then(...)`: ถ้าเชื่อมต่อสำเร็จ แสดงข้อความ "Connection has been established successfully."
- `.catch(error => ...)`: ถ้าเชื่อมต่อไม่สำเร็จ แสดงข้อความ "Unable to connect to the database:" พร้อมรายละเอียดข้อผิดพลาด





## ไฟล์ db.sql.js

### การนำเข้าโมดูล mysql และไฟล์ db.config

```javascript
const mysql = require("mysql");
const dbConfig = require("../config/db.config");
```

- `const mysql = require("mysql")`: นำเข้าโมดูล `mysql` สำหรับการจัดการฐานข้อมูล MySQL
- `const dbConfig = require("../config/db.config")`: นำเข้าไฟล์ `db.config` ซึ่งเก็บการตั้งค่าฐานข้อมูล

### การสร้างการเชื่อมต่อฐานข้อมูล

```javascript
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
```

- `const connection`: ประกาศตัวแปร `connection` เพื่อจัดเก็บการเชื่อมต่อฐานข้อมูล
- สร้างการเชื่อมต่อโดยใช้การตั้งค่าที่ระบุ

### การเปิดการเชื่อมต่อ

```javascript
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
```

- `connection.connect(...)`: เปิดการเชื่อมต่อฐานข้อมูล
- `if (error) throw error`: หากมีข้อผิดพลาด จะโยนข้อผิดพลาดนั้นออกมา
- `console.log(...)`แสดงข้อความว่า "Successfully connected to the database." ถ้าเชื่อมต่อสำเร็จ







## ไฟล์ restaurant.model.js

### การนำเข้าโมดูล DataTypes และไฟล์ db

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("./db");
```

- `const { DataTypes } = require("sequelize")`: นำเข้าคลาส DataTypes จากโมดูล sequelize เพื่อกำหนดประเภทข้อมูลในโมเดล
- `const sequelize = require("./db")`: นำเข้า instance ของ sequelize จากไฟล์ db เพื่อจัดการการเชื่อมต่อฐานข้อมูล

### การกำหนดโครงสร้างโมเดล "restaurant"

```javascript
const Restaurant = sequelize.define("restaurant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  imageURL: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});
```

- `const Restaurant`: ประกาศตัวแปร Restaurant เพื่อจัดเก็บโมเดล
- `sequelize.define("restaurant", {...})`: กำหนดโครงสร้างของโมเดล "restaurant" โดยมีฟิลด์ต่าง ๆ ดังนี้:
  - `id`: กำหนดให้เป็น primary key และมีค่าเพิ่มขึ้นอัตโนมัติ
  - `name`: กำหนดประเภทเป็นสตริง และไม่สามารถเป็นค่าว่างได้
  - `type`, `imageURL`: กำหนดประเภทเป็นสตริง
  - `createdAt`, `updatedAt`: กำหนดประเภทเป็นวันที่ และมีค่าเริ่มต้นเป็นเวลาปัจจุบัน

### การส่งออกโมเดล "restaurant"

```javascript
module.exports = Restaurant;
```

- ทำการส่งออกโมเดล "restaurant" เพื่อให้สามารถนำไปใช้งานในไฟล์อื่นได้





## ไฟล์ restaurant.model.sql.js

### ส่วนของการนำเข้า (Importing)

```javascript
const sql = require("./db.sql"); // เป็นการเอาในส่วนของไฟล์ db ในโฟเดอร์ models นำมาใช้งาน
// require คือเป็นการ import โดยเก็บไว้ในออฟเจ็คที่ชื่อว่า sql และ ./ คือเป็นการ move เข้าไปอีกหนึ่งสเต็ป ต้องอยู่ในโฟเดอร์ตัวเองก็คือโฟเดอร์ models
// sql เป็นตัวแปรที่อยู่ภายนอก
```

ส่วนนี้เป็นการนำเข้าโมดูล db.sql จากโฟลเดอร์เดียวกันเพื่อใช้งานในไฟล์นี้ โดยเก็บเป็นตัวแปรชื่อ sql เพื่อใช้สำหรับการดำเนินการทางฐานข้อมูลต่อไป

### ส่วนของการสร้างคอนสตรักเตอร์ (Constructor)

```javascript
const Restaurant = function (restaurant) {
  // Attributes
  this.id = restaurant.id;
  this.name = restaurant.name;
  this.type = restaurant.type;
  this.imageURL = restaurant.imageURL;
};
```

โค้ดส่วนนี้สร้างคอนสตรักเตอร์สำหรับคลาส Restaurant โดยมีแอตทริบิวต์ id, name, type, และ imageURL โค้ดนี้เป็นการกำหนดโครงสร้างของข้อมูลร้านอาหารที่จะใช้ในโปรแกรม

### ส่วนของการสร้างเมธอดสำหรับการแทรกข้อมูลร้านอาหาร

```javascript
// Method
// Insert new restaurant
Restaurant.create = (newRestaurant, result) => {
  // INSERT INTO restaurant (id, name, type, imageURL) VALUES ("1", "KFC", "Fastfood", "url")
  sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res) => {
    // ...
  });
};
```

รายละเอียดเมธอด create

- `Restaurant.create`: เป็นเมธอดที่สร้างขึ้นในคลาส Restaurant สำหรับการแทรกข้อมูลร้านอาหารใหม่เข้าสู่ฐานข้อมูล
- `newRestaurant`: พารามิเตอร์ที่รับข้อมูลร้านอาหารใหม่เข้ามา
- `result`: พารามิเตอร์ที่ใช้สำหรับเก็บผลลัพท์หลังจากการแทรกข้อมูล
- `sql.query`: เป็นการเรียกใช้เมธอด query จากตัวแปร sql (ที่เราได้ import มาจากไฟล์ db.sql) สำหรับการแทรกข้อมูลร้านอาหารใหม่ลงในตาราง restaurants
โดยโค้ดส่วนนี้จะสร้างคำสั่ง SQL สำหรับการแทรกข้อมูลร้านอาหารใหม่ และส่งข้อมูลเข้าไปยังฐานข้อมูลผ่าน connection ที่สร้างจาก sql

### ส่วนของการจัดการกับข้อผิดพลาดในเมธอด create

```javascript
if (err) {
  console.log("error", err);
  result(err, null);
  return;
}
console.log("New restaurant inserted:", { id: res.id, ...newRestaurant });
result(null, { id: res.id, ...newRestaurant });
```

- ถ้ามีข้อผิดพลาด (err) เกิดขึ้น โค้ดจะแสดงข้อความ "error" พร้อมรายละเอียดข้อผิดพลาด และส่งผลลัพธ์กลับด้วยข้อผิดพลาดนั้น
- หากไม่มีข้อผิดพลาด โค้ดจะแสดงข้อความ "New restaurant inserted:" พร้อมรายละเอียดของร้านอาหารที่ถูกแทรก

### ส่วนของการสร้างเมธอด getAll

```javascript
// Get All Restaurant
Restaurant.getAll = (result) => {
  // ...
};
```

- เมธอด getAll สร้างขึ้นในคลาส Restaurant เพื่อโชว์ผลลัพธ์ทั้งหมดจากตารางร้านอาหาร
- พารามิเตอร์ result ใช้สำหรับเก็บผลลัพธ์ที่จะส่งกลับ


### ส่วนของการจัดการกับข้อผิดพลาดในเมธอด getAll

```javascript
// SELECT * FROM restaurants
sql.query("SELECT * FROM restaurants", (err, res) => {
  if (err) {
    console.log("error", err);
    result(err, null);
    return;
  }
  result(null, res);
});
```

- เมธอดนี้ใช้คำสั่ง SQL SELECT * FROM restaurants เพื่อดึงข้อมูลทั้งหมดจากตาราง restaurants
- ถ้ามีข้อผิดพลาด (err) เกิดขึ้น โค้ดจะแสดงข้อความ "error" พร้อมรายละเอียดข้อผิดพลาด และส่งผลลัพธ์กลับด้วยข้อผิดพลาดนั้น
- หากไม่มีข้อผิดพลาด โค้ดจะส่งผลลัพธ์ (res) กลับ


### ส่วนของการสร้างเมธอด getById

- เมธอด getById สร้างขึ้นในคลาส Restaurant เพื่อค้นหาข้อมูลร้านอาหารจาก ID ที่ระบุ
- พารามิเตอร์ restaurantId ใช้รับ ID ของร้านอาหารที่ต้องการค้นหา
- พารามิเตอร์ result ใช้สำหรับเก็บผลลัพธ์ที่จะส่งกลับ


### ส่วนของการดำเนินการในเมธอด getById

```javascript
// SELECT * FROM restaurants WHERE id = restaurantId
sql.query(
  `SELECT * FROM restaurants WHERE id = ${restaurantId}`,
  (err, res) => {
    // fail
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }
    // Success
    if (res.length) {
      result(null, res[0]);
      return;
    }
    // fail
    result({ kind: "not_found" }, null);
  }
);
```

รายละเอียดการดำเนินการ
- เมธอดนี้ใช้คำสั่ง SQL SELECT * FROM restaurants WHERE id = restaurantId เพื่อค้นหาข้อมูลร้านอาหารจาก ID ที่ระบุ
- ถ้ามีข้อผิดพลาด (err) เกิดขึ้น โค้ดจะแสดงข้อความ "error" พร้อมรายละเอียดข้อผิดพลาด และส่งผลลัพธ์กลับด้วยข้อผิดพลาดนั้น
- หากค้นหาสำเร็จและพบข้อมูล (ตรวจสอบจาก res.length) โค้ดจะส่งผลลัพธ์แถวแรก (res[0]) กลับ
- หากไม่พบข้อมูล โค้ดจะส่งผลลัพธ์กลับด้วยข้อความว่า "not_found"
โค้ดส่วนนี้ทำการค้นหาข้อมูลร้านอาหารจาก ID และจัดการกับสถานการณ์ที่อาจเกิดขึ้น ทั้งสถานการณ์ที่สำเร็จและสถานการณ์ที่ล้มเหลว



### ส่วนของการดำเนินการในเมธอด updateById

```javascript
// Update By ID
Restaurant.updateById = (id, params, result) => {
  // UPDATE restaurants SET name = "name", type = "type", imageurl = "imageurl" WHERE id ="id"
  sql.query(
    "UPDATE restaurants SET name = ?, type = ?, imageurl = ? WHERE id = ?",
    [params.name, params.type, params.imageURL, id],
    // ...
  );
};
```

รายละเอียดการดำเนินการ
- เมธอดนี้ใช้คำสั่ง SQL UPDATE restaurants SET ... WHERE id = id เพื่ออัพเดทข้อมูลร้านอาหารตาม ID ที่ระบุ
- พารามิเตอร์ id ใช้รับ ID ของร้านอาหารที่ต้องการอัพเดท
- พารามิเตอร์ params ใช้รับข้อมูลที่ต้องการอัพเดท ซึ่งประกอบด้วย name, type, และ imageURL
- พารามิเตอร์ result ใช้สำหรับเก็บผลลัพธ์ที่จะส่งกลับ
โค้ดส่วนนี้ทำการอัพเดทข้อมูลร้านอาหารในฐานข้อมูลตาม ID ที่ระบุ และจัดการกับสถานการณ์ที่อาจเกิดขึ้น ทั้งสถานการณ์ที่สำเร็จและสถานการณ์ที่ล้มเหลว



### ส่วนของการดำเนินการในเมธอด updateById (ต่อ)

```javascript
(err, res) => {
  if (err) {
    console.log("err", err);
    result(err, null);
    return;
  }
  if (res.length == 0) {
    result({ kind: "not_found" }, null);
    return;
  }
  result(null, { id: id, ...params });
}
```

- จัดการกับข้อผิดพลาดและสถานการณ์ที่อาจเกิดขึ้นเมื่ออัพเดทข้อมูล
- ถ้ามีข้อผิดพลาด หรือไม่พบ ID ที่ระบุ จะส่งผลลัพธ์กลับด้วยข้อความ "err" หรือ "not_found"
- ถ้าสำเร็จ จะส่งผลลัพธ์กลับด้วยข้อมูลที่ถูกอัพเดท



### ส่วนของการสร้างเมธอด deleteById

```javascript
// Delete Restaurant
Restaurant.deleteById = (id, result) => {
  sql.query("DELETE FROM restaurants WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("err", err);
      result(err, null);
      return;
    }
    if (res.length == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("Restaurant id:" + id + " is deleted !");
    result(null, res);
  });
};
```

- เมธอดนี้ใช้คำสั่ง SQL DELETE FROM restaurants WHERE id = ? เพื่อลบข้อมูลร้านอาหารจาก ID ที่ระบุ
- จัดการกับข้อผิดพลาดและสถานการณ์ที่อาจเกิดขึ้นเมื่อลบข้อมูล
- ถ้ามีข้อผิดพลาด หรือไม่พบ ID ที่ระบุ จะส่งผลลัพธ์กลับด้วยข้อความ "err" หรือ "not_found"
- ถ้าสำเร็จ จะแสดงข้อความ "Restaurant id: ... is deleted !" และส่งผลลัพธ์กลับ


### ส่วนของการส่งออกโมดูล

```javascript
module.exports = Restaurant;
```

- เป็นการส่งออกคลาส Restaurant เพื่อให้สามารถนำไปใช้งานในไฟล์อื่นได้





# restful_api_sql ในโฟลเดอร์ routes



## ไฟล์ restaurant.router.js

1. `const express = require("express");`: นำเข้าโมดูล Express ที่จำเป็นในการสร้างเซิร์ฟเวอร์
2. `const router = express.Router();`: สร้างตัวแปร router โดยใช้ Express Router ทำให้สามารถจัดการ route ได้
3. `const Restaurant = require("../controllers/restaurant.controllers");`: นำเข้าตัวควบคุมร้านอาหารจากไดเรกทอรี controllers
4. `router.post("/restaurants",async (req,res)=>{ ... });`: กำหนด route POST ไปยัง `/restaurants` และรับ request และ response จากไคลเอนต์
   - ในส่วนของ function:
     1. `const newRestaurant = req.body;`: รับข้อมูลร้านอาหารจาก request body
     2. `const createRestaurant = await Restaurant.createRestaurant(newRestaurant);`: เรียก function `createRestaurant` และส่งข้อมูลร้านอาหารให้มันประมวลผล
     3. `res.status(201).json(createRestaurant);`: ส่ง response กลับไปยังไคลเอนต์ด้วยสถานะ 201 และข้อมูลร้านอาหารที่สร้าง
     4. `catch (err) { res.status(500).json({err:"Fail to create restaurant"}); }`: จัดการข้อผิดพลาดที่อาจเกิดขึ้นในกรณีที่มีปัญหาในการสร้างร้านอาหาร



### ดึงข้อมูลร้านอาหารทั้งหมด
5. `router.get("/restaurants", async(req, res)=>{ ... });`: กำหนด route GET ไปยัง `/restaurants`
   - `const restaurants = await Restaurant.getAll();`: เรียก function `getAll` จากตัวควบคุมร้านอาหารเพื่อดึงข้อมูลทั้งหมด
   - `res.status(200).json(restaurants);`: ส่ง response กลับไปยังไคลเอนต์ด้วยสถานะ 200 และข้อมูลร้านอาหารทั้งหมด
   - `catch (error) { res.status(500).json({err:"Fail to create restaurant"}); }`: จัดการข้อผิดพลาดที่อาจเกิดขึ้น

### ดึงข้อมูลร้านอาหารโดยระบุ ID
6. `router.get("/restaurants/:id", async(req, res)=>{ ... });`: กำหนด route GET ไปยัง `/restaurants/:id` โดยมีพารามิเตอร์ `id`
   - `const restaurantId = req.params.id;`: รับค่า ID ของร้านอาหารจากพารามิเตอร์ใน URL
   - `const restaurant = await Restaurant.getById(restaurantId);`: เรียก function `getById` และส่ง ID ของร้านอาหารให้มันประมวลผล
   - `res.status(200).json(restaurant);`: ส่ง response กลับไปยังไคลเอนต์ด้วยสถานะ 200 และข้อมูลร้านอาหาร
   - `catch (error) { res.status(500).json({err:"Fail to create restaurant by Id"}); }`: จัดการข้อผิดพลาดที่อาจเกิดขึ้น



### อัปเดตข้อมูลร้านอาหาร
7. `router.put("/restaurants/:id", async(req, res)=>{ ... });`: กำหนด route PUT ไปยัง `/restaurants/:id` สำหรับอัปเดตร้านอาหาร
   - `const restaurantId = req.params.id;`: รับค่า ID ของร้านอาหารจากพารามิเตอร์ใน URL
   - `const restaurantData = req.body;`: รับข้อมูลร้านอาหารที่จะอัปเดตจาก request body
   - `const restaurant = await Restaurant.updateById(restaurantId, restaurantData);`: เรียก function `updateById` สำหรับอัปเดตร้านอาหาร
   - `res.status(200).json(restaurant);`: ส่ง response กลับไปยังไคลเอนต์ด้วยสถานะ 200 และข้อมูลร้านอาหารที่อัปเดต
   - `catch (error) { ... }`: จัดการข้อผิดพลาดที่อาจเกิดขึ้น รวมถึงกรณีที่ไม่พบร้านอาหาร

### ลบร้านอาหาร
8. `router.delete("/restaurants/:id", async(req, res)=>{ ... });`: กำหนด route DELETE ไปยัง `/restaurants/:id` สำหรับลบร้านอาหาร
   - `const restaurantId = req.params.id;`: รับค่า ID ของร้านอาหารจากพารามิเตอร์ใน URL
   - `const restaurant = await Restaurant.removeById(restaurantId);`: เรียก function `removeById` สำหรับลบร้านอาหาร
   - `if (restaurant) { ... }`: ส่ง response กลับไปยังไคลเอนต์ด้วยข้อความและสถานะที่เหมาะสม
   - `catch (error) { ... }`: จัดการข้อผิดพลาดที่อาจเกิดขึ้น รวมถึงกรณีที่ไม่พบร้านอาหาร

9. `module.exports = router;`: ส่งตัวแปร router ออกไป เพื่อให้สามารถนำไปใช้ในไฟล์อื่นได้





## ไฟล์ restaurant.router.sql.js


### การสร้าง API Endpoint สำหรับเพิ่มร้านอาหาร

### การติดตั้งและสร้าง Router
1. `const express = require("express");`: นำเข้าโมดูล Express จาก package.json
2. `const router = express.Router();`: สร้างตัวแปร router จาก Express Router
3. `const Restaurant = require("../models/restaurant.model.sql");`: นำเข้าโมดูล Restaurant จากไฟล์ restaurant.model ในโฟลเดอร์ models

### การเพิ่มร้านอาหาร
4. `router.post("/restaurants", (req, res) => { ... });`: กำหนด route POST ไปยัง `/restaurants`
   - สร้างออบเจ็กต์ `newRestaurant` จากข้อมูลที่ได้รับจากไคลเอนต์
   - ใช้เมท็อด `Restaurant.create(newRestaurant, (err, data) => { ... });` เพื่อบันทึกข้อมูลลงฐานข้อมูล
   - ตรวจสอบข้อผิดพลาด และส่ง response กลับไปยังไคลเอนต์

### อธิบายเพิ่มเติม
- การนำเข้า Express และสร้าง router เป็นขั้นตอนเบื้องต้นในการสร้างเซิร์ฟเวอร์
- การนำเข้าโมดูล Restaurant เชื่อมต่อกับโมเดลในฐานข้อมูล
- ในส่วนของ `router.post`, การสร้างร้านอาหารใหม่จะเริ่มจากการรับข้อมูลจากไคลเอนต์ แล้วบันทึกลงในฐานข้อมูลผ่านเมท็อด `create`
- หากมีข้อผิดพลาด จะส่งข้อความผิดพลาดกลับไปยังไคลเอนต์ หากสำเร็จ จะส่งข้อมูลที่บันทึกกลับไป


### การสร้าง API Endpoint สำหรับดึงข้อมูลร้านอาหารทั้งหมด

5. `router.get("/restaurants", (req, res) => { ... });`: กำหนด route GET ไปยัง `/restaurants`
   - สร้าง request ไปยัง URL `http://localhost:5000/restaurants` สำหรับดึงข้อมูลร้านอาหารทั้งหมด
6. `Restaurant.getAll((err, data) => { ... });`: เรียกใช้เมท็อด `getAll` จากโมดูล Restaurant เพื่อดึงข้อมูลทั้งหมดจากฐานข้อมูล
   - ถ้ามีข้อผิดพลาด (error) จะส่งข้อความผิดพลาดกลับไปยังไคลเอนต์
   - ถ้าสำเร็จ จะส่งข้อมูลทั้งหมดกลับไปยังไคลเอนต์

### อธิบายเพิ่มเติม
- โค้ดนี้เป็นการกำหนด API endpoint ที่จะรอรับการร้องขอเข้ามาเป็นประเภท GET ที่ URL /restaurants เพื่อดึงข้อมูลร้านอาหารทั้งหมด
- เมื่อมีการร้องขอเข้ามา โค้ดจะเรียกเมท็อด getAll จากโมดูล Restaurant ซึ่งสามารถดึงข้อมูลร้านอาหารทั้งหมดจากฐานข้อมูลได้
- หากมีข้อผิดพลาดในการดึงข้อมูล โค้ดจะส่ง response กลับไปยังไคลเอนต์ด้วยสถานะ 500 และข้อความแจ้งเตือนข้อผิดพลาด
- หากดึงข้อมูลสำเร็จ โค้ดจะส่งข้อมูลทั้งหมดกลับไปยังไคลเอนต์



### การสร้าง API Endpoint สำหรับดึงข้อมูลร้านอาหารตาม ID

1. `router.get("/restaurants/:id", (req, res) => { ... });`: กำหนด route GET ไปยัง `/restaurants/:id`
   - เมื่อใส่ ID หลัง URL, เช่น `http://localhost:5000/restaurants/1`, จะดึงข้อมูลร้านอาหาร ID 1
2. `const restaurantId = Number.parseInt(req.params.id);`: แปลง ID ที่รับมาเป็นจำนวนเต็ม
3. `Restaurant.getById(restaurantId, (err, data) => { ... });`: เรียกใช้เมท็อด `getById` จากโมดูล Restaurant เพื่อดึงข้อมูลร้านอาหารด้วย ID
   - ถ้าไม่พบ ID, ส่งข้อความว่า "Restaurant id: ... is not found" พร้อมสถานะ 400
   - ถ้ามีข้อผิดพลาดอื่น, ส่งข้อความผิดพลาดกลับพร้อมสถานะ 500
   - ถ้าสำเร็จ, ส่งข้อมูลร้านอาหารกลับไปยังไคลเอนต์


### อธิบายเพิ่มเติม
- โค้ดนี้เป็นการกำหนด API endpoint ที่จะรอรับการร้องขอเข้ามาเป็นประเภท GET ที่ URL /restaurants/:id เพื่อดึงข้อมูลร้านอาหารตาม ID ที่ระบุ
- การรับ ID จากไคลเอนต์แล้วแปลงเป็นจำนวนเต็มเพื่อใช้ในการค้นหาในฐานข้อมูล
- การเรียกใช้เมท็อด getById จากโมดูล Restaurant สำหรับดึงข้อมูลร้านอาหารด้วย ID และตรวจสอบข้อผิดพลาด
- หากไม่พบ ID, ส่งข้อความแจ้งเตือนพร้อมสถานะ 400
- หากมีข้อผิดพลาดอื่นๆ, ส่งข้อความแจ้งเตือนพร้อมสถานะ 500
- หากดึงข้อมูลสำเร็จ, ส่งข้อมูลกลับไปยังไคลเอนต์




### การอัพเดทข้อมูลร้านอาหาร

โค้ดนี้จะอธิบายการทำงานของ API endpoint สำหรับการอัพเดทข้อมูลร้านอาหาร

### URL และ Method

- **URL**: `/restaurants/:id`
- **Method**: `PUT`

### ลักษณะการทำงาน

1. **รับ ID จาก URL**: ระบบจะรับ `id` ที่ส่งมาจาก URL และแปลงเป็นจำนวนเต็ม
2. **ตรวจสอบ Body**: ถ้า Body ที่ส่งมาว่างเปล่า ระบบจะส่งข้อความแจ้งเตือนว่า "Content can not be empty !" พร้อมสถานะ 400
3. **การอัพเดทข้อมูล**: 
   - ใช้เมท็อด `updateById` จากโมดูล Restaurant สำหรับอัพเดทข้อมูลด้วย `id` และ Object ที่สร้างจาก `req.body`
   - ถ้าไม่พบ `id`, ส่งข้อความแจ้งเตือนพร้อมสถานะ 400
   - ถ้ามีข้อผิดพลาดอื่นๆ, ส่งข้อความแจ้งเตือนพร้อมสถานะ 500
   - หากอัพเดทสำเร็จ, ส่งข้อมูลกลับไปยังไคลเอนต์

### ตัวอย่าง URL

- `http://localhost:5000/restaurants/1`: อัพเดทข้อมูลร้านอาหารที่มี ID เป็น 1


#### โค้ดนี้เป็นการกำหนด API endpoint สำหรับการอัพเดทข้อมูลร้านอาหารโดยใช้ URL ในรูปแบบ /restaurants/:id และ HTTP method เป็น PUT โดยการทำงานมีดังนี้:

1. ระบบจะรับ ID ของร้านอาหารจาก URL และแปลงเป็นจำนวนเต็ม
2. ตรวจสอบว่าข้อมูลที่ส่งมาว่างเปล่าหรือไม่ หากว่างจะส่งข้อความแจ้งเตือนกลับไป
3. ถ้าข้อมูลถูกต้อง จะเรียกใช้เมท็อด updateById ของออบเจกต์ Restaurant เพื่ออัพเดทข้อมูล
4. ถ้าพบข้อผิดพลาดจะส่งข้อความแจ้งเตือนและสถานะทาง HTTP ตามสถานะข้อผิดพลาด
5. หากอัพเดทสำเร็จ จะส่งข้อมูลอัพเดทกลับไปที่ไคลเอนต์

โค้ดนี้ช่วยในการจัดการข้อมูลร้านอาหารในระบบ และให้ข้อความแจ้งเตือนที่ชัดเจนเมื่อมีข้อผิดพลาดเกิดขึ้น


### ลบข้อมูลร้านอาหาร

โค้ดนี้แสดงถึง API endpoint สำหรับลบข้อมูลร้านอาหารโดยใช้ ID

### คำอธิบาย

#### การกำหนดเส้นทาง
`router.delete("/restaurants/:id", (req, res) => { ... });`
- กำหนดเส้นทางสำหรับลบข้อมูลร้านอาหารโดยใช้ ID
- `:id` ใน URL เป็นตัวแทนของ ID ของร้านอาหาร

#### การดึง ID จากคำขอ
`const restaurantId = Number.parseInt(req.params.id);`
- ดึง ID ของร้านอาหารจาก URL
- แปลง ID เป็นจำนวนเต็ม

#### การลบข้อมูลร้านอาหารโดยใช้ ID
`Restaurant.deleteById(restaurantId, (err, data) => { ... });`
- เรียกใช้เมธอด `deleteById` ของออบเจ็กต์ `Restaurant`
- ส่ง ID ของร้านอาหารเป็นพารามิเตอร์
- จัดการผลลัพธ์ในฟังก์ชันตอบกลับ `(err, data)`

#### การจัดการข้อผิดพลาด
- `if (err) { ... }`: ตรวจสอบข้อผิดพลาด
- `if (err.kind === "not_found") { ... }`: ตรวจสอบประเภท "not_found", ส่งรหัสสถานะ 400
- `else { ... }`: ส่งรหัสสถานะ 500 สำหรับข้อผิดพลาดอื่นๆ

#### การตอบสนองสำเร็จ
`res.send({message:"Restaurant id:"+restaurantId+" is deleted"});`
- ส่งข้อความแสดงว่าร้านอาหารถูกลบเรียบร้อยแล้ว

#### การส่งออก Router
`module.exports = router;`
- ส่งออก router เพื่อใช้ในส่วนอื่นๆ ของแอพพลิเคชัน












# frontend


## ไฟล์ index.html

- ส่วนหัว (`<head>`):
- `<!DOCTYPE html>`: ประกาศว่าเป็น HTML5
- `<html lang="th">`: กำหนดภาษาของเอกสารเป็นไทย
- `<meta charset="UTF-8">`: กำหนดรูปแบบการเข้ารหัสเป็น UTF-8
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: กำหนดขนาด viewport ให้ทำงานได้ดีบนอุปกรณ์ต่างๆ
- `<title>My Restaurant</title>`: กำหนดชื่อเรื่องของเว็บเพจเป็น "My Restaurant"

การเชื่อมต่อไลบรารีและแบบอักษร:

- **Bootstrap**: เชื่อมต่อ Bootstrap สำหรับการจัดรูปแบบ

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```

---

- **Google Font**: เชื่อมต่อกับ Google Fonts สำหรับแบบอักษร K2D และ Kanit

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
```

---

- **ไฟล์ CSS ท้องถิ่น**: เชื่อมต่อกับไฟล์ CSS ที่อยู่ในโปรเจ็ค

```html
<link href="./index.css" rel="stylesheet">
```

---

ส่วนของเนื้อหา (`<body>`):

- **Navigation Bar**: สร้าง Navigation Bar ด้วย Bootstrap

```html
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">My Restaurant</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="add.html">Add Restaurant</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

- **หัวข้อและส่วนค้นหา**: ประกอบด้วยหัวข้อ `"My Restaurant"` และส่วนของค้นหาร้านอาหาร

```html
<div class="container text-center">
  <h1>My Restaurant</h1>
  <div id="main" class="row">
    <div class="container text-center">
      <div class="input-group mb-3">
        <input class="form-control" id="searchInput" placeholder="Search Restaurant" type="text" style="width: 80%; font-size: 1.5rem; height: 50px;">
        <button class="btn btn-primary" id="searchButton" type="button">Search</button>
        <a class="btn btn-success mb-3 add-restaurant-button" href="add.html">Add Restaurant</a>
      </div>
      <div id="restaurants" class="row"></div>
    </div>
  </div>
</div>
```

---

- **การเชื่อมต่อไฟล์ JavaScript**: สุดท้ายของ <body>, มีการเชื่อมต่อกับไฟล์ JavaScript ท้องถิ่น

```html
<script src="./index.js"></script>
```

---


# ไฟล์ index.js

## 1. Function removeAllResult

```html
const removeAllResult = () => {
  const restaurantsElement = document.querySelector("#restaurants");
  restaurantsElement.innerHTML = "";
};
```

---

- `const removeAllResult`: ประกาศฟังก์ชัน removeAllResult ที่ไม่มีพารามิเตอร์
- `document.querySelector("#restaurants")`: ค้นหา element ที่มี id ว่า "restaurants" ใน HTML
- `restaurantsElement.innerHTML = ""`: กำหนดค่าใน element นั้นเป็นสตริงว่าง เพื่อลบข้อมูลในส่วนนั้น

## 2. Function genRestaurantCard

```html
const genRestaurantCard = (element) => {
  const item = document.createElement("div");
  item.className = "card";
  item.style = "max-width:20rem";
  const card = `<img class="card-img-top" src="${element.imageURL}" alt="restaurant cover" />
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.type}</p>
                  <a href="delete.html?id=${element.id}" class="btn btn-danger col-xs-2"> Delete </a>
                  <a href="edit.html?id=${element.id}" class="btn btn-warning col-xs-2"> Edit </a>
                </div>`;
  item.innerHTML = card;
  return item;
};
```

---

- `const genRestaurantCard = (element)`: ประกาศฟังก์ชัน genRestaurantCard ที่รับพารามิเตอร์ element
- `document.createElement("div")`: สร้าง element ประเภท "div"
- `item.className = "card"`: กำหนดคลาสของ element นั้นเป็น "card"
- `item.style = "max-width:20rem"`: กำหนดสไตล์ของ element นั้น จำกัดความกว้างสูงสุดที่ 20 rem
- `const card = <img ...> ... </div>;`: สร้างสตริง HTML ที่ประกอบด้วยรูปภาพ, ชื่อร้าน, ประเภทร้าน และลิงก์สำหรับแก้ไขและลบ
- `item.innerHTML = card`: ใส่สตริง HTML ที่สร้างไว้ลงใน element "div"
- `return item`: ส่งกลับ element ที่สร้างขึ้น

## 3. Function main

```html
const genRestaurantCard = (element) => {
  const item = document.createElement("div");
  item.className = "card";
  item.style = "max-width:20rem";
  const card = `<img class="card-img-top" src="${element.imageURL}" alt="restaurant cover" />
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.type}</p>
                  <a href="delete.html?id=${element.id}" class="btn btn-danger col-xs-2"> Delete </a>
                  <a href="edit.html?id=${element.id}" class="btn btn-warning col-xs-2"> Edit </a>
                </div>`;
  item.innerHTML = card;
  return item;
};
```

---

- `const main = () =>`: ประกาศฟังก์ชัน main ที่ไม่มีพารามิเตอร์
- `onLoad()`: เรียกฟังก์ชัน onLoad (ไม่ได้ประกาศในโค้ดที่แสดง)
- `document.querySelector("#searchButton")`: ค้นหา element ที่มี id ว่า "searchButton" ใน HTML
- `searchElement.addEventListener("click", searchRestaurant)`: เพิ่ม event listener สำหรับปุ่มค้นหา เมื่อคลิก จะเรียกฟังก์ชัน searchRestaurant

## 4. เรียกใช้งาน Function main

```html
main();
```

---

- `main()`: เรียกใช้ฟังก์ชัน main เมื่อโหลดเว็บเพจเสร็จสิ้น


# ไฟล์ index.css

## 1. กำหนดรูปแบบสำหรับ Body

```html
body {
  background-color: #f8f9fa;
  font-family: 'K2D', sans-serif;
}
```

---

- `background-color: #f8f9fa;`: กำหนดสีพื้นหลังของเว็บเพจ
- `font-family: 'K2D', sans-serif;`: กำหนดแบบอักษรที่ใช้ในเว็บเพจ

## 2. กำหนดรูปแบบสำหรับ Header

```html
.header {
  font-family: 'Kanit', sans-serif;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
```

---

- `font-family: 'Kanit', sans-serif;`: กำหนดแบบอักษรที่ใช้สำหรับส่วนหัว (Header)
- `margin-top: 3rem;`: กำหนดระยะห่างจากด้านบนของส่วนหัว
- `margin-bottom: 2rem;`: กำหนดระยะห่างจากด้านล่างของส่วนหัว

## 3. กำหนดรูปแบบสำหรับ Card

```html
.card {
  margin-bottom: 1rem;
}
```

---

- `margin-bottom: 1rem;`: กำหนดระยะห่างจากด้านล่างของแต่ละ card

## 4. กำหนดรูปแบบสำหรับปุ่มค้นหา (Search Button)

```html
#searchButton {
  margin-top: 1rem;
}
```

---

- `margin-top: 1rem;`: กำหนดระยะห่างจากด้านบนของปุ่มค้นหา

## 5. กำหนดรูปแบบสำหรับส่วนแสดงผลของร้านอาหาร

```html
#restaurants {
  margin-top: 2rem;
}
```

---

- `margin-top: 2rem;`: กำหนดระยะห่างจากด้านบนของส่วนที่แสดงร้านอาหาร



# ไฟล์ add.html

## 1. ประกาศประเภทของเอกสาร (DOCTYPE)

```html
<!DOCTYPE html>
```

---

- บอกว่าเป็น HTML5

## 2. เริ่มต้นโค้ด HTML และกำหนดภาษาเป็นไทย

```html
<html lang="th">
```

---

## 3. ส่วนหัว (Head Section)
### 3.1 กำหนดรูปแบบการเข้ารหัสและ viewport

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

- กำหนดให้ใช้รูปแบบการเข้ารหัส UTF-8
- กำหนด viewport ให้ทำงานได้ดีบนอุปกรณ์ต่างๆ

### 3.2 กำหนดชื่อเรื่อง

```html
<title>Add Restaurant</title>
```

---

- กำหนดชื่อเรื่องเป็น "Add Restaurant"

### 3.3 เชื่อมต่อ Bootstrap

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```

---

- เชื่อมต่อไลบรารี Bootstrap สำหรับการจัดรูปแบบและสคริปต์

### 3.4 เชื่อมต่อ Google Font

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
```

---

- เชื่อมต่อกับ Google Fonts สำหรับแบบอักษร K2D และ Kanit

### 3.5 เชื่อมต่อไฟล์ CSS ท้องถิ่น

```html
<link href="./add.css" rel="stylesheet">
```

---

- เชื่อมต่อกับไฟล์ CSS ท้องถิ่นในโปรเจ็ค

## 4. ส่วนของเนื้อหา (Body Section):
### 4.1 Navigation Bar
- สร้าง Navigation Bar ด้วย Bootstrap สำหรับการนำทางไปยังหน้าต่างๆ
### 4.2 ส่วนของการเพิ่มร้านอาหาร
- สร้างตัวหัวข้อ "Add Restaurant"
- สร้างฟอร์มสำหรับการป้อนข้อมูลร้านอาหารใหม่ โดยมีฟิลด์สำหรับ:
    - ชื่อร้านอาหาร
    - ประเภทร้านอาหาร
    - URL รูปภาพร้านอาหาร
    - ปุ่ม "Add new Restaurant" ที่มีการเรียกฟังก์ชัน addResto ที่อยู่ในไฟล์ JavaScript
### 4.3 การเชื่อมต่อไฟล์ JavaScript

```html
<script src="add.js"></script>
```

---

- สุดท้ายของ <body>, มีการเชื่อมต่อกับไฟล์ JavaScript ท้องถิ่น

## 5. ปิดแท็ก HTML

```html
</html>
```

---




# ไฟล์ add.js

ฟังก์ชัน `addResto` ทำหน้าที่ส่งข้อมูลร้านอาหารไปยัง API เพื่อเพิ่มร้านอาหารใหม่ โดยมีรายละเอียดดังนี้:

## 1. การอ่านค่าจากฟิลด์ต่างๆ ในฟอร์ม:

```javascript
const name = document.getElementById("name").value;
const type = document.getElementById("type").value;
const imageURL = document.getElementById("imageURL").value;
```
- อ่านค่าจากฟิลด์ที่มี id ว่า "name", "type", และ "imageURL" และเก็บไว้ในตัวแปร name, type, และ imageURL

## 2. ตรวจสอบว่ามีค่าทั้งสามตัวแปรหรือไม่:

```javascript
if (name && type && imageURL) {
```
- ตรวจสอบว่ามีค่าในทั้งสามตัวแปรหรือไม่

## 3. สร้าง object สำหรับส่งไปยัง API:

```javascript
const params = {
  name: name,
  type: type,
  imageURL: imageURL,
};
```
- สร้าง object ที่มีค่าจากฟอร์มสำหรับส่งไปยัง API

## 4. ส่งข้อมูลไปยัง API:

```javascript
try {
  const restaurant = await fetch("http://localhost:5000/restaurants", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
```
- เรียก API ผ่านทาง POST method ไปยัง URL "http://localhost:5000/restaurants"
- กำหนด headers และตัวแปรอื่นๆ ให้ตรงกับการเรียก API

## 5. จัดการการตอบสนองจาก API:

```javascript
.then((response) => {
  return response.json();
})
.then((restaurant) => {
  alert("สร้างรหัสร้านอาหารใหม่ร้านที่ " + restaurant.id + " เรียบร้อยแล้ว");
  window.location.href = "/add.html";
});
```
- แปลงการตอบสนองเป็น JSON และแสดงข้อความแจ้งเตือน
- นำทางไปยังหน้าเพิ่มร้านอาหาร

## 6. จัดการข้อผิดพลาด:

```javascript
} catch (error) {
  alert("เพิ่มร้านอาหารใหม่ไม่ได้", error);
  console.error(error);
  alert(error.message);
  window.location.href = "/";
}
```
- แสดงข้อความแจ้งเตือนเมื่อมีข้อผิดพลาด
- นำทางกลับไปที่หน้าหลัก

## 7. จัดการกรณีที่ไม่กรอกข้อมูลในฟอร์ม:

```javascript
} else {
  alert("ต้องกรอกทุกช่อง!!");
  window.location.href = "/";
}
```
- แสดงข้อความแจ้งเตือนหากไม่ได้กรอกข้อมูลในฟอร์ม
- นำทางกลับไปที่หน้าหลัก





# ไฟล์ add.css

ไฟล์ `add.css` จัดการรูปแบบและสไตล์ต่างๆ ของหน้าเว็บสำหรับเพิ่มร้านอาหาร รายละเอียดดังนี้:

## 1. กำหนดรูปแบบโดยรวม:

```css
* {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- กำหนดรูปแบบฟอนต์สำหรับทุกองค์ประกอบในเว็บ
- ตั้งค่าขอบและเส้นกรอบเป็น 0
- กำหนด `box-sizing` เป็น `border-box`

## 2. กำหนดรูปแบบของ body:

```css
body {
    font-family: 'K2D', sans-serif;
    background-color: #f5f5f5;
}
```
- กำหนดฟอนต์สำหรับ body
- ตั้งสีพื้นหลังเป็นสีเทาอ่อน

## 3. กำหนดรูปแบบของ navbar:

```css
.navbar {
    background-color: #ff5722;
}
.navbar-brand,
.nav-link {
    color: #ffffff !important;
}
```
- กำหนดสีพื้นหลังของ navbar
- ตั้งสีของตัวอักษรใน navbar

## 4. กำหนดขนาดฟอนต์ส่วนหัวของการ์ด:

```css
.card-header {
    font-size: 24px;
}
```
- กำหนดขนาดฟอนต์สำหรับหัวของการ์ด

## 5. กำหนดสีของหัวข้อ:

```css
h1 {
    color: #4caf50;
}
```
- กำหนดสีของหัวข้อ h1

## 6. กำหนดขนาดตัวอักษรของฉลาก:

```css
.container .form-label {
    font-size: 24px;
}
```
- กำหนดขนาดตัวอักษรสำหรับฉลากในฟอร์ม

## 7. กำหนดรูปแบบของปุ่มหลัก:

```css
.btn-primary {
    background-color: #4caf50;
    font-size: 18px;
    width: 100%;
}
```
- กำหนดสีพื้นหลังของปุ่มหลัก
- ตั้งขนาดฟอนต์และความกว้างของปุ่ม





# ไฟล์ delete.html

ไฟล์ `delete.html` จัดการหน้าเว็บสำหรับลบร้านอาหาร รายละเอียดดังนี้:

## 1. ส่วนหัว (Head):

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Restaurant</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
    <link href="./delete.css" rel="stylesheet">
</head>
```
- กำหนดชุดอักขระเป็น UTF-8
- ตั้งค่า viewport
- กำหนดชื่อหน้าเว็บ
- ใช้ Bootstrap และ Google Font
- เชื่อมโยงไฟล์ CSS ภายนอก

## 2. ส่วน Body:

### 2.1 แถบนำทาง (Navbar):

```html
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">My Restaurant</a>
        <!-- ... -->
    </div>
</nav>
```
- สร้างแถบนำทาง
- ตั้งชื่อ "My Restaurant"

### 2.2 ฟอร์มลบร้านอาหาร:

```html
<!-- ... -->
<form class="delete-form">
    <div class="form-group">
        <label for="restaurantID">Restaurant ID:</label>
        <input type="text" class="form-control" id="restaurantID" required>
    </div>
    <button type="submit" class="btn btn-danger">Delete Restaurant</button>
</form>
<!-- ... -->
```
- สร้างฟอร์มสำหรับลบร้านอาหาร
- มีฟิลด์รับรหัสร้านอาหาร

### 3. สคริปต์ JavaScript:

```html
<!-- ... -->
<script src="./delete.js"></script>
```
- เชื่อมโยงไฟล์ JavaScript





# ไฟล์ delete.js

## 1. การรับค่าพารามิเตอร์จาก URL:
```javascript
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
```
- `new URLSearchParams(window.location.search)`: สร้างอ็อบเจ็กต์ URLSearchParams จากสตริงของ URL ปัจจุบัน เพื่อจัดการกับพารามิเตอร์ใน URL
- `urlParams.get("id")`: เรียกค่าของพารามิเตอร์ id และจัดเก็บไว้ในตัวแปร id

## 2. การเรียกข้อมูลร้านอาหาร:
```javascript
fetch(`http://localhost:5000/restaurants/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const restaurantName = data.name;
    document.getElementById("restaurant-id").innerText = restaurantName;
  })
  .catch((error) => console.error("ข้อผิดพลาดในการเรียกร้านอาหาร:", error));
```
- `fetch(...)`: ส่งคำขอ GET ไปยัง URL ที่ระบุ
- `.then((response) => response.json())`: แปลงการตอบสนองเป็น JSON
- `(data) => {...}`: ใช้ข้อมูลที่ได้ เรียกชื่อร้านอาหารและแสดงในหน้าเว็บ
- `.catch(...)`: จัดการข้อผิดพลาด (ถ้ามี)

## 3. ฟังก์ชัน deleteRestaurant:
```javascript
async function deleteRestaurant() {
  try {
    const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("ข้อผิดพลาดในการลบร้านอาหาร");
    }

    const restaurantData = await response.json();
    const restaurantName = restaurantData.name;

    alert(`คุณได้ทำการลบร้านอาหารร้านที่ ${id} ไปแล้ว`);
    window.location.href = "index.html";
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการลบร้านอาหาร:", error);
  }
}
```
- `async function deleteRestaurant() {...}`: ประกาศฟังก์ชันแบบอะซิงโครนัส
- `await fetch(...)`: ส่งคำขอ DELETE แบบอะซิงโครนัส
- `if (!response.ok) {...}`: ตรวจสอบว่าการตอบสนองเป็นสำเร็จหรือไม่
- `const restaurantData = await response.json();`: แปลงการตอบสนองเป็น JSON
- `alert(...)`: แสดงข้อความแจ้งเตือนการลบสำเร็จ
- `catch (error) {...}`: จัดการข้อผิดพลาด






# ไฟล์ delete.css

## 1. การตั้งค่าส่วนรวม:
```css
* {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- ตั้งค่าตัวอักษรเป็น `Kanit` สำหรับทุกองค์ประกอบในเว็บ
- กำหนดระยะขอบและระยะห่างไปที่ 0
- ตั้งค่า `box-sizing` เป็น `border-box` ทำให้ความกว้างและความสูงรวมถึงพื้นที่ขอบและพื้นที่เส้นโค้ง

## 2. สไตล์สำหรับหัวข้อ:
```css
h1 {
    color: #f44336;
}
```
- ตั้งค่าสีของหัวข้อ `h1` เป็นสีแดง (`#f44336`)

## 3. สไตล์สำหรับแถบนำทาง:
```css
.navbar {
    background-color: #ff5722;
}

.navbar-brand,
.nav-link {
    color: #ffffff !important;
}
```
- ตั้งค่าสีพื้นหลังของคลาส `.navbar` เป็นสีส้ม (`#ff5722`)
- ตั้งค่าสีของตัวอักษรสำหรับ `.navbar-brand` และ `.nav-link` เป็นสีขาว (`#ffffff`) และใช้ `!important` เพื่อให้มั่นใจว่าจะมีการแทนที่สไตล์อื่นที่อาจมี

## 4. สไตล์สำหรับส่วนหัวของการ์ด:
```css
.card-header {
    font-size: 24px;
    /* เพิ่มขนาดฟอนต์ส่วนหัวของการ์ด */
}
```
- ตั้งค่าขนาดตัวอักษรสำหรับ `.card-header` เป็น `24px`

## 5. สไตล์สำหรับองค์ประกอบ `p` ใน `.container`:
```css
.container p {
    font-size: 28px;
    /* เพิ่มขนาดตัวอักษรขององค์ประกอบ p */
}
```
- ตั้งค่าขนาดตัวอักษรสำหรับองค์ประกอบ `p` ภายใน `.container` เป็น `28px`




# ไฟล์ edit.html

## ส่วนหัว (`<head>`):
- `<!DOCTYPE html>`: ประกาศว่าเป็น HTML5
- `<html lang="th">`: กำหนดภาษาของเอกสารเป็นไทย
- `<meta charset="UTF-8">`: กำหนดรูปแบบการเข้ารหัสเป็น UTF-8
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: กำหนดขนาด viewport ให้ทำงานได้ดีบนอุปกรณ์ต่างๆ
- `<title>Edit Restaurant</title>`: กำหนดชื่อเรื่องของเว็บเพจเป็น "Edit Restaurant"

## การเชื่อมต่อไลบรารีและแบบอักษร:
- **Bootstrap**: เชื่อมต่อ Bootstrap สำหรับการจัดรูปแบบ

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```

- **Google Font**: เชื่อมต่อกับ Google Fonts สำหรับแบบอักษร K2D และ Kanit

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
```

- **ไฟล์ CSS ท้องถิ่น**: เชื่อมต่อกับไฟล์ CSS ที่อยู่ในโปรเจ็ค

```html
<link href="./edit.css" rel="stylesheet">
```

## ส่วนของเนื้อหา (`<body>`):
- **Navigation Bar**: สร้าง Navigation Bar ด้วย Bootstrap

```html
<nav class="navbar navbar-expand-lg navbar-light">
...
</nav>
```

- **แบบฟอร์มแก้ไขร้านอาหาร**: ประกอบด้วยช่องกรอกสำหรับแก้ไขชื่อร้าน, ประเภทร้าน, และ URL รูปร้านอาหาร

```html
<div class="container text-center">
...
</div>
```

- **การเชื่อมต่อไฟล์ JavaScript**: สุดท้ายของ `<body>`, มีการเชื่อมต่อกับไฟล์ JavaScript ท้องถิ่น

```html
<script src="edit.js"></script>
```




# ไฟล์ edit.js
## 1. การรับค่าพารามิเตอร์จาก URL
```javascript
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
```
- `new URLSearchParams(window.location.search)`: สร้างอ็อบเจ็กต์ URLSearchParams จากสตริงของ URL ปัจจุบัน เพื่อจัดการกับพารามิเตอร์ใน URL
- `urlParams.get("id")`: เรียกค่าของพารามิเตอร์ชื่อ "id" และจัดเก็บไว้ในตัวแปร `id`

## 2. การดึงข้อมูลร้านอาหาร
```javascript
fetch(`http://localhost:5000/restaurants/${id}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("name").value = data.name;
    document.getElementById("type").value = data.type;
    document.getElementById("imageURL").value = data.imageURL;
  })
  .catch((error) => console.error("เกิดข้อผิดพลาดในการดึงข้อมูลร้านอาหาร:", error));
```
- `fetch(...)`: ส่งคำขอ GET ไปยัง URL ที่ระบุเพื่อดึงข้อมูลร้านอาหาร
- `.then((response) => response.json())`: แปลงการตอบสนองเป็น JSON
- `(data) => {...}`: ใช้ข้อมูลที่ได้ เรียกข้อมูลร้านอาหารและแสดงในฟอร์ม
- `.catch(...)` จัดการข้อผิดพลาด (ถ้ามี)

## 3. ฟังก์ชัน updateRestaurant
```javascript
async function updateRestaurant() {
  // อ่านค่าจากฟอร์ม
  // ตรวจสอบว่ามีค่าทั้งสามตัวแปรหรือไม่
  // สร้าง object สำหรับส่งไปยัง API
  // ส่งข้อมูลไปยัง API ด้วย method PUT
  // จัดการการตอบสนองจาก API
  // จัดการข้อผิดพลาด
  // จัดการกรณีที่ไม่กรอกข้อมูลในฟอร์ม
}
```
- `async function updateRestaurant() {...}`: ประกาศฟังก์ชันแบบอะซิงโครนัสที่ทำหน้าที่อัปเดตข้อมูลร้านอาหาร

## 4. การเพิ่ม Event Listener
```javascript
document
  .getElementById("updateButton")
  .addEventListener("click", updateRestaurant);
```
- `document.getElementById("updateButton")`: รับอ็อบเจ็กต์ของปุ่มที่มี ID ว่า "updateButton"
- `.addEventListener("click", updateRestaurant)`: เพิ่ม Event Listener ให้กับปุ่ม และเรียกฟังก์ชัน `updateRestaurant` เมื่อมีการคลิก





# ไฟล์ edit.css

ไฟล์นี้เป็นไฟล์ CSS สำหรับกำหนดรูปแบบของหน้าแก้ไขร้านอาหาร (edit.html) ในโปรเจ็คนี้ มาดูรายละเอียดของไฟล์นี้กัน:

```css
.container {
  margin-top: 50px;
}

.input-group {
  width: 80%;
  margin: auto;
}

.add-restaurant-button {
  margin-left: 10px;
}
```

- `.container`: กำหนด margin-top เป็น 50px สำหรับคลาส container เพื่อให้มีระยะห่างจากส่วนบนของหน้าเว็บ
- `.input-group`: กำหนดความกว้างของกลุ่มข้อมูลอินพุตเป็น 80% และจัดตำแหน่งอยู่ตรงกลางด้วยการกำหนด margin เป็น auto
- `.add-restaurant-button`: กำหนดระยะห่างทางด้านซ้ายของปุ่มเพิ่มร้านอาหารเป็น 10px

ไฟล์นี้ทำหน้าที่ปรับแต่งรูปแบบของหน้าแก้ไขร้านอาหารให้ดูสวยงามและง่ายต่อการใช้งาน

1. **.container**:
   - `margin-top: 50px;`: กำหนดระยะห่างจากส่วนบนของหน้าเว็บเป็น 50px เพื่อให้มีพื้นที่ว่างด้านบนของ container

2. **.input-group**:
   - `width: 80%;`: กำหนดความกว้างของกลุ่มอินพุต (input group) เป็น 80% ของความกว้างทั้งหมดของหน้าจอ
   - `margin: auto;`: กำหนด margin ให้เป็น auto เพื่อจัดตำแหน่งกลุ่มอินพุตอยู่ตรงกลางของหน้าจอ

3. **.add-restaurant-button**:
   - `margin-left: 10px;`: กำหนดระยะห่างทางด้านซ้ายของปุ่ม "เพิ่มร้านอาหาร" เป็น 10px เพื่อให้มีระยะห่างจากปุ่มอื่น ๆ