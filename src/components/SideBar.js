import { SearchBar } from "./SearchBar";
import '../style.css'
import { CloseIcon } from "../../public/icons/CloseIcon";

export const SideBar = () =>{
    //Sidebar
    const sideBar = document.createElement('div');
    sideBar.className = 'sidebar position-fixed top-0 end-0  vh-100 overflow-auto shadow-lg w-100 w-md-50 transition ';
    sideBar.style.background = '#F5F5F5';
    sideBar.style.transition = "transform 0.5s ease-in-out";  
    //contenedor del sidebar
    const containSidebar = document.createElement('div');
    containSidebar.className = 'pt-2 px-4 transition duration-500';
    //Icono de cerrar
    const span = document.createElement('span')
    span.className="text-lg font-md text-dark"
    const closeICon = CloseIcon();
    closeICon.style.cursor = 'pointer'
    span.appendChild(closeICon);

    //Contenedor del buscador
    const containSearchBar = document.createElement('div') 
    const searchBar = SearchBar();
    searchBar.className = 'py-3';

    // Agregar el manejador del evento onClick al span (el ícono de cerrar)
    span.addEventListener('click', () => {
        sideBar.classList.remove('open'); 
    });

    // estructuramos todo el componente
    containSearchBar.appendChild(searchBar);
    containSearchBar.className = 'position-relative';

    containSidebar.appendChild(span);
    containSidebar.appendChild(containSearchBar);
    sideBar.appendChild(containSidebar);


    return sideBar;
}