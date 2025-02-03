import LogoArbell from '../../public/images/LogoArbell.png'
import { SearchBar } from './SearchBar';
import UserIcon from '../../public/images/UserIcon.png'
import PouchIcon from '../../public/images/PouchIcon.png'
import HamburIcon from '../../public/images/HamburIcon.png'
import { ContainCentral } from './ContainCentral';

export function Header() {
    const header = document.createElement('header');
    header.className = 'header d-flex justify-content-center align-items-center';
    header.style.background = '#F5F5F5';

    // creamos logo
    const logoArbell = document.createElement('img');
    logoArbell.src = LogoArbell;
    logoArbell.style.width = "70px";

    // Insertamos el SearchBar
    const searchBar = SearchBar();

    // tercera parte de los iconos
    const containIcons = document.createElement('div');
    containIcons.className = 'd-flex justify-content-center align-items-center gap-2 md-gap-3';

    const userIcon = document.createElement('img');
    userIcon.src = UserIcon;
    userIcon.style.cursor='pointer'
    userIcon.style.width = "40px";

    // contenedor de icono cart
    const containCart = document.createElement('div');
    containCart.className = 'position-relative';
    containCart.style.cursor='pointer'

    // componente contador del cart
    const contentCounter = document.createElement('div');
    contentCounter.className = 'position-absolute d-flex align-items-center justify-content-center text-xs fw-bold rounded-circle text-dark';
    contentCounter.style.background = '#32AAF6';
    contentCounter.style.width = '1rem';
    contentCounter.style.height = '1rem';
    contentCounter.style.fontSize = '0.75rem';
    contentCounter.style.top = '0.70rem';
    contentCounter.style.left = '-0.5rem'; 
    contentCounter.innerHTML = "2";

    //Creamos el icono de hamburguer
    const hamburIcon = document.createElement('img');
    hamburIcon.src = HamburIcon;
    hamburIcon.style.cursor= 'pointer';
    hamburIcon.style.width = "40px";

    hamburIcon.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.add('open'); // Muestra el sidebar
    });

    //Creamos el icono de la bolsa
    const pouchIcon = document.createElement('img');
    pouchIcon.src = PouchIcon;
    pouchIcon.style.width = "40px";

    // Montamos el componente bolsa con el contador
    containCart.appendChild(contentCounter);
    containCart.appendChild(pouchIcon);

    containIcons.appendChild(containCart);
    containIcons.appendChild(userIcon);
    containIcons.appendChild(hamburIcon);

    // Contenedor Central
    const containCentral = ContainCentral({ className: "d-flex justify-content-between align-items-center w-100 py-2" });

    containCentral.appendChild(logoArbell);
    containCentral.appendChild(searchBar);
    containCentral.appendChild(containIcons);

    header.appendChild(containCentral);

    return header;
}