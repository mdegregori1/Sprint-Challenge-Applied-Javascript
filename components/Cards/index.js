// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleCards = document.querySelector('.cards-container');
fetchData = axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log('last get', response.data.articles);
    const allCards = Object.entries(response.data.articles);
    allCards.map( topic => {
        topic[1].map( e => {
            articleCards.appendChild(Card(e));
        });
    });
})
.catch(err => {
    console.log(err);
})

const Card = e => {
    const card = document.createElement(`div`);
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div')
    const img = document.createElement('img');
    const authorsName = document.createElement('span')

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = e.headline;
    authorsName.textContent = e.authorName;
    img.src = e.authorPhoto;

    // append to one another 
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorsName)

    return card;


}

