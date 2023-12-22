import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1:{
        title: "Plateforme Azure BIG DATA",
        image: projectOne,
        description: (
            <>
                <p>Application pour stocker et rechercher des images avec l'intelligence artificielle d'Azure "congnitive service"</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com"
    },
    2:{
        title: "StormFlix Electron",
        image: projectTwo,
        description: (
            <>
                <p>Application clone Netflix</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com"
    },
    3:{
        title: "RPA Monitoring des flux",
        image: projectThree,
        description: (
            <>
                <p>Project d'un processus Monitoring des flux via l'outil Blue Prism</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com"
    },
}

export default projects