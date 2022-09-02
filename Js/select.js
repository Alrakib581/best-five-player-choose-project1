function commonUtilities(commonBtn) {
    const buttonStyle = document.getElementById(commonBtn);
    buttonStyle.style.backgroundColor = 'grey';
    return buttonStyle;
}
function commonUtilitiesTwo(playerName) {
    const playersName = document.getElementById(playerName);
    const getPlayerOneName = playersName.innerText;
    return getPlayerOneName;
}

// player one 

const playerSelectionCardOne = document.getElementById('btn-one').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-one');
    const playerName = commonUtilitiesTwo('player-one');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
    

});

// player two

const playerSelectionCardTwo = document.getElementById('btn-two').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-two');
    const playerName = commonUtilitiesTwo('player-two');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';

});

// player three 

const playerSelectionCardThree = document.getElementById('btn-three').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-three');
    const playerName = commonUtilitiesTwo('player-three');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';

});

// player four 

const playerSelectionCardfour = document.getElementById('btn-four').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-four');
    const playerName = commonUtilitiesTwo('player-four');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';

});

// player five 
const playerSelectionCardfive = document.getElementById('btn-five').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-five');
    const playerName = commonUtilitiesTwo('player-five');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';

});

// player six 

const playerSelectionCardSix = document.getElementById('btn-six').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-six');
    const playerName = commonUtilitiesTwo('player-six');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
});

// player seven 

const playerSelectionCardSeven = document.getElementById('btn-seven').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-seven');
    const playerName = commonUtilitiesTwo('player-seven');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';

});

// player eight 
const playerSelectionCardEight = document.getElementById('btn-eight').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-eight');
    const playerName = commonUtilitiesTwo('player-eight');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';

});

// player nine 

const playerSelectionCardNine = document.getElementById('btn-nine').addEventListener('click', function () {
    const btnStyle = commonUtilities('btn-nine');
    const playerName = commonUtilitiesTwo('player-nine');
    const playerList = document.getElementById('player-list');
    const listCreat = document.createElement('li');
    listCreat.innerText = playerName;
    playerList.appendChild(listCreat);
    listCreat.style.fontSize = '1.2rem';
    listCreat.style.marginBottom = '1rem';
   
});


// per player calculate section 
const playerExpense = document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerPriceString = document.getElementById('per-player');
    const getPerPlayer = perPlayerPriceString.value;
    const perPlayerPriceNumber = parseFloat(getPerPlayer);
    if (isNaN(perPlayerPriceNumber)) {
        alert('Plaease Input Valid number');
        return
    }
    
    const playerListItem = document.getElementById('player-list');
    
    const playerItemsLength = playerListItem.childNodes.length - 1;
    if (playerItemsLength >= 6) {
        alert('You Cannot select more than 5 please select only 5 Players')
        return
    }
    
    const total = playerItemsLength * perPlayerPriceNumber;
    const showTotal = document.getElementById('expense-total');
    showTotal.innerText = total;

});

// total calulation 
const allTotalExpenses = document.getElementById('total-btn').addEventListener('click', function () {
    const managerExpense = document.getElementById('manager-input');
    const managerTotalString = managerExpense.value;
    const managerTotalNumber = parseFloat(managerTotalString);
    if (isNaN(managerTotalNumber)) {
        alert('Please input valid Number');
        return
    }

    const coachExpens = document.getElementById('coach-input');
    const coachTotalString = coachExpens.value;
    const coachTotalNumber = parseFloat(coachTotalString);
    if (isNaN(coachTotalNumber)) {
        alert('Please input valid Number');
        return
    }
    const totalExpenses = document.getElementById('subtotal');

    const allTotalCost = document.getElementById('expense-total')
    const allTotalCostString = allTotalCost.innerText;
    const allTotalCostNumber = parseFloat(allTotalCostString);
    totalExpenses.innerText = coachTotalNumber + managerTotalNumber + allTotalCostNumber;

});

// code for button disabled 

function disable1 (){
    document.getElementById('btn-one').disabled = true;
}
function disable2 (){
    document.getElementById('btn-two').disabled = true;
}
function disable3 (){
    document.getElementById('btn-three').disabled = true;
}
function disable4 (){
    document.getElementById('btn-four').disabled = true;
}
function disable5 (){
    document.getElementById('btn-five').disabled = true;
}
function disable6 (){
    document.getElementById('btn-six').disabled = true;
}
function disable7 (){
    document.getElementById('btn-seven').disabled = true;
}
function disable8 (){
    document.getElementById('btn-eight').disabled = true;
}
function disable9 (){
    document.getElementById('btn-nine').disabled = true;
}
