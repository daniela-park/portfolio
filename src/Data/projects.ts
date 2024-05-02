import Project from "../Models/Project"
import MarsMissionImg from "../Assets/MarsMission.png"
import PhotoViewerImg from "../Assets/PhotoViewerDarker.png"
import BusBoardImg from "../Assets/BusBoard.png"
import PokemonpediaImg from "../Assets/Pokemonpedia.png"

export const projects: Project[] = [
    {
        name: "__Mars Mission__",
        description: "A web-application based on NASA's API",
        image: MarsMissionImg,
        link: "https://daniela-park.github.io/mars-mission/",
    },
    {
        name: "__Photo Viewer__",
        description: "A web-based application to visualise images",
        image: PhotoViewerImg,
        link: "https://daniela-park.github.io/PhotoViewer/",
    },
    {
        name: "__Bus Board__",
        description: "A web-application based on TfL's API",
        image: BusBoardImg,
        link: "https://daniela-park.github.io/BusBoard/",
    },
    {
        name: "__Pokemonpedia__",
        description: "A website that displays Pokemon data",
        image: PokemonpediaImg,
        link: "https://daniela-park.github.io/Pokemonpedia/",
    },
    /*
    {
        name: "__Dani's Bakery__",
        description: "A website connected to a database in C#",
        image: "",
        link: "#",
    },
    {
        name: "__MyFace__",
        description: "A social media platform",
        image: "",
        link: "#",
    },
    */
]
