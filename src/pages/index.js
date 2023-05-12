// aqui vou setar todos os arquivos que vou exportar e exportar em bloco,
// ao invés de importar no App.js um por um.

import Home from "./HomePage";
import Products from "./ProductsPage";
import SingleProduct from "./SingleProductPage";
import About from "./AboutPage";
import Cart from "./CartPage";
import Error from "./ErrorPage";
import Checkout from "./CheckoutPage";
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "./AuthWrapper";
export {
  Home,
  SingleProduct,
  Cart,
  About,
  Error,
  Checkout,
  Products,
  PrivateRoute,
  AuthWrapper,
};
