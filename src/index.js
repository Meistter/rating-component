const ratingButton = document.querySelectorAll('.rating-element')
const submitButton = document.querySelector('.submit-button')
const ratingContent= document.querySelector('.rating-content')
const thanksContent= document.querySelector('.thanks-content')
const numberSelection = document.getElementById('numberSelection')
var ratingSelected = 0 || null

ratingButton.forEach((element) => {
    element.addEventListener('click', () => {
        ratingButton.forEach((el) => el.classList.remove('ratingHover'));
        element.classList.add('ratingHover');
        const ratingContent = element.querySelector('p')
        ratingSelected = ratingContent.textContent;
        submitButton.classList.remove('disabled')
    });
});

submitButton.addEventListener('click',()=>{
    if (ratingSelected){
        ratingContent.classList.add('inactive')
        thanksContent.classList.remove('inactive')
        numberSelection.innerHTML = `You selected ${ratingSelected} out of 5`
    }
})