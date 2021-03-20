const contact_btn = document.querySelector('.contact-btn');
const close_btn = document.querySelector('.close-btn');
const social_media_container = document.querySelector('.social-media-container');

contact_btn.addEventListener('click', () => {
	social_media_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_media_container.classList.remove('visible')
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registered Failed");
        console.log(error);
    });
}