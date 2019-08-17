// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  let head = document.createElement("div")
  head.classList.add("header")

  let date = document.createElement("span")
  date.classList.add("date")
  date.textContent = "MARCH 28, 2019"
  head.appendChild(date)

  let title = document.createElement("h1")
  title.textContent = "Lambda Times"
  head.appendChild(title)

  let temperature = document.createElement("span")
  temperature.classList.add("temp")
  temperature.textContent = "98°"
  head.appendChild(temperature)

  return head

}

let headerContainer = document.querySelector(".header-container")
headerContainer.appendChild(Header())

