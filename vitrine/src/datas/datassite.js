/*Mocked datas for the employee array*/
import reservia from '../assets/reservia.png'
import argentbank from '../assets/argentBankLogo.png'
import billed from '../assets/billed.jpg'
import fisheye from '../assets/fisheye.png'
import hrnet from '../assets/hrnet.jpg'
import kasa from '../assets/kasa.jpg'
import learnathome from '../assets/learnathome.png'
import lespetitsplats from '../assets/lespetitsplats.jpg'
import ohmyfood from '../assets/ohmyfood.png'
import vitrine from '../assets/vitrine.png'


const sites = [
    {
        id: "1",
        name: "Reservia",
        image: reservia,
        title: "The first",
        technos: "HTML, CSS, responsive",
        description: "Toute première page ever. Site statique sous Flexbox, avec ajout d'images, liens, ancres, et input text",
        link: "https://lberthaut.github.io/Reservia/",
        repolink: "https://github.com/lberthaut/Reservia"
    },
    {
        id: "2",
        name: "Oh My Food !",
        image: ohmyfood,
        title: "De l'art d'animer",
        technos: "HTML, CSS, SCSS, responsive",
        description: "Loading spinner à l'arrivée du site. Les boutons sont dynamiques au survol, ainsi que les coeurs. Les restaurants amènent à leurs menus. Une animation des plats se fait au chargement de la page, et une autre au survol des plats",
        link: "https://lberthaut.github.io/Ohmyfood/",
        repolink: "https://github.com/lberthaut/Ohmyfood"
    },
    {
        id: "3",
        name: "Fish eye",
        image: fisheye,
        title: "Photos à gogo !",
        technos: "HTML, CSS, JS, responsive",
        description: "Choix des photographes par tag, sur l'accueil. Sur la page d'un photographe, diaporama au clic sur une photo, et controlable au clavier. Incrémentation des likes et ouverture d'une modal via le bouton de contact",
        link: "https://lberthaut.github.io/Fisheye/",
        repolink: "https://github.com/lberthaut/Fisheye"
    },
    {
        id: "4",
        name: "Les petits plats",
        image: lespetitsplats,
        title: "Que voulez vous manger ?",
        technos: "HTML, CSS, JS",
        description: "Recherches asynchrones via la barre de recherche, et via les éléments des dropdowns. 2 branchs ont étés crées pour 2 algorithmes différents. Tests de performances via la console : console.log('motàrechercher', nbre) - nbre correspondant aux nombres d'executions à faire",
        link: "https://lberthaut.github.io/Lespetitsplats/",
        repolink: "https://github.com/lberthaut/Lespetitsplats"
    },
    {
        id: "5",
        name: "Billed",
        image: billed,
        title: "The cake is a Lie",
        technos: "JS, Jest",
        description: "Recherche et résolutions de bugs sur un code legacy. Ajouts de tests d'intégrations Jest et test End To End (respectivement 'src/__tests__' et 'test E2E/')",
        link: "",
        repolink: "https://github.com/lberthaut/Billed"
    },
    {
        id: "6",
        name: "Learn At Home",
        image: learnathome,
        title: "Etude de projet",
        technos: "Diagramme de cas d'usage, user stories, Figma",
        description: "Etude d'un projet web. Maquette figma des différentes pages du site ainsi que les user stories et les diagrammes de cas d'usage du site",
        link: "https://www.figma.com/file/ouTRtNfOegWQMe4EGmgxQd/Learn%40Home?node-id=0%3A1",
        repolink: "https://github.com/lberthaut/learnathome"
    },
    {
        id: "7",
        name: "Kasa",
        image: kasa,
        title: "Everywhere, at Home",
        technos: "HTML, CSS, JS, React, responsive",
        description: "Décomposition des pages en différents composants React. Pages des appartements avec diaporama et dropdowns",
        link: "https://lberthaut.github.io/projetkasa/",
        repolink: "https://github.com/lberthaut/projetkasa"
    },
    {
        id: "9",
        name: "ArgentBank",
        image: argentbank,
        title: "On s'occupe de tout",
        technos: "HTML, CSS, JS, Redux, responsive",
        description: "Authentification par token, récupération par requête GET des informations, puis modifications des informations utilisateurs par requête POST. Stockage des informations dans le store Redux. Le serveur Mongo n'étant plus accessible, vous ne pourrez tester les fonctionnalités, mais j'ai laissé le code dans le repository ('src/services/fetch')",
        link: "https://lberthaut.github.io/argentbank/",
        repolink: "https://github.com/lberthaut/argentbank"
    },
    {
        id: "10",
        name: "Wealth Health",
        image: hrnet,
        title: "Logiciel interne RH",
        technos: "HTML, CSS, JS, React",
        description: "Migration d'un site Jquery en React. Stockage des informations du formulaire dans le state, puis affichage du state dans un autre composant ('Employees List'). Rapports de performances Lighthouse entre la version legacy et la version React",
        link: "https://lberthaut.github.io/hrnetreact",
        repolink: "https://github.com/lberthaut/hrnetreact"
    },
    {
        id: "11",
        name: "La vitrine de Louis",
        image: vitrine,
        title: "Infinite Loop",
        technos: "HTML, CSS, JS, React, responsive",
        description: "Site Vitrine de mes projets web Openclassrooms . En construction et modification, petit à petit",
        link: "https://lberthaut.github.io/pfolio",
        repolink: "https://github.com/lberthaut/pfolio"
    }
];

export default sites;
