import Banner from "./Banner";
import { SideBar } from "./SideBar";

export function MainContent() {
    //contenedor del main
    const mainContent = document.createElement('main');
    mainContent.className = 'main-content-banner';
    //importamos el baner
    const sectionBanner = Banner();
    const sideBar = SideBar()
    sideBar.style.height = '100vh';
    sideBar.style.zIndex = '1000'; 
    //estructuramos todo el main 
    mainContent.appendChild(sectionBanner);
    mainContent.appendChild(sideBar);


    return mainContent;
}