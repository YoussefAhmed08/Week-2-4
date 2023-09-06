const data1 = [17, 21, 23];
const data2 = [17, 21, 23, 26, 20, 15, 11, 15];
const data3 = [
  1, 5, 7, 10, 6, 3, 1, 5, 7, 10, 6, 3, 1, 5, 7, 10, 6, 3, 1, 5, 7, 10, 6, 3,
];
let printForecast = function (arr) {
  let str = `... `;
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C` + ` in ${[i + 1]} days` + " ... ";
  }
  console.log(str);
};
printForecast(data3);
