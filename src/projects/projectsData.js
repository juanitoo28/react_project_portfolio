import projectOne from "../assets/projet1.png";
import projectTwo from "../assets/projet2.png";
import projectThree from "../assets/projet3.png";

const projects = {
    1:{
        title: "Projet BIG DATA",
        image: projectOne,
        description: (
            <>
                <p>Application web pour stocker et rechercher des images avec l'intelligence artificielle d'Azure "congnitive service"</p>
            </>
        ),
        github: "https://github.com/juanitoo28/Projet_azure",
        demo: "https://jeantiago.com/Video_Big_Data.mp4"
    },
    2:{
        title: "StormFlix Electron",
        image: projectTwo,
        description: (
            <>
                <p>Clonage de l'application Desktop Netflix</p>
            </>
        ),
        github: "https://github.com/juanitoo28/",
        demo: "https://jeantiago.com/StormFlix.pdf"
    },
    3:{
        title: "RPA Monitoring des flux",
        image: projectThree,
        description: (
            <>
                <p>Projet Automatisation du Processus Monitoring des flux via l'outil Blue Prism</p>
            </>
        ),
        // github: "#",
        // demo: "#"
    },
    4:{
        title: "PORTFOLIO",
        image: projectThree,
        description: (
            <>
                <p>Création du PortFolio 2024 avec React JS</p>
            </>
        ),
        github: "#",
        demo: "#"
    },
}

export default projects