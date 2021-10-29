const hoverButtons = document.querySelectorAll('.animated-button');

hoverButtons.forEach(button =>{
    button.addEventListener('mouseover', () =>{
        button.classList.add('animate__animated','animate__bounce');
    })

    button.addEventListener('mouseout', () =>{
        button.classList.remove('animate__animated','animate__bounce');
    })
})

const lightBox = () =>{
const firstContainer = document.querySelector('.first-container');
const secondContainer = document.querySelector('.second-container');
const prevBtn = document.querySelector('.fa-caret-left');
const nextBtn = document.querySelector('.fa-caret-right');
const firstDot = document.querySelector('.first-dot');
const secondDot = document.querySelector('.second-dot');

let counter = 0;
firstDot.classList.add('active');
secondDot.classList.remove('active');

const addFirstDotRemoveSecond = () =>{
    firstDot.classList.add('active');
    secondDot.classList.remove('active');
}

const removeFirstDotAddSecond = () =>{
    firstDot.classList.remove('active');
    secondDot.classList.add('active');
}

const moveToFirstContainer = () =>{
    firstContainer.style.left = '0%';
    secondContainer.style.left = '100%';
}

const moveToSecondContainer = () =>{
    firstContainer.style.left = '-100%';
    secondContainer.style.left = '0%';
}

const counterFunction = () => {
    if(counter === 0){
       moveToFirstContainer();
        addFirstDotRemoveSecond();
    } else if(counter === 1){
        moveToSecondContainer();
        removeFirstDotAddSecond();
    } else if(counter<= -1){
        counter = 1;
        moveToSecondContainer();
        removeFirstDotAddSecond();
    } else if(counter>= 2){
        counter = 0;
        moveToFirstContainer();
        addFirstDotRemoveSecond();
    }
}

prevBtn.addEventListener('click', () =>{
    counter--;
    counterFunction();
})
nextBtn.addEventListener('click', () =>{
    counter++;
    counterFunction();
})

firstDot.addEventListener('click', () =>{
    counter = 0;
    moveToFirstContainer();
    addFirstDotRemoveSecond();
})

secondDot.addEventListener('click', () =>{
    counter = 1;
    moveToSecondContainer();
    removeFirstDotAddSecond();
})

}

const lightboxModal = () =>{
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.querySelector('#lightbox-modal img');
    const prevBtn = document.querySelector('#lightbox-modal .fa-caret-left');
    const nextBtn = document.querySelector('#lightbox-modal .fa-caret-right');
    const images = document.querySelectorAll('.screenshot-container img');
    let globalIndex = 0;

    images.forEach((image,index) =>{
        image.addEventListener('click', () =>{
            modal.classList.add('show-modal');
            modalImg.src = `${imagesArray[index]}`;
            globalIndex = index;
        })
    })

    prevBtn.addEventListener('click', () =>{
        globalIndex--;
        if(globalIndex<0){
            globalIndex = imagesArray.length-1;
            modalImg.src = `${imagesArray[globalIndex]}`;
        } else{
            modalImg.src = `${imagesArray[globalIndex]}`;
        }
    })

    nextBtn.addEventListener('click', () =>{
        globalIndex++;
        if(globalIndex>imagesArray.length-1){
            globalIndex = 0;
            modalImg.src = `${imagesArray[globalIndex]}`;
        } else{
            modalImg.src = `${imagesArray[globalIndex]}`;
        }
    })

    modal.addEventListener('click', e =>{
        if(e.target.id == modal.id){
            modal.classList.remove('show-modal');
        }
    })
    
    const imagesArray = ['./assets/screenshot01.jpg',
     './assets/screenshot02.jpg', 
     './assets/screenshot03.jpg',
     './assets/screenshot04.jpg',
     './assets/screenshot05.jpg',
     './assets/screenshot06.jpg'];


    
}

lightboxModal();
lightBox();