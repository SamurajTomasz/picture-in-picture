const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/

async function mediaStream(){
    try{
        const media = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = media;
        videoElement.onloadeddata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("Error here: ", error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

mediaStream();