// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
const mainDiv = document.createElement('div');
mainDiv.classList.add('header');

const dateSpan = document.createElement('span');
dateSpan.classList.add('date');
dateSpan.textContent = 'November 26th, 2019'
// append to parent
mainDiv.appendChild(dateSpan)

const mainHeader = document.createElement('h1');
mainHeader.textContent = 'Lambda Times'
mainDiv.appendChild(mainHeader)

const tempSpan = document.createElement('span');
tempSpan.classList.add('temp');
tempSpan.textContent = '55°';
mainDiv.appendChild(tempSpan)

return mainDiv;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());