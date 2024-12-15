
// В этом массиве, представлена модель элементов блока "id-site" в виде обьектов,
// которые описывают эти элементы, type - тип элемента, value - контент, содержимое элемента
const model = [
  { type: "title", value: "Hello World from JS!" },
  { type: "text", value: "here we go with some text" },
  { type: "columns", value: ["First", "Second", "Third"] },
];

  const site = document.querySelector("#site");   // DOM-элемент, в который будут добавлятся элементы, через js

// Проверяем тип блока и генерируем соответствующий HTML
model.forEach((block) => {
  let html = "";

  if (block.type === 'title') {
    // Если тип блока 'title', вызываем функцию title для генерации HTML
    html = title(block)
  } else if (block.type === 'text') {
    // Если тип блока 'text', вызываем функцию text для генерации HTML
    html = text(block)
  } else if (block.type === 'columns') {
    // Если тип блока 'columns', вызываем функцию columns для генерации HTML
    html = columns(block)
  }

  // Метод insertAdjacentHTML() применяется к полученному из DOM элементу и вставлять в указанное место HTML-код в виде строки
site.insertAdjacentHTML("beforeend", html)
});


// Функция для генерации HTML для блока типа 'title'
function title(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
}

// Функция для генерации HTML для блока типа 'text'
function text(block) {
  return `
  <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
  </div>
  `;
}

// Функция для генерации HTML-кода для блока типа 'columns'
function columns(block) {
  return `
  <div class="row">
    <div class="col-sm">${block.value[0]}</div>
    <div class="col-sm">${block.value[1]}</div>
    <div class="col-sm">${block.value[2]}</div>
  </div>
  `
}