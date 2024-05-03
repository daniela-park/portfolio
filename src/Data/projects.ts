import Project from "../Models/Project"
import MarsMissionImg from "../assets/MarsMission.png"
import PhotoViewerImg from "../assets/PhotoViewerDarker.png"
import BusBoardImg from "../assets/BusBoard.png"
import BakeryImg from "../assets/Bakery.png"
import WhatsForDinnerImg from "../assets/WhatsForDinner.png"
import PokemonpediaImg from "../assets/Pokemonpedia.png"

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
        name: "__Dani's Bakery__",
        description: "A website created in C# through MVC",
        image: BakeryImg,
        link: "#",
    },
    {
        name: "__What's for Dinner?__",
        description: "An application that generates random dishes",
        image: WhatsForDinnerImg,
        link: "https://daniela-park.github.io/WhatsForDinner/",
    },
    {
        name: "__Pokemonpedia__",
        description: "A website that displays Pokemon data",
        image: PokemonpediaImg,
        link: "https://daniela-park.github.io/Pokemonpedia/",
    },
    /*
    {
        name: "__Bookish__",
        description: "A website created in C# through MVC",
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
