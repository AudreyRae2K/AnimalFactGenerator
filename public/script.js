const baseUrl = "https://cat-fact.herokuapp.com/facts/random?animal_"

const section = document.querySelector('section');
const footer = document.querySelector('footer');
let FirstPage = document.getElementsByClassName('imageContainer');


const factAmount = 1;
const Cat = cat;
const Dog = dog;
const catFacts = document.getElementById('cat');
const dogFacts = document.getElementById('dog');
const imageContainer = document.getElementById('cat')




catFacts.addEventListener('click', erase) 

function erase() {
    catFacts.remove();
    dogFacts.remove();
    
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
        Fact.className = "information";
        button.className = "AskMe";
        mainPage.className = "AskMe";
    
        // append to html
        section.appendChild(kittenAround);
        section.appendChild(Fact);
        footer.appendChild(button);
        footer.appendChild(mainPage);
        // sideText.appendChild(section);
        // sideText.appendChild(footer);

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
dogFacts.addEventListener('click', erase) 

function erase() {
    catFacts.remove();
    dogFacts.remove();
    
}

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


