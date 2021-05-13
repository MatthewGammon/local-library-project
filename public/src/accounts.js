function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  const result = accounts.map((account) => account);
  result.filter((account) => account);
  result.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowedTotal = 0;
  for (let book in books) {
    const borrowed = books[book].borrows.find(
      (borrow) => borrow.id === account.id
    );
    if (borrowed) {
      borrowedTotal++;
    }
  }
  return borrowedTotal;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  for (let book in books) {
    const currentlyOut = books[book].borrows.find(
      (borrowsKey) =>
        borrowsKey.returned === false && borrowsKey.id === account.id
    );
    if (currentlyOut) {
      let bookResult = books[book];
      for (let author in authors) {
        if (authors[author].id === bookResult.authorId) {
          bookResult.author = authors[author];
          checkedOut.push(bookResult);
        }
      }
    }
  }
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
