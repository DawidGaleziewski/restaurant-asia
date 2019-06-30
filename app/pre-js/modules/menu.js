class Menu{
    start(){
    // check if device is mobile on load
    const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )

        // If device is mobile run rest of the code
        if(isMobile) {
            const btnBurger = document.getElementById('nav-top-burger');
            const menuButtons = document.querySelectorAll('.menu__item');

            const toggleMobileNav = ()=> {
                const menu = document.getElementById('nav-menu');
                const menuItems = document.querySelectorAll('.menu .menu__item');
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


            btnBurger.addEventListener('click', ()=> { 
                toggleMobileNav()
            })
            
            menuButtons.forEach((button)=>{
                button.addEventListener('click', ()=> {
                    toggleMobileNav()
                })
            })
        }
    }
}

export default Menu;

