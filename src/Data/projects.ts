import Project from "../Models/Project"
import MarsMissionImg from "../assets/MarsMission.png"
import PhotoViewerImg from "../assets/PhotoViewerDarker.png"
import BusBoardImg from "../assets/BusBoard.png"
import GirraphicImg from "../assets/GirraphicTablet.png"
import BakeryImg from "../assets/Bakery.png"
import WhatsForDinnerImg from "../assets/WhatsForDinner.png"
import PokemonpediaImg from "../assets/Pokemonpedia.png"
import JavaThreadsImg from "../assets/JavaThreads.jpg"

export const projects: Project[] = [
    {
        name: "__Mars Mission__",
        description: "A web-application based on NASA's API",
        image: MarsMissionImg,
        link: "https://daniela-park.github.io/mars-mission/",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "https://github.com/daniela-park/mars-mission"
    },
    {
        name: "__Photo Viewer__",
        description: "A web-based application to visualise images",
        image: PhotoViewerImg,
        link: "https://daniela-park.github.io/PhotoViewer/",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "https://github.com/daniela-park/PhotoViewer"
    },
    {
        name: "__Bus Board__",
        description: "A web-application based on TfL's API",
        image: BusBoardImg,
        link: "https://daniela-park.github.io/BusBoard/",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "https://github.com/daniela-park/BusBoard"
    },
    {
        name: "__Marathon Results__",
        description: "A React app displaying marathon results",
        image: GirraphicImg,
        link: "https://daniela-park.github.io/Girraphic/",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "https://github.com/daniela-park/Girraphic"
    },
    {
        name: "__Dani's Bakery__",
        description: "A website created in C# through MVC",
        image: BakeryImg,
        link: "https://dpbakery.azurewebsites.net/",
        stacks: "C#, HTML, CSS",
        repository: "#"
    },
    {
        name: "__What's for Dinner?__",
        description: "An application that generates random dishes",
        image: WhatsForDinnerImg,
        link: "https://daniela-park.github.io/WhatsForDinner/",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "https://github.com/daniela-park/WhatsForDinner"
    },
    {
        name: "__Pokemonpedia__",
        description: "A website that displays Pokemon data",
        image: PokemonpediaImg,
        link: "https://daniela-park.github.io/Pokemonpedia/",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "https://github.com/daniela-park/Pokemonpedia"
    },
    {
        name: "__Java Threads__",
        description: "Multithreading in Java",
        image: JavaThreadsImg,
        link: "https://github.com/daniela-park/JavaThreads",
        stacks: "Java",
        repository: "https://github.com/daniela-park/JavaThreads"
    },
    /*
    {
        name: "__Bookish__",
        description: "A website created in C# through MVC",
        image: "",
        link: "#",
        stacks: "C#, HTML, CSS",
        repository: "#"
    },
    {
        name: "__MyFace__",
        description: "A social media platform",
        image: "",
        link: "#",
        stacks: "JavaScript, React, HTML, CSS",
        repository: "#"
    },
    */
]
