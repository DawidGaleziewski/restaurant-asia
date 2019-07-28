class Menu{
    start(){


    const btnBurger = document.getElementById('nav-top-burger');
    const menu = document.querySelector('.nav-top .menu');
    const menuItems = document.querySelectorAll('.nav-top .menu .menu__item');

    const toggleMobileNav = ()=> {
        const menu = document.getElementById('nav-menu');
        const menuItems = document.querySelectorAll('.nav-top .menu .menu__item');
        menu.classList.toggle('toggle-mobile-nav');
        btnBurger.classList.toggle('menu-mobile__burger--toggled');
        menuItems.forEach((menuItem,index)=> {
            if(menuItem.style.animation){
                menuItem.style.animation= '';
            } else{
                menuItem.style.animation = `linkFading 0.5s ease forwards ${index /7 + 1}s`;
            }
        });

    }
        
        // mobile menu logic
        const mobileLogic = ()=> {
            btnBurger.addEventListener('click', toggleMobileNav)
            menu.addEventListener('click', toggleMobileNav)


        }

        const desktopLogic = ()=> {
            // Remove mobile effects on desktop
            menu.removeEventListener('click', toggleMobileNav);

            menuItems.forEach((menuItem,index)=> {
                menuItem.style.animation= '';
            });

        }

        // If device is displaying with burger menu apply logic for buttons
        // track the mobile/desktop logic so that eventListiner will be applied only once after the mode has changed
        let mobileLogicAppliedFlag = false;
        const maxWindthBurgerDisplays = 1019;
        const getWindowWidth = ()=> { return window.innerWidth};
        console.log(getWindowWidth());
        
        const chooseDesktopMobileLogic = ()=> {
            if (getWindowWidth() <= maxWindthBurgerDisplays && !mobileLogicAppliedFlag ){
                console.log('mobile logic')
                mobileLogic()
                mobileLogicAppliedFlag = true;

            } else if (getWindowWidth() >= maxWindthBurgerDisplays && mobileLogicAppliedFlag ) {
                console.log('desktop logic')
                desktopLogic()
                mobileLogicAppliedFlag = false;
            }
        }

        // run once on load so logic will apply even if user will not resize the window
        chooseDesktopMobileLogic();
        //apply diffrent logic if size changes
        window.onresize = chooseDesktopMobileLogic;
    }
}

export default Menu;

