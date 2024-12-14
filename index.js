
//  В этом массиве, представлены элементы блока "id-site" в виде обьектов,
// которые описывают эти элементы, type - тип элемента, value - контент, содержимое элемента
const model = [
  { type: "title", value: "Hello World from JS!" },
  { type: "text", value: "here we go with some text" },
  { type: "columns", value: ["First", "Second", "Third",] },
];

  const site = document.querySelector("#site");   // DOM-элемент, в который будут добавлятся элементы, через js

model.forEach((block) => {
  let html = "";

  if (block.type === 'title') {
    html = title(block)
  } else if (block.type === 'text') {
    html = text(block)
  } else if (block.type === 'columns') {
    html = columns(block)
  }

  // Метод insertAdjacentHTML() применяется к полученым из DOM элементам
  // и позволяет вставлять в указанное место HTML-код в виде строки
site.insertAdjacentHTML("beforeend", html)
});

function title(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
}

function text(block) {
  return `
  <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
  </div>
  `;
}

function columns(block) {
  return `
  <div class="row">
    <div class="col-sm">${block.value[0]}</div>
    <div class="col-sm">${block.value[1]}</div>
    <div class="col-sm">${block.value[2]}</div>
  </div>
  `
}