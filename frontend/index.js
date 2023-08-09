const genRestaurantCard = (restaurant) =>{
  const card = document.createElement("div")
  card.className ="card";
  card.style = "width: 18rem;"
  const restoCard = `
    <img src="${restaurant.imageURL}" class="card-img-top" alt=".restaurants...">
    <div class="card-body">
      <h5 class="card-title">${restaurant.name}</h5>
      <p class="card-text">${restaurant.type}</p>
      <a href="edit.html?id=${restaurant.id}" class="btn btn-warning">Edit</a>
      <a href="delete.html?id=${restaurant.id}" class="btn btn-danger">Delete</a>
    </div>
  `;
  card.innerHTML = restoCard;
  
  const restaurants = document.querySelector("#restaurants");
  restaurants.appendChild(card);
}

const onLoad = async () => {
const allRestaurants = await fetch("http://localhost:5000/restaurants", {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  return response.json();
});
console.log(allRestaurants)
allRestaurants.forEach((restaurant) => genRestaurantCard(restaurant))
};

const removeRestaurantCard = () =>{ //เป็นฟังชั่นที่ใช้ในการ remove //ถ้าไม่มีก็จะไม่ลบของเก่าทิ้งก็จะเพิ่มขึ้นไปเรื่อยๆ
  const restaurantsElement = document.querySelector("#restaurants"); //สร้างตัวแปร ที่ชื่อว่า restaurantsElement //แล้วค้นหาใน .restaurants
  restaurantsElement.innerHTML = ""; //เป็นการเซตให้ข้างใน HTML เป็นค่าว่าง
}

