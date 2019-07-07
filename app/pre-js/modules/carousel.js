class Carousel {
    start(carouselContainerId, itemsOnPage){
        // Variables
        let carouselContainer = document.getElementById(carouselContainerId);
        const nextButton = carouselContainer.querySelector('.carousel__button--right');
        const prevButton = carouselContainer.querySelector('.carousel__button--left');


        let track = carouselContainer.querySelector('.carousel__track');
        let slides = Array.from(track.children);

        // Helpers - Dynamic width of slide
        let slideSize = slides[0].getBoundingClientRect();
        let slideWidth = slideSize.width;

        // Arrange slides next to each other
        const setSlidePosition = (slide, index) => {
            slide.style.left = (slideWidth * index)/itemsOnPage + 'px';
        };

        slides.forEach(setSlidePosition);

        // Refresh information in case wbesite size changes
        const refreshSizeInformation = ()=> {
            carouselContainer = document.getElementById(carouselContainerId);
            track = carouselContainer.querySelector('.carousel__track');
            slides = Array.from(track.children);
            slideSize = slides[0].getBoundingClientRect();
            slideWidth = slideSize.width;
            slides.forEach(setSlidePosition);
        }

        // change css origin in order to somthen the animation
        const changeTransformOrigin = (currentSlide, targetSlide, direction) =>{
            const currentSlideImage = currentSlide.children[0];
            const targetSlideImage = targetSlide.children[0];
            if(direction === 'right'){
                currentSlideImage.style.transformOrigin = "right";
                targetSlideImage.style.transformOrigin = "left";
            } else if(direction === 'left'){
                currentSlideImage.style.transformOrigin = "left";
                targetSlideImage.style.transformOrigin = "right";
            }

        }

        // Moving pictures by clicking buttons
        const moveToSlide = (track, currentSlide, targetSlide) => {
            // Refreash size information in case user resizes window
            refreshSizeInformation();

            // Move to next slide
            track.style.transform = `translateX(-${targetSlide.style.left})`;

            // Move current-slide class to next slide
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }

        //  Hide/Show arrows - controls when to hide/show arrows
        const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
            if(targetIndex ===0){
                prevButton.classList.add('is-hidden');
                nextButton.classList.remove('is-hidden');
            }else if (targetIndex === slides.length - 1){
                prevButton.classList.remove('is-hidden');
                nextButton.classList.add('is-hidden');
            } else {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.remove('is-hidden');
            }
        }

        // Next slide button
        nextButton.addEventListener('click', e=> {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide);
            changeTransformOrigin(currentSlide, nextSlide, 'right')
            moveToSlide(track, currentSlide, nextSlide);
            hideShowArrows(slides, prevButton, nextButton, nextIndex);
        })

        // Previous slide button
        prevButton.addEventListener('click', e=> {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);

            changeTransformOrigin(currentSlide, prevSlide, 'left')
            moveToSlide(track, currentSlide, prevSlide);
            hideShowArrows(slides, prevButton, nextButton, prevIndex);
            
        })

    }
}

export default Carousel;