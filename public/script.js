const baseUrl = "https://cat-fact.herokuapp.com/facts/random?animal_"

const section = document.querySelector('section');
const footer = document.querySelector('footer');

// const factAmount = 1;
// const Cat = cat;
// const Dog = dog;
const catFacts = document.getElementById('cat');
const dogFacts = document.getElementById('dog');
const ScreenView = document.getElementById('wholePage');




// const petButton = document.getElementsByClassName('photoButton');


catFacts.addEventListener('click', erase) 

function erase() {
    
    document.getElementById('right').style.display = "none";
    // let factContainer = document.createElement('div');
    let showerCat = document.createElement('IMG')
    let rightContainer = document.createElement('div');

    // let bubbles = document.createElement('div');
    // let bubbleOne = document.createElement('div');
    // let bubbleTwo = document.createElement('div');
    // let bubbleThree = document.createElement('div');
    // let bubbleFour = document.createElement('div');
    // let bubbleFive = document.createElement('div');
    // let bubbleSix = document.createElement('div');
    // let bubbleSeven = document.createElement('div');
    // let bubbleEight = document.createElement('div');
    // let bubbleNine = document.createElement('div');
    // let bubbleTen = document.createElement('div');

    // factContainer.appendChild(section);
    // factContainer.appendChild(footer);

    

    showerCat.src = "./assets/ShowerCapCat2.jpeg";
    
    // Create Class Name
    // factContainer.className = "factContainer"
    showerCat.className = "showerCat"
    rightContainer.className = "rightSide";
    
    // bubbles.className = "bubbles";
    // bubbleOne.className = "bubble";
    // bubbleTwo.className = "bubble";
    // bubbleThree.className = "bubble";
    // bubbleFour.className = "bubble";
    // bubbleFive.className = "bubble";
    // bubbleSix.className = "bubble";
    // bubbleSeven.className = "bubble";
    // bubbleEight.className = "bubble";
    // bubbleNine.className = "bubble";
    // bubbleTen.className = "bubble";
    

    
    // bubbles.appendChild(bubbleOne);
    // bubbles.appendChild(bubbleTwo);
    // bubbles.appendChild(bubbleThree);
    // bubbles.appendChild(bubbleFour);
    // bubbles.appendChild(bubbleFive);
    // bubbles.appendChild(bubbleSix);
    // bubbles.appendChild(bubbleSeven);
    // bubbles.appendChild(bubbleEight);
    // bubbles.appendChild(bubbleNine);
    // bubbles.appendChild(bubbleTen);
    // showerCat.appendChild(bubbles);
    
    ScreenView.appendChild(rightContainer);
    rightContainer.appendChild(showerCat);

 
}

catFacts.addEventListener('click', complete)

function complete() {


    let fish = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"


    fetch(fish)
    
        .then(function (result) {
            // console.log(result)
            return result.json();
        })
        .then(function (json) {
            // console.log(json);
            displayFacts(json);
   
        })

    }

function displayFacts(json) {
    console.log('Display Results', json);
    
    
        // create elements to hold info
        let kittenAround = document.createElement('h1');
        let Fact = document.createElement('p')
        let button = document.createElement('button');
        let mainPage = document.createElement('button');
        // let sideText = document.createElement('div');
        
    

        // set text for elements
        kittenAround.textContent = 'I am not "kitten" around. These facts are fur-real!'
        Fact.textContent = json.text;
        button.textContent = 'Purress for new cat fact';
        mainPage.textContent = "Time to go home"
        
        
        //Set class name
        kittenAround.className = "pun"
        Fact.className = "information";
        button.className = "AskMe";
        mainPage.className = "AskMe";
    
        // append to html
        section.appendChild(kittenAround);
        section.appendChild(Fact);
        footer.appendChild(button);
        footer.appendChild(mainPage);
        

        button.addEventListener('click', () => {

            complete();
            
            while (section.firstChild) {
                section.removeChild(section.firstChild);
                
           }

           while(footer.firstChild) {
               footer.removeChild(footer.firstChild)
           }
        })
        
        mainPage.addEventListener('click', () => {
            
            location.reload();
    
            })

       
}


