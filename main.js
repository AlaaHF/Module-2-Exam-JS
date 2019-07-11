// JavaScript File
'use strict';

// Event Listeners
document.getElementById('mario-btn').addEventListener('click', marioButton);
document.getElementById('link-btn').addEventListener('click', linkButton);
document.getElementById('calc-btn').addEventListener('click', calcAttack);
document.getElementById('battle-btn').addEventListener('click', battleButton);


// Event Fuctions
function marioButton() {
    document.getElementById('main-img'). src = 'images/mario.png';
    document.getElementById('html').style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('bullet1').innerHTML = 'The Mushroom King';
    document.getElementById('bullet2').innerHTML = 'Princess Peach';
    document.getElementById('bullet3').innerHTML = 'King Bowser';
    document.getElementById('list').style.visibility = 'visible';
}

function linkButton() {
    document.getElementById('main-img'). src = 'images/link.png';
    document.getElementById('html').style.backgroundColor = 'green';
    document.body.style.backgroundColor = 'lightgreen';
    document.getElementById('bullet1').innerHTML = 'Hyrule';
    document.getElementById('bullet2').innerHTML = 'Princess Zelda';
    document.getElementById('bullet3').innerHTML = 'Ganon';
    document.getElementById('list').style.visibility = 'visible';
}

function calcAttack() {
    // Input
    let marioStrength = Number(document.getElementById('mario-s').value);
    let marioDefence = Number(document.getElementById('mario-d').value);
    let linkStrength = Number(document.getElementById('link-s').value);
    let linkDefence = Number(document.getElementById('link-d').value);
   
    // Process
    let marioAttack = 2 * marioStrength / linkDefence + 5;
    marioAttack *= 1;
    marioAttack = Math.floor(marioAttack);
    marioAttack /= 1;
    let linkAttack = (linkStrength + 15) / (marioDefence);
    linkAttack *= 100;
    linkAttack = Math.floor(linkAttack);
    linkAttack /= 100;
    
    // Output
    document.getElementById('mario-a').innerHTML = marioAttack;
    document.getElementById('mario-a').style.visibility = 'visible';
    document.getElementById('link-a').innerHTML = linkAttack;
    document.getElementById('link-a').style.visibility = 'visible';
}


function battleButton() {
    // Input
    let input1 = document.getElementById('input-1').value;
    let input2 = document.getElementById('input-2').value;
    let input3 = document.getElementById('input-3').value;
    let marioA = document.getElementById('mario-a').value;
    let linkA = document.getElementById('link-a').value;

    // Message
    let message = 'Mario lunged at Link and prepared his ' + input1 + ' for an attack of ' + marioA + ', but Link was too quick. Link unsheathed his ' + input2 + ' and struck Mario first! Mario took ' + linkA + ' damage. Mario let out a loud "' + input3 +'" and collapsed to the ground.';

    // Output
    document.getElementById('mad-lib').innerHTML = message;
    document.getElementById('mad-lib').style.visibility = 'visible';
}