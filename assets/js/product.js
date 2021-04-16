//get all products
const getProducts = async () => {
  const res = await fetch("products.json");
  const data = await res.json();
  const products = data.products;
  return products;
};
const showAllProducts = (products, position) => {
  let htmls = products.map(
    (product) =>
      `
      <div class="col l-3 m-6 c-12">
        <div class="product">
              <div class="product-header">
              <img class="" src="${product.image}"></img>
              </div>
              <div class="product-info">
              <div class="product-info__name">${product.title}</div>
              <div class="product-info__rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
              </div>
              <div class="product-info__price">${product.price}$</div>
              </div>
              <ul>
              <li><a href=""><i class="far fa-eye"></i></a></li>
              <li><a href=""><i class="far fa-heart"></i></a></li>
              <li><a href=""><i class="fas fa-sync"></i></a></li>
              </ul>
          </div>
      </div>
        
        `
  );
  htmls = htmls.join("");
  position.innerHTML = htmls;
};

const sortedProducts = document.querySelector(".sorted-products");
const filterBtns = document.querySelectorAll(".sorted-products .products-type");
const sortContent = document.querySelector(
  ".sorted-products .sort-content .grid .row"
);
const allProductsBlock = document.querySelector(
  ".all-products .sort-content .grid .row"
);
const latestProductsBlock = document.querySelector(
  ".latest-products .sort-content .grid .row"
);
const recentViewProducts = document.querySelector(
  ".recent-products .sort-content .grid .row"
);

if (sortedProducts) {
  sortedProducts.addEventListener("click", async (e) => {
    const target = e.target.closest(".products-type");
    const id = target.dataset.id;
    const allProducts = await getProducts();
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");

    const sortedProducts = allProducts.filter((product) => {
      return product.category === id;
    });
    sortContent.classList.add("animate__animated", "animate__backInUp");
    setTimeout(() => {
      sortContent.classList.remove("animate__animated", "animate__backInUp");
    }, 1000);

    showAllProducts(sortedProducts, sortContent);
  });
}

const filterArray = async (type) => {
  const allProducts = await getProducts();
  return allProducts.filter((product) => {
    return product.category === type;
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  const allProducts = await getProducts();
  const defaultProducts = await filterArray("trend");
  const latestProducts = await filterArray("latest");
  const recentProducts = await filterArray("recent");

  showAllProducts(defaultProducts, sortContent);
  showAllProducts(allProducts, allProductsBlock);
  showAllProducts(latestProducts, latestProductsBlock);
  showAllProducts(recentProducts, recentViewProducts);
});
