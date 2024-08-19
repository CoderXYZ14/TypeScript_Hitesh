//Generic in Array

function getSearchProduct<T>(products: T[]): T {
  return products[3];
}

//convert to arrow fn
const getMoreSearchProduct = <T>(products: T[]): T => {
  return products[4];
};
