// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    }
    });
});

// Close other details when one is opened
document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', () => {
    if (detail.open) {
        document.querySelectorAll('details').forEach(other => {
        if (other !== detail) other.open = false;
        });
    }
    });
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    const container = button.closest('.portfolio-content');

    container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    container.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    button.classList.add('active');
    container.querySelector(`#${tabId}`).classList.add('active');
    });
});

// Image Data
const imageFolders = {
    safety: [
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2170.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2170.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2190.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2190.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2251.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2251.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2345.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2345.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2383.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2383.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2384.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2384.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2385.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2385.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2443.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2443.jpg' },
        { src: './SiteAssets/Media_Library/safety-professional/IMG_2513.jpg', link: './SiteAssets/Media_Library/safety-professional/IMG_2513.jpg' }
    ],

    //this is for any of my video projects and photos of the setup that I use when recording in the studio
    videography: [
        { src: './SiteAssets/Media_Library/videography/fall_protect-vid-thumb.png', link: 'https://drive.google.com/file/d/1PdwcIh2Vso-7GFgw8wT-szGz9lNHbEGu/view?usp=drive_link' },
        { src: './SiteAssets/Media_Library/videography/risktree_reporting-vid-thumb.png', link: 'https://drive.google.com/file/d/1PdwcIh2Vso-7GFgw8wT-szGz9lNHbEGu/view?usp=drive_link' },
        { src: './SiteAssets/Media_Library/videography/portacount-vid-thumb.png', link: 'https://drive.google.com/file/d/16-wMdFw24yrH85-RCd-JWRzuOz7xwbI5/view?usp=drive_link' },
        { src: './SiteAssets/Media_Library/videography/utv-vid-thumb.png', link: 'https://drive.google.com/file/d/1RiDlIFk_gY4u0gCYmhyYxg-72jbQEFlt/view?usp=drive_link' },
        { src: './SiteAssets/Media_Library/videography/safety_awareness-vid-thumb.png', link: 'https://drive.google.com/file/d/1mUtsR0iBIhI2ur-zThaFWvC9xaMVyO3S/view?usp=drive_link' },
        { src: './SiteAssets/Media_Library/videography/ra_nearmiss-vid-thumb.png', link: 'https://drive.google.com/file/d/1l5sfB1befpYn7DTblnsH67k2xqzbQ6pB/view?usp=drive_link' },
        { src: './SiteAssets/Media_Library/videography/ra_equipment_trailervideo-vid-thumb.png', link: 'https://drive.google.com/file/d/1ewBlr1HNlQVgv_ycr5eBHY-EthgwxXhj/view?usp=drive_link' }
    ],

    //this is for any graphic design that was 100% me
    graphic: [
        { src: './SiteAssets/Media_Library/graphic-design/thumb-RA-ALLGreen-ICON.jpg', link: './SiteAssets/Media_Library/graphic-design/thumb-RA-ALLGreen-ICON.jpg' },
        { src: './SiteAssets/Media_Library/graphic-design/GorgeCrewLogo4.0.jpg', link: './SiteAssets/Media_Library/graphic-design/GorgeCrewLogo4.0.jpg' },
        { src: './SiteAssets/Media_Library/graphic-design/Final-SawyerLogo2.0_green_.png', link: './SiteAssets/Media_Library/graphic-design/Final-SawyerLogo2.0_green_.png' },
        { src: './SiteAssets/Media_Library/graphic-design/Certcardtemplate_with-icon-examples-_Page_1.png', link: './SiteAssets/Media_Library/graphic-design/Certcardtemplate_with-icon-examples-_Page_1.png' },
        { src: './SiteAssets/Media_Library/graphic-design/Certcardtemplate_with-icon-examples-_Page_2.png', link: './SiteAssets/Media_Library/graphic-design/Certcardtemplate_with-icon-examples-_Page_2.png' },
        { src: './SiteAssets/Media_Library/graphic-design/PedalForParks2024-01.png', link: './SiteAssets/Media_Library/graphic-design/PedalForParks2024-01.png' },
        { src: './SiteAssets/Media_Library/graphic-design/PedalForParks2025-01.png', link: './SiteAssets/Media_Library/graphic-design/PedalForParks2025-01.png' },
        { src: './SiteAssets/Media_Library/graphic-design/UTV-QuestionsCard.png', link: './SiteAssets/Media_Library/graphic-design/UTV-QuestionsCard.png' },
        { src: './SiteAssets/Media_Library/graphic-design/OPRHP_Statewide_Safety_Map_V.2.3_Redacted.jpg', link: './SiteAssets/Media_Library/graphic-design/OPRHP_Statewide_Safety_Map_V.2.3_Redacted.jpg' },
        { src: './SiteAssets/Media_Library/graphic-design/2022Lifeguard-poster.jpg', link: './SiteAssets/Media_Library/graphic-design/2022Lifeguard-poster.jpg' },
        { src: './SiteAssets/Media_Library/graphic-design/Egress_Plan2.0_Location1.png', link: './SiteAssets/Media_Library/graphic-design/Egress_Plan2.0_Location1.png' }
    ],

    //this is for form design
    graphic2: [
        { src: './SiteAssets/Media_Library/form-design/form1.jpg', link: './SiteAssets/Media_Library/form-design/form1.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_02.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_02.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_03.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_03.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_04.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_04.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_05.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_05.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_06.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_06.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_07.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_07.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_08.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_08.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_09.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_09.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_10.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_10.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_11.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_11.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_12.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_12.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_13.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_13.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_14.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_14.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_15.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_15.jpg' },
        { src: './SiteAssets/Media_Library/form-design/Binder1_Page_16.jpg', link: './SiteAssets/Media_Library/form-design/Binder1_Page_16.jpg' }
    ],


    //this is for professional headshots, nature photography, and photos of my photo studio setups
    photography: [
        { src: './SiteAssets/Media_Library/photography/mobile_prof-headshots.jpg', link: './SiteAssets/Media_Library/photography/mobile_prof-headshots.jpg' },
        { src: './SiteAssets/Media_Library/photography/compressed-B-lis.jpg', link: 'https://drive.google.com/file/d/1piqxhNB6mSxtS6CHiRfyO6riGFN9ZwAm/' },
        { src: './SiteAssets/Media_Library/photography/Flower2.png', link: './SiteAssets/Media_Library/photography/Flower2.png' },
        { src: './SiteAssets/Media_Library/photography/Andrew_Chouinard.jpg', link: 'https://drive.google.com/file/d/1SzfbA2XYng8pdLiayaiZsLdf-xNT4oT6/view?usp=sharing' },
        { src: './SiteAssets/Media_Library/photography/IMG_2383.jpg', link: './SiteAssets/Media_Library/videography/IMG_2383.jpg' },
        { src: './SiteAssets/Media_Library/photography/GroundFoliage.jpg', link: 'https://drive.google.com/file/d/1vDCB2CYhUPQu62RxSb7aaJKWWqLiRr6S/view?usp=sharing' },
        { src: './SiteAssets/Media_Library/photography/BlueSpruce_Bough-IMG_0121_edited.jpg', link: './SiteAssets/Media_Library/photography/BlueSpruce_Bough-IMG_0121_edited.jpg' }
    ]
};

