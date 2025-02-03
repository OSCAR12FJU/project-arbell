import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

export function App (){
    const app = document.getElementById('app');
    app.className= 'w-100';

    app.appendChild(Header());
    app.appendChild(MainContent());

}