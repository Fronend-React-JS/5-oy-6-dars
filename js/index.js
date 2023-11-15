import { data } from "./data.js";
const tbody = document.getElementById("tbody");

function createRows(data) {
  let lists = "";
  tbody.innerHTML = "";
  data.forEach((el) => {
    let {
      id,
      name = "Mavjud emas",
      year = "",
      price = "",
      color = "Mavjud emas",
      status = "",
    } = el;
    if (status == "active") {
      status = "Sotuvda mavjud";
    }

    if (status == "inactive") {
      status = "Sotuvda mavjud emas";
    }

    let tr = `
               <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${year}</td>
                    <td>${color}</td>
                    <td>${price}</td>
                    <td>${status}</td>
               </tr>
          `;
    lists += tr;
  });

  tbody.innerHTML += lists;
}

const filterFunction = () => {
     const cars = document.getElementById("cars");
     const color = document.getElementById("color");
     const year = document.getElementById("year");
     const price = document.getElementById("price");
     const filter = document.getElementById("filter-status");
     
     const thisname = cars.value;
     const thiscolor = color.value;
     const thisyear = year.value;
     const thisprice = price.value;
     let selectedStatus = filter.value === "" ? true : filter.value;
     let carsRes = data.filter((el) => {
       return (
         el.name.includes(thisname) &&
         el.color.includes(thiscolor) &&
         el.year.toString().includes(thisyear) &&
         el.price.toString().includes(thisprice) &&
         (selectedStatus === true || el.status ===  selectedStatus)

       );
     });
     createRows(carsRes);
}
document.getElementById("filter-status").addEventListener("change", filterFunction);

// 1. narx oraligi
// 2. yillar boyicha
// 3. rangi

cars.addEventListener("change", function () {
  let selectedCar = this.value;
  let selectedCars = data.filter((el) => {
    return el.name == selectedCar;
  });
  createRows(selectedCars);
});

// Yili bo'yicha qidiruv
document.getElementById("year").addEventListener("change", filterFunction);

// Rangi bo'yicha qidiruv
document.getElementById("color").addEventListener("change", filterFunction);

// narxi bo'yicha qidiruv
document.getElementById("price").addEventListener("change", filterFunction);

window.onload = function (params) {
  if (data.length) {
    createRows(data);
  }
};
