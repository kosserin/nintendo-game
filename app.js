const hideNavOnScroll = () =>{
    const nav = document.querySelector('nav');
    const navBackground = document.querySelector('.nav-background');
    const header = document.querySelector('header')

    window.addEventListener('scroll', () =>{
        if(window.pageYOffset > nav.clientHeight && window.matchMedia('(min-width:768px)').matches){
            nav.classList.add('hide-nav');
            navBackground.classList.remove('show-nav-background');
        } else if(window.matchMedia('(max-width:768px)').matches && window.pageYOffset > header.clientHeight){
            nav.classList.add('hide-nav');
            navBackground.classList.remove('show-nav-background');
        }
         else{
            nav.classList.remove('hide-nav');
        }

    })
}

const dropdownFunction = () =>{
    const gamesDropdownContainer = document.getElementById('games-dropdown-container');
    const gamesDropdown = document.getElementById('games-dropdown');
    const hardwareDropdown = document.getElementById('hardware-dropdown');
    const hardwareDropdownContainer = document.getElementById('hardware-dropdown-container');
    const navGamesBackground = document.querySelector('.nav-games-background');
    const navHardwareBackground = document.querySelector('.nav-hardware-background');

    gamesDropdown.addEventListener('click', () =>{
        const hardwareDropdownChevron = document.querySelector('#hardware-dropdown').firstChild.nextSibling.nextSibling;
        const chevronChange = gamesDropdown.firstChild.nextSibling.nextSibling;
        const closeButton = gamesDropdownContainer.querySelector('.fa-times');
        const secondNavRowLinks = document.querySelectorAll('.second-nav-row li');
        hardwareDropdownChevron.classList.add('fa-chevron-down');
        hardwareDropdownChevron.classList.remove('fa-chevron-up');
        navGamesBackground.classList.toggle('show-nav-background');
        navHardwareBackground.classList.remove('show-nav-background');
        hardwareDropdownContainer.classList.remove('show-dropdown');
        gamesDropdownContainer.classList.toggle('show-dropdown');
        chevronChange.classList.toggle('fa-chevron-down');
        chevronChange.classList.toggle('fa-chevron-up');
        navGamesBackground.addEventListener('click', () =>{
            gamesDropdownContainer.classList.remove('show-dropdown')
            navGamesBackground.classList.remove('show-nav-background');
            chevronChange.classList.add('fa-chevron-down');
            chevronChange.classList.remove('fa-chevron-up');
            secondNavRowLinks.forEach(link =>{
                link.classList.remove('show-link');
            })
        })
        closeButton.addEventListener('click', () =>{
            gamesDropdownContainer.classList.remove('show-dropdown');
            navGamesBackground.classList.remove('show-nav-background');
            chevronChange.classList.add('fa-chevron-down');
            chevronChange.classList.remove('fa-chevron-up');
            secondNavRowLinks.forEach(link =>{
                link.classList.remove('show-link');
            })
        })
    })
    hardwareDropdown.addEventListener('click', () =>{
        const gamesDropdownChevron = document.querySelector('#games-dropdown').firstChild.nextSibling.nextSibling;
        const secondNavRowLinks = document.querySelectorAll('.second-nav-row li');
        gamesDropdownChevron.classList.add('fa-chevron-down');
        gamesDropdownChevron.classList.remove('fa-chevron-up');
        navHardwareBackground.classList.toggle('show-nav-background');
        navGamesBackground.classList.remove('show-nav-background');
        const closeButton = hardwareDropdownContainer.querySelector('.fa-times');
        hardwareDropdownContainer.classList.toggle('show-dropdown');
        gamesDropdownContainer.classList.remove('show-dropdown');
        const chevronChange = hardwareDropdown.firstChild.nextSibling.nextSibling;
        chevronChange.classList.toggle('fa-chevron-down');
        chevronChange.classList.toggle('fa-chevron-up');
        navHardwareBackground.addEventListener('click', () =>{
            hardwareDropdownContainer.classList.remove('show-dropdown')
            navHardwareBackground.classList.remove('show-nav-background');
            chevronChange.classList.add('fa-chevron-down');
            chevronChange.classList.remove('fa-chevron-up');
                        secondNavRowLinks.forEach(link =>{
                link.classList.remove('show-link');
            })
        })
        closeButton.addEventListener('click', () =>{
            navHardwareBackground.classList.remove('show-nav-background');
            hardwareDropdownContainer.classList.remove('show-dropdown');
            chevronChange.classList.add('fa-chevron-down');
            chevronChange.classList.remove('fa-chevron-up');
                        secondNavRowLinks.forEach(link =>{
                link.classList.remove('show-link');
            })
        })
    })

}

