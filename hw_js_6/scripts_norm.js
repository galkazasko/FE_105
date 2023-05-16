const shopingList2 = [
  {type: 'oranges', amount: 5, purchased: true, price: 5},
  {type: 'pinaple', amount: 3, purchased: false, price: 20},
  {type: 'watermelon', amount: 2, purchased: false, price: 50},
  {type: 'avocado', amount: 10, purchased: true, price: 10},
  {type: 'grapefruit', amount: 5, purchased: false, price: 15},
];

const updatedShopingList = shopingList.map(item => {
  const calculateTotal = () => item.amount * item.price;
  return {
    ...item,
    total: calculateTotal()
  };
});

updatedShopingList.forEach(item => {
  console.log(item.type, item.amount, item.purchased, item.price, item.total);
});

//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

const productToRemove = 'pinaple';

const updatedShopingList2 = shopingList.filter(item => item.type !== productToRemove);

console.log(updatedShopingList2);

//Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const productToAdd = {type: 'tomato', amount: 9, purchased: false, price: 20};//додавання нового продукту або збільшувати кількість існуючих

const existingProductIndex = shopingList.findIndex(item => item.type === productToAdd.type);

if (existingProductIndex !== -1) {
  shopingList[existingProductIndex].amount += productToAdd.amount;
  shopingList[existingProductIndex].total = shopingList[existingProductIndex].amount * shopingList[existingProductIndex].price;
} else {

  const newProduct = {
    ...productToAdd,
    total: productToAdd.amount * productToAdd.price
  };
  shopingList.push(newProduct);
}

console.log(shopingList);