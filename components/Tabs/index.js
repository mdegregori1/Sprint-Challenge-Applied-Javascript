// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
// const tabStart = document.querySelector('.topics');

// axios 
//     .get("https://lambda-times-backend.herokuapp.com/topics")
//     .then(response =>{
//         console.log('here is your data',response.data);
//         //add function information here once you make it 
//         const newTab = makeTabs(response.data);
//         tabStart.appendChild(newTab);
//     })
//     .catch(error => {
//         console.group('Data Failure', error);
//     });

// // function 
// function makeTabs(arr){
//     //create element
//     const 
//     tab = document.createElement('div');

//     // classes 
//     tab.classList.add('tab')

//     //append data 
    
