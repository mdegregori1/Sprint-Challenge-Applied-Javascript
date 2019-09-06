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

const siteHeader = document.querySelector('.header-container')
function Header() {
    const menuHeader = document.createElement('div');
    const siteDate = document.createElement('span');
    const Title = document.createElement('h1');
    const Temp = document.createElement('span');

    //classes
    menuHeader.classList.add('header');
    siteDate.classList.add('date');
    Temp.classList.add('temp');

    // append

    siteHeader.append(menuHeader);
    menuHeader.appendChild(siteDate);
    menuHeader.appendChild(Title);
    menuHeader.appendChild(Temp);

    // text content

    siteDate.textContent = 'March 28th, 2019';
    Title.textContent = 'Lambda Times';
    Temp.textContent = '98°';




}
Header();