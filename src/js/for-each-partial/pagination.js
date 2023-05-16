const ITEMS_PER_PAGE = 5;
const paginationElement = document.querySelector('#pagination');
const listElement = document.querySelector('.shopping-list');
const listItems = Array.from(listElement.children);

const totalItems = listItems.length;
const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

const options = {
  total_pages: totalPages,
  visible_pages: 4,
  center_align: true,
  first_item_classname: 'tui-first-child',
  last_item_classname: 'tui-last-child',
  page_classname: 'tui-page',
  active_classname: 'tui-is-selected',
  disabled_classname: 'tui-is-disabled',
  template: {
    page: '<a href="#">{{page}}</a>',
    current_page: '<strong>{{page}}</strong>',
    move_button:
      '<a href="#" class="{{type}}">' +
      '<svg class="tui-ico-base">' +
      '<use xlink:href="{{svg}}"></use>' +
      '</svg>' +
      '</a>',
    disabled_move_button:
      '<span class="{{type}}">' +
      '<svg class="tui-ico-base">' +
      '<use xlink:href="{{svg}}"></use>' +
      '</svg>' +
      '</span>',
  },
};

const pagination = new tui.Pagination(paginationElement, options);

function showListItems(pageNum) {
  const startIndex = (pageNum - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  listItems.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

showListItems(1);

pagination.on('beforeMove', evt => {
  const pageNum = evt.page;
  showListItems(pageNum);
});
