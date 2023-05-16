//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 

const shopingList = [
  {type: 'oranges', amount: 5, purchased: true, price: 5, total: 0},
  {type: 'pinaple', amount: 3, purchased: false, price: 20, total: 0},
  {type: 'watermelon', amount: 2, purchased: false, price: 50, total: 0},
  {type: 'avocado', amount: 10, purchased: true, price: 10, total: 0},
  {type: 'grapefruit', amount: 5, purchased: false, price: 15, total: 0},
];

for (let i = 0; i < shopingList.length; i++) {
  const item = shopingList[i];
  item.total = item.amount * item.price;
}

console.log(shopingList);

//Написати кілька функцій для роботи з таким масивом:
//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function getShopingList(list) {
  list.sort((a,b) => a.purchased - b.purchased);
  list.forEach(item=> {
    console.log(`${item.type} (${item.amount} pcs.) - ${item.total} USD`);
  });
}
console.log(`Shoping list:`);
getShopingList(shopingList);

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function markAsPurchased(productName) {
  for (let i = 0; i < shopingList.length; i++) {
    const item = shopingList[i];
    if (item.type === productName) {
      item.purchased = true;
      break;
    }
  }
}

markAsPurchased('watermelon'); 

console.log(`Shoping list:`);
getShopingList(shopingList);