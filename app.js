const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach((button, index) => {
    const popup = document.querySelectorAll('.popup')[index];
    button.addEventListener('click', function(){
        popup.classList.toggle('show-popup');
    });
});



    
