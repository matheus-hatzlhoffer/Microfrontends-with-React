import faker from "faker";

const mount = (htmlElement) => {
  const cartText = `<div>You have ${faker.random.number()} itens in your cart</div>`;
  htmlElement.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const htmlElement = document.querySelector("#dev-cart");
  if (htmlElement) {
    mount(htmlElement);
  }
}

export { mount };
