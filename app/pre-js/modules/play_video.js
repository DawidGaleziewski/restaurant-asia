class PlayVideo {
    start(){
        const playVideoBtn =  document.getElementById('play-video-button');
        // console.log(playVideoBtn)

        playVideoBtn.addEventListener('click', ()=>{
            const section = document.querySelector('.video-presentation')
            const videoPlayInformation = document.querySelector('.video-play');
            const youtubeVideo = document.querySelector('.youtube-video');
            console.log(youtubeVideo)

            // Hide information in front of iframe
            videoPlayInformation.style.display = "none";
        
            // Show iframe that will play video
            youtubeVideo.style.display="block";

            // Start playing on click
            youtubeVideo.src = youtubeVideo.src + '?autoplay=1'

        })
    }
}

export default PlayVideo;