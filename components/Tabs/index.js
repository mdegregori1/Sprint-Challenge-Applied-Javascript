// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');
fetchTopics = axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then( response => {
  console.log('structure', response.data.topics);
  response.data.topics.map( event => {
    const createTopic = document.createElement('div');
    createTopic.classList.add('tab')
    createTopic.textContent = event;
    topics.appendChild(createTopic);
  })
})
.catch(err => console.log(err));