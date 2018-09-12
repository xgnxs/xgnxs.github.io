
function activateGallery() {
    //let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo > img");

    thumbnails.forEach(function(thumbnail){
        thumbnail.addEventListener("click", function(){
            // set clicked image as main image
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.alt);

            // change which image is current
            let currentClass = "current";
            document.querySelector(".current").classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            // update image info
            // use # to access a CSS ID
            // use . to access a CSS class
            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}