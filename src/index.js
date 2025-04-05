import { add, multiply } from "../src/utils/math";
const result = add(5, 3) + multiply(2, 4);
document.querySelector("#result").textContent = `Результат: ${result}`;
