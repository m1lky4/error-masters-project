import { renderTopBookList } from '../for-each-partial/main';
import { data } from '../for-each-partial/main';

export function formatResponse(e) {
  if (e.target.innerWidth < 767) {
    renderTopBookList(data, 1);
  } else if (e.target.innerWidth >= 767 && e.target.innerWidth <= 1440) {
    renderTopBookList(data, 3);
  } else if (e.target.innerWidth >= 1440) {
    renderTopBookList(data, 5);
  }
}


