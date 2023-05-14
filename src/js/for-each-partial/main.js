import { createTopBookList } from './book_list_markup';
import { BookAPI } from '../api/book.service';
import { formatResponse } from '../helpers/format_data';
import debounce from 'lodash.debounce';
import {onModal} from './modal'

export let data;
const bookAPI = new BookAPI();

export function renderTopBookList(data, limit) {
  const markup = createTopBookList(data, limit);
  const categoryMarkupList = document.querySelector('.category-markup-list');
  categoryMarkupList.innerHTML = markup;
  categoryMarkupList.addEventListener('click',onModal);
}

window.addEventListener('resize', debounce(formatResponse, 300));

window.addEventListener('load', async e => {
  data = await bookAPI.getTopBooksList();

  if (!data) return console.log('Error');

  if (window.innerWidth < 767) {
    renderTopBookList(data, 1);
  } else if (window.innerWidth >= 767 && window.innerWidth <= 1199) {
    renderTopBookList(data, 3);
  } else if (window.innerWidth >= 1200) {
    renderTopBookList(data, 5);
  }
});
