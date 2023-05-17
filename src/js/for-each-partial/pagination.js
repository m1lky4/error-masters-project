// <script>
//       $(function () {
//         var items = $('.shopping-list li');
//         var numItems = items.length;
//         var perPage = 5;

//         items.slice(perPage).hide();

//         $('#pagination').pagination({
//           items: numItems,
//           itemsOnPage: perPage,
//           prevText: '&laquo;',
//           nextText: '&raquo;',
//           onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//           },
//         });
//       });
//     </script>
