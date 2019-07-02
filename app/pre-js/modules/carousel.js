class Carousel {
    start(){
        // Variables
        const track = document.querySelector('.carousel__track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel__button--right');
        const prevButton = document.querySelector('.carousel__button--left');

        // Helpers - Dynamic width of slide
        const slideSize = slides[0].getBoundingClientRect();
        const slideWidth = slideSize.width;

        // Arrange slides next to each other
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        // Moving pictures by clicking buttons
        const moveToSlide = (track, currentSlide, targetSlide) => {
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

            moveToSlide(track, currentSlide, nextSlide);
            hideShowArrows(slides, prevButton, nextButton, nextIndex);
        })

        // Previous slide button
        prevButton.addEventListener('click', e=> {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);

            moveToSlide(track, currentSlide, prevSlide);
            hideShowArrows(slides, prevButton, nextButton, prevIndex);
        })

    }
}

export default Carousel;