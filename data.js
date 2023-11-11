// * Часть 2. Задание Vue
// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

Vue.createApp({
  data() {
    return {
      products: [
        { id: 1, title: "Bread", price: 50 },
        { id: 2, title: "Milk", price: 80 },
        { id: 3, title: "Salt", price: 20 },
        { id: 4, title: "Sugar", price: 35 },
        { id: 4, title: "Vinegar", price: 15 },
      ],
    };
  },
  methods: {
    sortInAscendingOrder() {
      return this.products.sort((a, b) => a.price - b.price);
    },
    sortInDescendingOrder() {
      return this.products.sort((a, b) => b.price - a.price);
    },
  },
}).mount("#app");
