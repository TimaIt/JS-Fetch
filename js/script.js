// const btn = document.querySelector(".btn");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let arr = [];
// let title = document.getElementById("title");

try {
  fetch("https://dummyjson.com/products/3")
    .then((res) => res.json())
    .then((res) => {
      let data = res;
      const box = document.querySelector(".box");
      let title = document.querySelector(".title");
      let img = document.querySelector(".img");
      let text = document.querySelector(".text");
      let text1 = document.querySelector(".text1");
      let text2 = document.querySelector(".text2");
      let text3 = document.querySelector(".text3");

      title.innerText = `${data.brand}`;
      box.appendChild(title);

      for (let item of data.images) {
        img.src = item;
        box.appendChild(img);
      }

      text.innerText = `Цена: ${data.price}$`;
      text1.innerText = `Рейтинг:${data.rating}`;
      text2.innerText = `Название:${data.title}`;
      text3.innerText = data.description;
      box.appendChild(text);
      box.appendChild(text1);
      box.appendChild(text2);
      box.appendChild(text3);

      console.log(data);
    });
} catch (error) {
  console.log(error);
}
