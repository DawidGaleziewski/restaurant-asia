class Menu{
    start(){
    // check if device is mobile on load
    // const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )

        
        // mobile menu logic
        const mobileLogic = ()=> {
            const btnBurger = document.getElementById('nav-top-burger');
            const menuButtons = document.querySelectorAll('.nav-top .menu .menu__item');

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


            btnBurger.addEventListener('click', toggleMobileNav)
            
            menuButtons.forEach((button)=>{
                button.addEventListener('click', toggleMobileNav)
            })
        }

        const desktopLogic = ()=> {
            // Remove mobile effects on desktop
            const menuButtons = document.querySelectorAll('.nav-top .menu .menu__item');
            const menuItems = document.querySelectorAll('.nav-top .menu .menu__item');

            menuButtons.forEach((button)=>{
                button.eventListenerList
                // button.removeEventListener('click', toggleMobileNav);
                // need to find a way to remove event listeners only when needed and not all the time
            })

            menuItems.forEach((menuItem,index)=> {
                menuItem.style.animation= '';
            });

        }

        // If device is displaying with burger menu apply logic for buttons
        const maxWindthBurgerDisplays = 1019;
        const getWindowWidth = ()=> { return window.innerWidth};
        console.log(getWindowWidth());
        
        const chooseDesktopMobileLogic = ()=> {
            if (getWindowWidth() <= maxWindthBurgerDisplays ){
                console.log('mobile logic')
                mobileLogic()
            } else {
                console.log('desktop logic')
                desktopLogic()
            }
        }

        // run once on load so logic will apply even if user will not resize the window
        chooseDesktopMobileLogic()
        window.onresize = chooseDesktopMobileLogic;
    }
}

export default Menu;

