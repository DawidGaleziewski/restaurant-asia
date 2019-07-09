// Main javascript file
    //1. import modules
    import Menu from './modules/menu.js';
    import Carousel from './modules/carousel';
    import PlayVideo from './modules/play_video';





    //2. create objects
    const menu = new Menu;
    const carousel = new Carousel;
    const playVideo = new PlayVideo;


  
    
    //3. start module
    menu.start();
    carousel.start('carousel-header-img', 1);
    carousel.start('carousel-dishes-items', 3);
    playVideo.start();
    carousel.start('carousel-about-img');

    // Important, those files will be only fetched when this code is runnin on a server
    fetch("./orders_json/order_items.json")
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            console.log(data)
        })

    