const searchRestaurant = async (event) => { //const searchRestaurant ก็คือ เป็นการสร้างฟังชั่นที่ชื่อว่า searchRestaurant //เป็นฟังชั่นevent //async ต้องมี await ด้วย
  // รับค่าจากช่อง input
const keyword = document.getElementById('searchInput').value;
//const keyword = event.target.value; //const keyword เป็นการลองรับตัวแปรที่ชื่อว่า keyword ซึ่งอยู่ในออฟเจ็ค event แล้วใน event มี target แล้วใน target มีแอดทีบิ้วชื่อว่า value
// if(keyword != "" && event.key === "Enter"){ // if เป็นเงื่อนไข // เงื่อนไขแรกที่ใช้ในการ search คือ keyword != "" หมายถึง keywordหรือการพิมต้องไม่ว่างเปล่าถ้าว่างเปล่าก็จะไม่ไม่ค้นหา แล้ว && ก็คือ "และ" // เงื่อนไขที่สองที่ใช้ในการ search คือ event.key ต้องกดปุ่ม Enter ก่อน ไม่งั้นไม่ค้นหา //คือถ้าทำทั้ง เงื่อนไขที่แรก และ เงื่อนไขที่สอง ถึงจะทำงาน
  
if(keyword != ""){
  const allRestaurants = await fetch("http://localhost:5000/restaurants", {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  return response.json();
});
//Getting Data from Restful API
  //http://localhost:5000/restaurants
  // const url = "http://localhost:5000/restaurants"; //เป็นการไปดึงข้อมูลมาจาก http://localhost:5000/restaurants // url เป็นการดึงข้อมูล
  // const allRestaurants = await fetch(url, { // เป็นการสร้างตัวแปรขึ้นมาเก็บใน allRestaurants ซึ่งคอยเก็บข้อมูล //fetch เป็น api และเป็นฟังชั่น ที่ใช้เรียกดูข้อมูลทั้งหมด และต้องใช้คู่กับ await เพื่อ"บอกว่าให้รอฟังชั่น fetch นี่ทำงานเสร็จก่อนแล้วค่อยทำบรรทัดถัดไป" //await ต้องมี async ด้วย //url คือตัวแทนที่มาจากโค้ด const url = "http://localhost:5000/restaurants";
  //     method:"GET", //เป็นการระบุว่า method นี้เป็น method อะไร //GET เป็นmethodที่เข้าถึงข้อมูลหรือdatabase //method คือวิธีการเข้าถึง ซึ่งประกอบไปด้วย GET POST PUT DELETE ซึ่งเลือกตามสถานการณ์
  //     mode:"cors", //เป็นการระบุว่า mode นี้เป็น mode อะไร //มันมีการข้ามเลยเรียกใช้ cors 
  //     cache:"no-cache", //เป็นการระบุว่า cache นี้เป็น cache อะไร //no-cache ก็คือ ไม่ต้องเก็บ ไม่ต้องจับ เดี๋ยวหาเองทุกรอบ
  //     credentials:"same-origin", //เป็นการระบุว่า credentials นี้เป็น credentials อะไร 
  //     headers:{ //เป็นการระบุว่า headers นี้เป็น headers อะไร  //headersเพื่อบอกว่าข้อมูลที่เรากำลังจะคุยต่อไปนี้เนี่ย เราจะคุยด้วยเนื้อหาประเภศไหน
  //         "Content-Type":"application/json" //เป็น application/json เพราะ เซิฟเวอร์ของเราเป็นjson
  //     }
  // }).then((response)=>response.json()) //then ก็คือ สิ่งที่ต้องทำหลังจากนี้ // (response)=>response.json() ก็คือ ให้แปลงผลลัพท์เป็น json หรือออฟเจ็ค ให้หน่อย เพื่อเราจะได้ใช้งานได้ง่ายๆ
  
  console.log(allRestaurants); //พิมแค่ log อย่างเดียว ก็จะขึ้น console.log();  เพื่อที่เราจะได้ไม่ต้องพิมเต็มๆเพื่อจะได้ไม่เสียเวลา 
  //Find matching response
  let restaurants = allRestaurants.filter( //เป็นวิธี search โดยการเรียกออฟเจ็คที่ชื่อว่า filter 
      (restaurantParameter) => restaurantParameter.name.includes(keyword) || restaurantParameter.type.includes(keyword) //เป็นงั้นไขของ filter // => ก็คือที่ //restaurantParameter.name.includes(keyword) ก็คือ เป็นงั้นไขคือเอา restaurantParameter ที่ restaurantParameter เทียบหรือหาในตัวของ name ใน database.js ของแบบฝึกหัดที่ 3 part 2 และ includes(keyword) ก็คือ มีคำใดคำนึงที่ตรงกับ keyword ของเราหรือป่าว // || คือ หรือ หมายถึง ถ้าตรงแค่อันเดียวก็เอา ถ้าตรงทั้งสองอันก็เอา        //restaurantParameter.type.includes(keyword) ก็คือ เป็นงั้นไขคือเอา restaurantParameter ที่ restaurantParameter เทียบหรือหาในตัวของ type ใน database.js ของแบบฝึกหัดที่ 3 part 2 และ includes(keyword) ก็คือ มีคำใดคำนึงที่ตรงกับ keyword ของเราหรือป่าว
  );
  console.log(restaurants); //พิมแค่ log อย่างเดียว ก็จะขึ้น console.log();  เพื่อที่เราจะได้ไม่ต้องพิมเต็มๆเพื่อจะได้ไม่เสียเวลา //console.log คือคำสั่งแสดงข้อมูลจากภาษา JavaScript ออกสู่หน้า console หรือ ผลลัพท์
  //add restaurants to ID คือแอดตัวใหม่ลบตัวเก่า
  removeRestaurantCard() //เป็นการอัพเดจหน้าวิว 
  restaurants.forEach(element => { //forEach ก็คืออาเรย์เรา เราไม่ต้องสนใจนับจำนวนเอง ตัวฟังชั่นจะนับให้เรา มันจะวนลูปตามจำนวนสมาชิกที่อยู่ในอาเรย์นั้น เช่น มีสมาชิกที่ search อยู่ 1 ตัว มันก็จะทำให้แค่ 1 หรือเวลาเรา search แล้วเจอผลลัพท์หลายล้าน มันก็จะวนตามจำนวนหลายล้านที่เจอหรือตรงตาม keyword ซึ่งใช้ได้กับอาเรย์เท่านั้น  //เป็นการวนลูป //element เป็นอาเรย์ //พิมแค่ restaurants.forEach ก็จะขึ้น restaurants.forEach(element => {}); เพื่อที่เราจะได้ไม่ต้องพิมเต็มๆเพื่อจะได้ไม่เสียเวลา
      genRestaurantCard(element) //genRestaurantCard ฟังชั่นที่รับมาจาก element หรือ element ส่งมาให้ //genRestaurantCard(element) ก็คือ genRestaurantCard ส่ง element กลับไป //เป็นการส่งอีกฟังชั่นนึงเพื่อใช้ในการเพิ่มผลลัพท์ในหน้าเว็บให้หน่อย
  });
}
};

const main = () => {
  onLoad();
  const searchElement = document.querySelector("#searchButton");
  if (searchElement) {
  if (searchElement) {
    searchElement.addEventListener('click', searchRestaurant);
  }
  }
};
main();



// // Function to search restaurants by name and type
// function searchRestaurants() {
//     const searchString = document.getElementById('search-name').value.trim().toLowerCase();

//     // Filtering the restaurants based on the search criteria
//     const filteredRestaurants = restaurants.filter(restaurant => {
//         return searchString === '' || restaurant.name.toLowerCase().includes(searchString) ||
//                restaurant.type.toLowerCase().includes(searchString);
//     });

//     // Rendering the filtered restaurants
//     renderRestaurants(filteredRestaurants);
// }
