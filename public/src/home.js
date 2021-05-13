function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedTotal = 0;
  for (let book in books) {
    const borrowedBooks = books[book].borrows.find(
      (borrow) => borrow.returned === false
    );
    if (borrowedBooks) {
      borrowedTotal++;
    }
  }
  return borrowedTotal;
}

function getMostCommonGenres(books) {
  booksByGenre = [];
  for (let book of books) {
    let genreName = booksByGenre.find((genre) => genre.name === book.genre);
    if (genreName) {
      genreName.count++;
    } else {
      booksByGenre.push({ name: book.genre, count: 1 });
    }
  }
  booksByGenre.sort((genre1, genre2) => genre2.count - genre1.count);
  return booksByGenre.slice(0, 5);
}

function getMostPopularBooks(books) {
  let popularTitle = [];
  for (let book in books) {
    const timesBorrowed = books[book].borrows.length;
    popularTitle.push({ name: books[book].title, count: timesBorrowed });
  }
  let sorted = popularTitle.sort((a, b) => b.count - a.count);
  return sorted.slice(0, 5);
}

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function getMostPopularAuthors(books, authors) {
  const mappedBooks = books.map((book) => {
    const {
      name: { first, last },
    } = findAuthorById(authors, book.authorId);
    return { name: `${first} ${last}`, count: book.borrows.length };
  });
  return mappedBooks
    .sort((book1, book2) => book2.count - book1.count)
    .slice(0, 5);
}

//   let result = [];
//   for (let book in books) {
//     const { authorId } = books[book];
//     //console.log(authorId);
//     for (let author in authors) {
//       //console.log(authors[author].id);
//       const somethingOrOther = findAuthorById()

//         //console.log(authors[author].id === authorId);
//       }
//     }
//   }
// }

//console.log(authorsMatch);
// for (let author in authors) {
//   if(authors[author].id === authorId){

//   }
//   );
//   const authorCount = authorsMatch.length;
//   console.log(authorsMatch);
// const first = author.name.first;
// const last = author.name.last;
//const authorName = { name: `${first} ${last}`, count: `${authorCount}` };
// return authorCount;

//booksByAuthor = authorsMatch.length;
// authorsMatch.sort((a, b) => a.count - b.count);
// console.log(authorsMatch);

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
