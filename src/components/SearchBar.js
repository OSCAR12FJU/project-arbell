import SearchIcon from '../../public/images/SearchIcon.png'
import '../style.css'

export const SearchBar = () =>{
  // Crear el contenedor del Icono
  const divContainerIcon = document.createElement("div");
  divContainerIcon.className = "position-absolute top-0 bottom-0 end-0 d-flex align-items-center pe-3";

  // Crear el icono de búsqueda (puedes reemplazarlo con un SVG o FontAwesome)
  const searchIcon = document.createElement("img");
  searchIcon.src = SearchIcon;
  searchIcon.style.width = "30px";
  searchIcon.style.height = "30px";

  divContainerIcon.appendChild(searchIcon);

  // Crear el input
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control w-100 py-2 px-3 fs-6 text-dark transition bg-white placeholder-light";
  input.style.borderRadius="20px"
  input.style.border="none"
  input.placeholder = "¿QUÉ ESTÁS BUSCANDO?";

  // Evento para detectar cambios en el input
  input.addEventListener("input", (event) => {
    console.log("Texto ingresado:", event.target.value);
  });

  //Contenedor de todo el SearchBar
  const containSearchBar = document.createElement('div');
  containSearchBar.className='position-relative d-none d-md-flex flex-grow-1';
  containSearchBar.style.maxWidth = "768px";

  containSearchBar.appendChild(input)
  containSearchBar.appendChild(divContainerIcon)


  return containSearchBar;

}