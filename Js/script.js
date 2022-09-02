
/* player number one code start*/
const playerSelectionCardOne = document.getElementById('btn-one').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-one');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 

    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);

    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
});

/* player number one code end*/

// player number to code 

const playerSelectionCardTwo = document.getElementById('btn-two').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-two');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);

    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player number three 

const playerSelectionCardThree = document.getElementById('btn-three').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-three');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);

    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player number four 

const playerSelectionCardfour = document.getElementById('btn-four').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-four');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);

    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player Number five 
const playerSelectionCardfive = document.getElementById('btn-five').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-five');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player number six 

const playerSelectionCardSix = document.getElementById('btn-six').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-six');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player number seven 

const playerSelectionCardSeven = document.getElementById('btn-seven').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-seven');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player number eight 
const playerSelectionCardEight = document.getElementById('btn-eight').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-eight');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});

// player number nine 

const playerSelectionCardNine = document.getElementById('btn-nine').addEventListener('click', function(){
    const playerOneName = document.getElementById('player-nine');
    const getPlayerOneName = playerOneName.innerText;
   

    // adding list 
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = getPlayerOneName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});



// per player calculate section 
const playerExpense = document.getElementById('calculate-btn').addEventListener('click', function(){
    // console.log('button clicked');
    const perPlayerPriceString = document.getElementById('per-player');
    const getPerPlayer = perPlayerPriceString.value;
   
    const perPlayerPriceNumber = parseFloat(getPerPlayer);
    // console.log(perPlayerPriceNumber);


    const playerListItem = document.getElementById('player-list');
    const playerindi = playerListItem.childNodes.length - 1;
    const total = playerindi   * perPlayerPriceNumber;
    // console.log(total);
    
   const showTotal = document.getElementById('expense-total');
   const showTotalString = showTotal.innerText;
   const showTotalNumber = parseFloat(showTotalString);

//    console.log(showTotalNumber);
   showTotal.innerText = total;

    
});

// total calulation 
const allTotalExpenses = document.getElementById('total-btn').addEventListener('click', function(){
    // console.log('button clicked');
    const managerExpense = document.getElementById('manager-input');
    const managerTotalString = managerExpense.value;
    const managerTotalNumber = parseFloat(managerTotalString);
    console.log(managerTotalNumber);

    const coachExpens = document.getElementById('coach-input');
    const coachTotalString = coachExpens.value;
    const coachTotalNumber = parseFloat(coachTotalString);
    

    const totalExpenses = document.getElementById('subtotal');
    const totalCostString = totalExpenses.innerText;
    const totalCostNumber = parseFloat(totalCostString);
    
    const allTotalCost = document.getElementById('expense-total')
    const allTotalCostString = allTotalCost.innerText;
    const allTotalCostNumber = parseFloat(allTotalCostString);
    

    totalExpenses.innerText = coachTotalNumber + managerTotalNumber + allTotalCostNumber;

    
   
});