const searchBarFunction = () =>{
    const searchBarContainer = document.querySelector('.search-bar-container');
    const closeSearchButton = document.querySelector('.search-bar-container .fa-times');
    const inputClickContainer = document.querySelector('.input-click-container');
    const searchBackground = document.querySelector('.search-background');
    const searchButtonTablet = document.querySelector('.nav-tablet li button');
    const searchButtonFromNavRight = document.querySelector('.nav-right-tablet .upper-list li button');
    const searchBackgroundFromNavRight = document.querySelector('.search-background-from-nav-right');
    
    const searchButton = () =>{
        searchBackground.classList.toggle('show-search-background');
        searchBarContainer.classList.toggle('show-search-bar-container');

        searchBackground.addEventListener('click', () =>{
            searchBackground.classList.remove('show-search-background');
            searchBarContainer.classList.remove('show-search-bar-container');
        })
    }
    inputClickContainer.addEventListener('click', () =>{
        searchButton();
    })

    searchButtonTablet.addEventListener('click', () =>{
        searchButton();
    })

    searchButtonFromNavRight.addEventListener('click', () =>{
        searchBackgroundFromNavRight.classList.add('show-search-background');
        searchBarContainer.classList.toggle('show-search-bar-container');

        searchBackgroundFromNavRight.addEventListener('click', () =>{
            searchBackgroundFromNavRight.classList.remove('show-search-background');
            searchBarContainer.classList.remove('show-search-bar-container');
        })
    })

    closeSearchButton.addEventListener('click', () =>{
        searchBarContainer.classList.remove('show-search-bar-container');
        searchBackgroundFromNavRight.classList.remove('show-search-background');
        if(window.matchMedia('(max-width:768px)').matches){
            searchBackground.classList.add('show-search-background');   
        } else{
            searchBackground.classList.remove('show-search-background');
        }
    })
}

const reduceSearchText = () =>{
    const searchText = document.querySelector('.input-click-container p');
    const inputClickContainer = document.querySelector('.input-click-container');

    if(window.matchMedia('(max-width:1024px)').matches){
        searchText.innerText = 'Search';
        inputClickContainer.style.borderBottom = 'none';
    }

}

const navSlide = () =>{
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-right-tablet');
    const searchBackground = document.querySelector('.search-background');
    const navFirst = document.querySelector('nav');
    const navBottom = document.querySelector('.nav-tablet');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('show-nav-tablet');
        burger.classList.toggle('toggle');
        searchBackground.classList.toggle('show-search-background');
        navFirst.style.zIndex = '15';
        navBottom.classList.toggle('hide-nav-bottom');

        searchBackground.addEventListener('click', ()=>{
            searchBackground.classList.remove('show-search-background');
            nav.classList.remove('show-nav-tablet');
            burger.classList.remove('toggle');
            navBottom.classList.toggle('hide-nav-bottom');
        })
    })
}

const removeSignUp = () =>{
    const liText = document.querySelector('.hide-text-on-mini a');
    if(window.matchMedia('(max-width:768px)').matches){
        liText.innerText = 'Log In';
    }
}

