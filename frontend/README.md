# Worapakorn644259018-Frontend_Restaurant
 ชื่อ นายวรปกร จารุศิริพจน์ รหัสนักศึกษา644259018 หมู่เรียน64/45


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

# 5. ปิดแท็ก HTML

```html
</html>
```

---


