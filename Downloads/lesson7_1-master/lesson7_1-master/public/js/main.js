//Добавление уникальных параметров
var type = document.getElementById("type");
var category = document.getElementById("category");
//Тип товара
var arrType = [];
//Из продуктджс для каждого товара используем функицию
products.forEach(function(item) {
  if (!arrType.includes(item.type)) arrType.push(item.type);
});
//Массив типов для кажого айтема используем функцию
arrType.forEach(function(item) {
  var option = document.createElement("option"); //В переменную вкладываем создание тега оптион для каждого айтема
  option.text = item; //из каждого айтема вытаскиваем текст
  type.appendChild(option); // добовляем в тег тайп узел вниз оптин
});

//Категория товара
var arrCategory = [];

products.forEach(function(item) {
  if (!arrCategory.includes(item.category)) arrCategory.push(item.category);
});

arrCategory.forEach(function(item) {
  var option = document.createElement("option");
  option.text = item;
  category.appendChild(option);
});
//Цвет товара

var arrColor = [];

products.forEach(function(item) {
  if (!arrColor.includes(item.color)) arrColor.push(item.color);
});

arrColor.forEach(function(item) {
  var label = document.createElement("label");
  var input = document.createElement("input");

  input.type = "radio";
  input.name = "color";

  label.innerText = item;

  label.appendChild(input);
  color.appendChild(label);
});

//Динамический вывод товаров
var prod = document.getElementsByClassName("products");
products.forEach(function(item) {
  var card = document.createElement("div");
  card.className = "col-md-4 product";

  var img = document.createElement("img");
  var name = document.createElement("div");
  var type = document.createElement("div");
  var category = document.createElement("div");
  var color = document.createElement("div");
  var parameter = document.createElement("div");

  img.src = "./public/img/" + item.img;
  img.className = "product-image";
  name.innerText = item.name;
  type.innerText = item.type;
  category.innerText = item.category;
  color.innerText = item.color;
  parameter.innerText = item.parameter;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(category);
  card.appendChild(color);
  card.appendChild(parameter);

  prod[0].appendChild(card);
});

//Обработка выбора параметров

document.getElementById("type").onchange = function() {
  console.log(this.value);
};
