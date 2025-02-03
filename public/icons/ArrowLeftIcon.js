 export const ArrowLeftIcon = () =>{
    // Crear el elemento SVG usando createElementNS
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNamespace, 'svg');
    
    // Establecer los atributos del SVG
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    
    // Crear el elemento <path> y establecer su atributo "d"
    const path = document.createElementNS(svgNamespace, 'path');
    path.setAttribute('d', 'M15 6l-6 6l6 6');
    
    // Agregar el <path> al SVG
    svg.appendChild(path);

    return svg;
}

