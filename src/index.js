import "./style.css"
import ProductList from './components/List.js'
import ProductDetail from './components/Detail.js'
import Cart from './components/Cart.js'

const routes = {
    '/': ProductList,
    '/detail': ProductDetail,
    '/cart': Cart,
};
const $app = document.querySelector('.App');

//pushstate, onpopstate
const historyRouterPush = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderHTML(routes[pathName])
}
const renderHTML = (route) => {
    $app.innerHTML = route
}
historyRouterPush('/')
const list = document.querySelector('.product')
list.addEventListener('click', () => {
    historyRouterPush('/detail')
})

export default { historyRouterPush }