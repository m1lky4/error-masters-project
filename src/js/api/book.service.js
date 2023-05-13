import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export class BookAPI {
  bookCategory;
  page;
  pageLimit;
  constructor() {
    this.bookCategory = '';
    this.page = 1;
    this.pageLimit = 1;
  }

  async getBooksCategoryList() {
    try {
      const responce = await axios.get(`/category-list`);
      return responce.data;
    } catch {
      return '';
    }
  }

  async getTopBooksList() {
    try {
      const responce = await axios.get(`/top-books`);
      return responce.data;
    } catch (error) {
      return '';
    }
  }

  async getBooksWithSelectedCategory(selectedCategory) {
    if (selectedCategory) this.bookCategory = selectedCategory;
    try {
      const responce = await axios.get(
        `/category?category=${this.bookCategory}`
      );
      return responce.data;
    } catch {
      return '';
    }
  }

  async getBookByID(bookID) {
    try {
      const responce = await axios.get(`/${bookID}`);
      return responce.data;
    } catch {
      return '';
    }
  }
}

// // ================================================Приклад застосуванн=====================================================
// // Спершу слід імпортувати клас у свій файл і створити екземпляр класу.

// const example = new BookAPI();

// // Приклад використання кожної функції наведено нижче.

// // ===============================================================================================
// async function test1() {
//   const response = await example.getBooksCategoryList();

//   if (!response) return console.log('Error');

//   console.log('getBooksCategoryList', response);
// }
// test1();

// // ===============================================================================================

// async function test2() {
//   const response = await example.getTopBooksList();
//   if (!response) return console.log('Error');
//   console.log('getTopBooksList', response);
// }
// test2();

// // ===============================================================================================

// async function test3() {
//   const response = await example.getBooksWithSelectedCategory(
//     'Hardcover Nonfiction'
//   );
//   if (!response) return console.log('Error');
//   console.log('getBooksWithSelectedCategory', response);
// }
// test3();

// // ===============================================================================================

// async function test4() {
//   const response = await example.getBookByID('643282b1e85766588626a080');
//   if (!response) return console.log('Error');
//   console.log('getBookByID', response);
// }
// test4();