// Fallback for broken images
function handleImageError(img) {
    img.onerror = null;
    img.src = './SiteAssets/Media_Library/placeholder.png';
    img.alt = 'Image not available';
}

// Initialize Carousels
document.querySelectorAll('.carousel').forEach(carousel => {
    const folder = carousel.getAttribute('data-folder');
    const images = imageFolders[folder] || [];

    images.forEach(image => {
    const imgElement = document.createElement('a');
    if (image.link) { imgElement.href = image.link; imgElement.target = '_blank'; }
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = `${folder} project image`;
    img.onerror = () => handleImageError(img);
    imgElement.appendChild(img);
    carousel.appendChild(imgElement);
    });

    if (images.length > 0) initializeCarousel(carousel);
});

// Carousel Navigation
function initializeCarousel(carousel) {
    const leftArrow = carousel.parentElement.querySelector('.carousel-arrow.left');
    const rightArrow = carousel.parentElement.querySelector('.carousel-arrow.right');
    const items = carousel.querySelectorAll('a');
    let currentIndex = 0;

    function scrollToIndex(index) {
    items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    rightArrow.addEventListener('click', () => {
    const maxIndex = items.length - 1;
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    scrollToIndex(currentIndex);
    });

    leftArrow.addEventListener('click', () => {
    const maxIndex = items.length - 1;
    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    scrollToIndex(currentIndex);
    });

    carousel.addEventListener('scroll', () => {
    let index = Math.round(carousel.scrollLeft / items[0].offsetWidth);
    currentIndex = Math.min(index, items.length - 1);
    });
}