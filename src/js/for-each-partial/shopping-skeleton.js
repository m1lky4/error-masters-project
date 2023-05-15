// const ShopingList = document.querySelector('.shopping-list');
function createSkeletonsList() {
  return `
        <li class="skeleton-book-list">
          <div class="skeleton-image"></div>
          <div class="right-part">
            <div class="header-skelet">
              <div class="left-part-skelet">
                <div class="title-skelet-form"></div>
                <div class="type-book-skelet"></div>
              </div>
              <span class="bucket-skeleton"></span>
            </div>
            <div class="text-book-skelet"></div>
            <div class="bottom-part-list">
              <div class="author-skelet"></div>
              <div class="links-shop-skelet"></div>
            </div>
          </div>
        </li>
        `;
}
function createSkeletonShopList() {
  return `
          ${Array.from({ length: 3 }, () => createSkeletonsList()).join('')}
    `;
}