// Dog Fetch----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
dogFacts.addEventListener('click', clear)

function clear() {
    
    document.getElementById('right').style.display = "none";


    // let factContainer = document.createElement('div');
    let showerDog = document.createElement('IMG')
    let rightContainer = document.createElement('div');

    // let bubbles = document.createElement('div');
    // let bubbleOne = document.createElement('div');
    // let bubbleTwo = document.createElement('div');
    // let bubbleThree = document.createElement('div');
    // let bubbleFour = document.createElement('div');
    // let bubbleFive = document.createElement('div');
    // let bubbleSix = document.createElement('div');
    // let bubbleSeven = document.createElement('div');
    // let bubbleEight = document.createElement('div');
    // let bubbleNine = document.createElement('div');
    // let bubbleTen = document.createElement('div');

    
    showerDog.src = "./assets/CroppedDogwShowerCap2.jpg";
    
    // Create Class Name
    // factContainer.className = "factContainer"
    showerDog.className = "showerCat"
    rightContainer.className = "rightSide";
    
    // bubbles.className = "bubbles";
    // bubbleOne.className = "bubble";
    // bubbleTwo.className = "bubble";
    // bubbleThree.className = "bubble";
    // bubbleFour.className = "bubble";
    // bubbleFive.className = "bubble";
    // bubbleSix.className = "bubble";
    // bubbleSeven.className = "bubble";
    // bubbleEight.className = "bubble";
    // bubbleNine.className = "bubble";
    // bubbleTen.className = "bubble";
    


    rightContainer.appendChild(showerDog);
    // bubbles.appendChild(bubbleOne);
    // bubbles.appendChild(bubbleTwo);
    // bubbles.appendChild(bubbleThree);
    // bubbles.appendChild(bubbleFour);
    // bubbles.appendChild(bubbleFive);
    // bubbles.appendChild(bubbleSix);
    // bubbles.appendChild(bubbleSeven);
    // bubbles.appendChild(bubbleEight);
    // bubbles.appendChild(bubbleNine);
    // bubbles.appendChild(bubbleTen);
    // rightContainer.appendChild(bubbles);
    ScreenView.appendChild(rightContainer);


 
}



// dogFacts.addEventListener('click', clear) 

// function clear() {
//     // catFacts.remove();
//     // dogFacts.remove();
//     document.getElementById('right').style.display = "none";
    
// }

dogFacts.addEventListener('click', link)

function link() {

    
    let ball = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1"


    fetch(ball)
    
        .then(function (result) {
            // console.log(result)
            return result.json();
        })
        .then(function (json) {
            // console.log(json);
            displayResults(json);
   
        })

    }

function displayResults(json) {
    console.log('Display Results', json);
    

        
        // create elements to hold info
        let FurReal = document.createElement('h1');
        let factContainer = document.createElement('p')
        let newFact = document.createElement('button');
        let home = document.createElement('button');
        
    
        // set text for elements
        FurReal.textContent = 'FurReal'
        factContainer.textContent = json.text;
        newFact.textContent = "Let's play some more fetch";
        home.textContent = "Time to go home"
        
    
        //Set class name
        FurReal.className = "pun"
        factContainer.className = "information";
        newFact.className = "AskMe";
        home.className = "AskMe";
    
        // append to html
        section.appendChild(FurReal);
        section.appendChild(factContainer);
        footer.appendChild(newFact);
        footer.appendChild(home);


        newFact.addEventListener('click', () => {

            link();
            
            while (section.firstChild) {
                section.removeChild(section.firstChild);
                
           }

           while(footer.firstChild) {
               footer.removeChild(footer.firstChild)
           }
        })
        
        home.addEventListener('click', () => {
            
            location.reload();
    
            })
    }


