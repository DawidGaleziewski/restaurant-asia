// Main javascript file
    //1. import modules
    import Menu from './modules/menu.js';
    import Carousel from './modules/carousel';





    //2. create objects
    const menu = new Menu;
    const carousel = new Carousel;


  
    
    //3. start module
    menu.start();
    carousel.start('carousel-header-img', 1);
    carousel.start('carousel-dishes-items', 3);

    