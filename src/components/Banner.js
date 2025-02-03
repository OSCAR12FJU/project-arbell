import imgBanner1 from '../../public/images/banners/destock/banner-destock-1.jpg';
import imgBanner2 from '../../public/images/banners/destock/banner-destock-2.jpg';
import imgBanner3 from '../../public/images/banners/destock/banner-destock-3.jpg';
import imgBanner1Movile from '../../public/images/banners/movile/banner-movile-1.jpg';
import imgBanner2Movile from '../../public/images/banners/movile/banner-movile-2.jpg';
import imgBanner3Movile from '../../public/images/banners/movile/banner-movile-3.jpg';
import {ArrowLeftIcon} from '../../public/icons/ArrowLeftIcon.js';
import {ArrowRightIcon} from '../../public/icons/ArrowRightIcon.js';




const Banner = () =>{
    const imgDestock = [
        imgBanner1,
        imgBanner2,
        imgBanner3
    ];
    const imgMovile = [
        imgBanner1Movile,
        imgBanner2Movile,
        imgBanner3Movile
    ];

    let currentIndex = 0;
    let interval;

    //Seccion del banner
    const sectionBanner = document.createElement('section');
    sectionBanner.className = "position-relative d-flex align-items-center  justify-content-center"
    sectionBanner.style.backgroundImage = `url(${imgDestock[currentIndex]})`;
    sectionBanner.style.backgroundSize= "cover";
    sectionBanner.style.backgroundPosition= "center";
    sectionBanner.style.backgroundRepeat= "no-repeat";
    sectionBanner.style.backgroundBlendMode= "multiply";
    sectionBanner.style.minHeight= "100vh";
    sectionBanner.style.transition= "background-image 1s ease-in-out";
    sectionBanner.setAttribute("data-images", JSON.stringify({ destock: imgDestock, movile: imgMovile }));

    // Función para actualizar la imagen del banner según el tamaño de pantalla
    const updateBannerImage = () => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const images = JSON.parse(sectionBanner.getAttribute("data-images"));
        const selectedImages = isMobile ? images.movile : images.destock;
        sectionBanner.style.backgroundImage = `url(${selectedImages[currentIndex]})`;
    };

    // Llamar a la función inicialmente y en cambios de tamaño de pantalla
    updateBannerImage();
    window.addEventListener("resize", updateBannerImage)

    // indicadores del carrusel
    const indicatorLeft = document.createElement('button');
    indicatorLeft.className = 'position-absolute top-50 start-0 d-flex align-items-center justify-content-center z-3 px-4'
    indicatorLeft.style.border = 'none';
    indicatorLeft.style.background = 'none';

    const spanLeft = document.createElement('span');
    spanLeft.className='d-inline-flex align-items-center justify-content-center rounded-circle bg-white bg-opacity-30 hover-bg-opacity-50'
    spanLeft.style.width = '40px';
    spanLeft.style.height = '40px';
    
    const indicatorRight = document.createElement('button');
    indicatorRight.className = 'position-absolute top-50 end-0 d-flex align-items-center justify-content-center z-3 px-4'
    indicatorRight.style.border = 'none';
    indicatorRight.style.background = 'none';


    const spanRight = document.createElement('span');
    spanRight.className='d-inline-flex align-items-center justify-content-center rounded-circle bg-white bg-opacity-30 hover-bg-opacity-50'
    spanRight.style.width = '40px';
    spanRight.style.height = '40px';


    const arrowLeft = ArrowLeftIcon();
    const arrowRight = ArrowRightIcon();

    //estructuramos los componentes
    spanLeft.appendChild(arrowLeft);
    indicatorLeft.appendChild(spanLeft);

    spanRight.appendChild(arrowRight);
    indicatorRight.appendChild(spanRight);

    sectionBanner.appendChild(indicatorLeft); 
    sectionBanner.appendChild(indicatorRight); 
    //Funcion para que se vayan cambiando las imagenes automaticamente
    const startAutoSlide = () => {
        clearInterval(interval); 
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % imgDestock.length;
            updateBannerImage();
        }, 5000); 
    };

    //Eventos click para cambiar la imagen
    indicatorRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imgDestock.length; 
        updateBannerImage();
    });

    indicatorLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imgDestock.length) % imgDestock.length; 
        updateBannerImage();
    });

    startAutoSlide();

    return sectionBanner;
}

export default Banner;