const tabletDropdownFunction = () =>{
    const gamesDropdownList = document.getElementById('games-tablet-dropdown');
    const gamesTag = document.getElementById('games-tablet-tag');
    const gamesChevron = document.querySelector('#games-tablet-tag a > i')
    const hardwareDropdownList = document.getElementById('hardware-tablet-dropdown');
    const hardwareTag = document.getElementById('hardware-tablet-tag');
    const hardwareChevron = document.querySelector('#hardware-tablet-tag a > i')

    gamesTag.addEventListener('click', () =>{
        gamesDropdownList.classList.toggle('show-tablet-list');
        gamesChevron.classList.toggle('fa-chevron-down');
        gamesChevron.classList.toggle('fa-chevron-up');
        hardwareChevron.classList.add('fa-chevron-down');
        hardwareChevron.classList.remove('fa-chevron-up');
        hardwareDropdownList.classList.remove('show-tablet-list')
    })

    hardwareTag.addEventListener('click', () =>{
        hardwareDropdownList.classList.toggle('show-tablet-list');
        hardwareChevron.classList.toggle('fa-chevron-down');
        hardwareChevron.classList.toggle('fa-chevron-up');
        gamesChevron.classList.add('fa-chevron-down');
        gamesChevron.classList.remove('fa-chevron-up');
        gamesDropdownList.classList.remove('show-tablet-list')
    })




    /* const tabletDropdown = document.querySelectorAll('.tablet-dropdown');
    tabletDropdown.forEach(list =>{
        list.addEventListener('click', () =>{
            list.querySelector('ul').classList.toggle('show-tablet-list');
            tabletDropdown.forEach(item=>{
                if (item!==list) {
                    item.classList.remove('show-tablet-list');
                }
            })
            list.classList.toggle('show-tablet-list');
        })
    }) */
}

const addBorderToLinks = () =>{
    const secondNavRowLinks = document.querySelectorAll('.second-nav-row li');

    secondNavRowLinks.forEach(link =>{
        link.addEventListener('click', () =>{
            secondNavRowLinks.forEach(li =>{
                if(li!==link) {
                    li.classList.remove('show-link');
                }
            })
            link.classList.toggle('show-link');
        })
    })
}

const showLinks = () =>{
    const links = document.querySelectorAll('#footer-tablet-links .link-container');
    links.forEach((link) => {
        link.addEventListener('click', () =>{
            const linkContainer = link.querySelector('.link-list');
            const arrowUp = link.querySelector('.fa-angle-up');
            const arrowDown = link.querySelector('.fa-angle-down');
                links.forEach(item =>{
                    if(item!==link){
                        if(item.firstElementChild.nextElementSibling === null){
                            return;
                        } else{
                            console.log(item.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling)
                            item.firstElementChild.nextElementSibling.classList.remove('show-link');
                            const itemArrowDown = item.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
                            const itemArrowUp = item.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
                            itemArrowUp.classList.remove('toggle-arrow-up');
                            itemArrowDown.classList.remove('toggle-arrow-down');
                        }
                    }
                })
                linkContainer.classList.toggle('show-link');
                arrowUp.classList.toggle('toggle-arrow-up');
                arrowDown.classList.toggle('toggle-arrow-down');
        })
    });
}

const otherGamesSlider = () =>{
    const games = document.querySelectorAll('#games .game-container');
    const prevBtn = document.querySelector('#games .fa-angle-left');
    const nextBtn = document.querySelector('#games .fa-angle-right');
    let translate = 0;

    nextBtn.addEventListener('click', () =>{
        if(window.matchMedia('(max-width:550px)').matches){
            translate+=95;
            console.log('fon')
            if(translate>1100){
                translate = 0;
            }
        } else if(window.matchMedia('(max-width:768px)').matches){
            translate+=98;
            console.log('tablet')
            if(translate>500){
                translate = 0;
            }
        } else {
            translate +=99; 
         if(translate > 200){
            translate = 0
        }
        }
        games.forEach(game =>{
            game.style.transform = `translateX(-${translate}vw)`;
        })
    })

    prevBtn.addEventListener('click', () =>{
        if(window.matchMedia('(max-width:550px)').matches){
            translate-=95;
            console.log('fon')
            if(translate<0){
                translate = 1045;
            }
        } else if(window.matchMedia('(max-width:768px)').matches){
            translate-=98;
            console.log('tablet')
            if(translate<0){
                translate = 490;
            }
        } else{
            translate -=100; 
        if(translate<0){
            translate = 200;
        }
        }
        games.forEach(game =>{
            game.style.transform = `translateX(-${translate}vw)`;
        })
    })
}

otherGamesSlider();
showLinks();
tabletDropdownFunction();
removeSignUp();
navSlide();
reduceSearchText();
addBorderToLinks();
searchBarFunction();
dropdownFunction();
hideNavOnScroll();