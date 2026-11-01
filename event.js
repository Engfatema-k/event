const btnColor = document.getElementById('btn-color') ;
const btnMessage = document.getElementById('btn-message') ;
const btnCounter = document.getElementById('btn-counter') ;
const counterVal = document.getElementById('count-val');
const messageDisplay = document.getElementById('message-display');
let counter = 0;
btnColor.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;});
btnMessage.addEventListener('click', () => {
messageDisplay.textContent = "Hello, this is a message!";});

btnCounter.addEventListener('click', () => {
    counter++;
    counterVal.textContent = counter;});
    const textInput = document.getElementById('text-input');
    const livetext = document.getElementById('live-text');
    const charcount = document.getElementById('char-count');
    textInput.addEventListener('input', (e) => {
    livetext.textContent = e.target.value;
    charcount.textContent = e.target.value.length;});
    const box = document.getElementById('mouse-box');
    box.addEventListener('mouseenter', () => {
    box.textContent = "مرحباً";});
    box.addEventListener('mouseleave', () => {
    box.textContent = "المحتوى ";});

    box.addEventListener('click',()=>{
    box.classList.toggle('clicked-active');
    });

   
    const pressedkey = document.getElementById('pressed-key');
    window.addEventListener('keydown', (e) =>{
        pressedkey.textContent = e.key;
    });
        
        


