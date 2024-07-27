import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

const productHTMLElement = document.querySelector("#shell-products");
const cartHTMLElement = document.querySelector("#shell-cart");

productMount(productHTMLElement);
cartMount(cartHTMLElement);
