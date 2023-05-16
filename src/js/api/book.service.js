import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export class BookAPI {
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
    try {
      const responce = await axios.get(
        `/category?category=${selectedCategory}`
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
// async function seeMoreBtnList(e) {
//     if (e.target.nodeName !== 'BUTTON') return;
//     const liElements = e.target.closest("li");
//     const targetParagraph = liElements.querySelector('.category-markup-subtitle')
// console.log(targetParagraph);
//     const response = await bookAPI.getBooksWithSelectedCategory(targetParagraph);
//     if (!response) return;

//     mainContent.innerHTML = createBookCardMarkup(response);
//     console.log(response);

//   titleOfCategory.innerHTML = formatCategoryTitle(targetParagraph);
//   if (categoryList.querySelector('.active')) {
//     categoryList.querySelector('.active').classList.remove('active');
//   }
//     e.target.classList.add('active');
// }