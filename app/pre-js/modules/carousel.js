class Carousel {
    start(){
        // Variables
        const track = document.querySelector('.carousel__track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel__button--right');
        const prevButton = document.querySelector('.carousel__button--left');
        const dotsNav = document.querySelector('.carousel__nav');
        const dots = Array.from(dotsNav.children);

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

        // Update indicator dots in the bottom
        const updateDots = (currentDot, targetDot) =>{
            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');
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
            const currentDot = dotsNav.querySelector('.current-slide');
            const nextDot = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide);

            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            hideShowArrows(slides, prevButton, nextButton, nextIndex);
        })

        // Previous slide button
        prevButton.addEventListener('click', e=> {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const prevDot = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);

            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            hideShowArrows(slides, prevButton, nextButton, prevIndex);
        })

        // Adding possiblity to move to slide on dot click
        dotsNav.addEventListener('click', e => {
            // Target will return what element was clicked
                // we use closest to not overload page when we click something that is not dot
            const targetDot = e.target.closest('button');

            // continue the code only if one of the dots was clicked
            if(!targetDot) return;

            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-slide');
            // Find index of dot that is same as the clicked dot
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            // console.log(targetIndex);
            const targetSlide = slides[targetIndex];

            // Move to the target slide
            moveToSlide(track, currentSlide, targetSlide);

            updateDots(currentDot, targetDot);
            hideShowArrows(slides, prevButton, nextButton, targetIndex)
        })

    }
}

export default Carousel;