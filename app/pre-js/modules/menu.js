class Menu{
    start(){




        // ================//
        //  CODE SUMMARY  //
        // ==============//

        // 1 VARIABLES
            // Global variables available from all functions

        // 2 TOGGLE MOBILE NAV 
            // Toggles mobile nav when hamburger is clicked

        // 3 MOBILE LOGIC
            // adding effects and animations that should be visible only when hamburger is visible on site
        
        // 4. GET WINDOW WIDTH
            // helper fucntion for returning current width of the browser window
        
        // 5. CHOSE DESKTOP OR MOBILE LOGIC
            // chose which logic should be used.
            // Only apply the logic if it was not applied before
            // use the flag from variables to track if new logic was already applied after resizing

        // 6. RUN CODE ON WEBSITE START
            //run function CHOSE DESKTOP OR MOBILE LOGIC once to make sure one is applied
            // add event listener to window to track if new logic should be applied






        // 1 VARIABLES - START
        const maxWindthBurgerDisplays = 1019;
        const btnBurger = document.getElementById('nav-top-burger');
        const menu = document.querySelector('.nav-top .menu');
        const menuItems = document.querySelectorAll('.nav-top .menu .menu__item');
        let mobileLogicAppliedFlag = false;
        // 1 VARIABLES - END




        // 2 TOGGLE MOBILE NAV - START
        // Function needs to be availeble in this scope as desktop logic needs to be able to remove it from event listener
        const toggleMobileNav = ()=> {
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
        // 2 TOGGLE MOBILE NAV - END
        



        
        // 3 MOBILE LOGIC - START
        // mobile menu logic
        const mobileLogic = ()=> {
            btnBurger.addEventListener('click', toggleMobileNav)
            menu.addEventListener('click', toggleMobileNav)
        }
        // 3 MOBILE LOGIC - END





        const desktopLogic = ()=> {
            // Remove mobile effects on desktop
            menu.removeEventListener('click', toggleMobileNav);

            menuItems.forEach((menuItem,index)=> {
                menuItem.style.animation= '';
            });
        }

        // 4. GET WINDOW WIDTH -START
            // If device is displaying with burger menu apply logic for buttons
            // track the mobile/desktop logic so that eventListiner will be applied only once after the mode has changed
        const getWindowWidth = ()=> { return window.innerWidth};
        // 4. GET WINDOW WIDTH - END





        // 5. CHOSE DESKTOP OR MOBILE LOGIC - START
        const chooseDesktopMobileLogic = ()=> {
            if (getWindowWidth() <= maxWindthBurgerDisplays && !mobileLogicAppliedFlag ){
                // console.log('mobile logic')
                mobileLogic()
                mobileLogicAppliedFlag = true;

            } else if (getWindowWidth() >= maxWindthBurgerDisplays && mobileLogicAppliedFlag ) {
                // console.log('desktop logic')
                desktopLogic()
                mobileLogicAppliedFlag = false;
            }
        }
        // 5. CHOSE DESKTOP OR MOBILE LOGIC - END



        // 6. RUN CODE ON WEBSITE START - START
        const runMenu = ()=> {
            // run once on load so logic will apply even if user will not resize the window
            chooseDesktopMobileLogic();
            //apply diffrent logic if size changes
            window.onresize = chooseDesktopMobileLogic;
        }
        // 6. RUN CODE ON WEBSITE START - END


        runMenu();
    }
}

export default Menu;

