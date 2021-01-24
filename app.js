setInterval(checkBackground,200);
function checkBackground(){
generateRandomColor();
changeBackgroundColor();
changeBackgroundText();
}

function generateRandomColor(){
return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function changeBackgroundColor(){
let colorBg=document.getElementById('color-overlay');
colorBg.style.backgroundColor=generateRandomColor();
}

function changeBackgroundText(){
let textbg=document.getElementById('text-bg');
if(textbg.innerHTML=='LETS ROCK AND ROLL')
textbg.innerHTML='ON THE FLOOR BABY';
else if(textbg.innerHTML='ON THE FLOOR BABY')
textbg.innerHTML='HIT IT HARD';
else if(textbg.innerHTML=='HIT IT HARD')
textbg.innerHTML='ROCK THE PARTY BABY';
else if(textbg.innerHTML=='ROCK THE PARTY BABY')
textbg.innerHTML='LETS ROCK AND ROLL';
}