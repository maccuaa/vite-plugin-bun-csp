import "./style.css";
import bunLogo from "./assets/bun.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://bun.sh" target="_blank">
      <img src="${bunLogo}" class="logo bun" alt="Bun logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h3 id="date"></h3>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
document.querySelector("#date").innerHTML = dayjs().format("DD-MM-YYYY");
