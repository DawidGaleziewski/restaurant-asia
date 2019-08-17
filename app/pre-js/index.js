// Main javascript file
    //1. import modules
    import Menu from './modules/menu.js';
    import Carousel from './modules/carousel';
    import PlayVideo from './modules/play_video';
    import FetchJson from './modules/fetch_orders/fetch_json';
    import FilterOrders from './modules/fetch_orders/filter_orders';





    //2. create objects
    const menu = new Menu;
    const carousel = new Carousel;
    const playVideo = new PlayVideo;
    const fetchJson = new FetchJson;
    const filterOrders = new FilterOrders;


    
    //3. start module
    menu.start();
    carousel.start('carousel-header-img', 1);
    carousel.start('carousel-dishes-items', 3);
    playVideo.start();
    carousel.start('carousel-about-img');
    fetchJson.start();
    filterOrders.start();
    carousel.start('carousel-testimonial', 1);



    