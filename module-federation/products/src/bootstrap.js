import faker from "faker";

const mount = (htmlElement) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  htmlElement.innerHTML = products;
};

// Context #1
// Running this file in development in isolation
// immediately render our app into the element
if (process.env.NODE_ENV === "development") {
  const htmlElement = document.querySelector("#dev-products");
  if (htmlElement) {
    mount(htmlElement);
  }
}

// Context #2
// Running in production in the container app
// No guarantee that an element with an id of 'dev-products'

export { mount };
