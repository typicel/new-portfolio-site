let proj_index = 0;
let projects = [
    {
        title: "My Projects", 
        
        description: "Use the arrows below to have a look at the things I've made that I think are worth sharing. Anything else that I create will be added here as well. You can also use the links to view the Github pages for each one.",
        icons: [],
        media: {
            "github":"NA",
            "site":"NA",
        }
    },
    {
        title: "Schoolweek",
        description: "A lightweight task management app built with React. Lets user keep track of assignments they have due, and syncs across devices. Data storage and authentication is handled with Firebase.",
        icons: [
            "devicon-react-original",
            "devicon-firebase-plain",
        ],
        media: {
            "github":"https://github.com/typicel/schoolweek",
            "site":"https://schoolweek.typicel.me/"
        }
    },
    {
        title: "Sticky Board",
        description: "A blank canvas that you can place sticky notes onto. Stickies are saved into local storage and can be placed anywhere on the canvas.",
        icons: [
            "devicon-react-original",
        ],
        media: {
            "github":"https://github.com/typicel/sticky-board",
            "site":"https://sticky.typicel.me/"
        }
    },
    {
        title: "Fueling Station Web Portal",
        description: "A full stack application created for my Software Development Methods course. Used to help nutritionists at CU Boulder keep track of check-ins to the athletic dining hall.",
        icons: [
            "devicon-html5-plain",
            "devicon-bootstrap-plain",
            "devicon-javascript-plain",
            "devicon-postgresql-plain",
        ],
        media: {
            "github":"NA",
            "site":"NA"
        }
    }
]

let changeHTML = (id, new_val, direction) => {
    let dir = direction === 0 ? 0 : (direction === 1 ? "50px" : "-50px");
    let ret_dir= direction === 0 ? 0 : (direction === 1 ? ["-75px", "0px"] : ["75px", "0px"]);

    anime({
        targets: `#${id}`,
        opacity: 0,
        duration: 300,
        translateX: dir,
        easing: "cubicBezier(.5, .05, .1, .3)",
        complete: () => {
            document.getElementById(id).innerHTML = new_val;
            anime({
                targets: `#${id}`,
                opacity: 1,
                duration: 300,
                translateX: ret_dir,
                easing: "cubicBezier(.5, .05, .1, .3)",
            })

        }
    })
    return;
} 

let changeIcons = (icons, direction) => {
    let dir = direction === 0 ? 0 : (direction === 1 ? "50px" : "-50px");
    let ret_dir= direction === 0 ? 0 : (direction === 1 ? ["-75px", "0px"] : ["75px", "0px"]);

    anime({
        targets: "#icon-tray",
        opacity: 0,
        duration: 300,
        translateX: dir,
        easing: "cubicBezier(.5, .05, .1, .3)",
        complete: () => {
            let tray = document.getElementById("icon-tray");
            tray.innerHTML = "";
            icons.forEach(icon => {
                let newIcon = document.createElement("i");
                newIcon.classList.add(icon);
                newIcon.classList.add("devicons");
                tray.appendChild(newIcon);
            });

            anime({
                targets: "#icon-tray",
                duration: 300,
                translateX: ret_dir,
                opacity: 1,
                easing: "cubicBezier(.5, .05, .1, .3)",
                delay: anime.stagger(200),
            });
        }
    });

}

let update_links = (links, direction) => {
    let dir = direction === 0 ? 0 : (direction === 1 ? "50px" : "-50px");
    let ret_dir= direction === 0 ? 0 : (direction === 1 ? ["-75px", "0px"] : ["75px", "0px"]);

    anime({
        targets: "#links",
        opacity: 0,
        duration: 300,
        translateX: dir,
        easing: "cubicBezier(.5, .05, .1, .3)",
        complete: () => {
            let link_parent = document.getElementById("links");
            link_parent.innerHTML = "";
            console.log("github: " + links.github);
            console.log("site: " + links.site);

            if(links.github !== "NA") {
                let newLink = document.createElement("a");
                newLink.href = links.github
                newLink.innerHTML = "View on Github";
                newLink.classList.add("link")
                link_parent.appendChild(newLink);
            }

            if(links.site !== "NA") {
                let newLink = document.createElement("a");
                newLink.href = links.site
                newLink.innerHTML = "Visit Site";
                newLink.classList.add("link")
                link_parent.appendChild(newLink);
            }


            anime({
                targets: "#links",
                opacity: 1,
                duration: 300,
                translateX: ret_dir,
                easing: "cubicBezier(.5, .05, .1, .3)",
            });
        }
    });

}

let update_project = (index, direction) => {
    proj_index = index
    let newProject = projects[proj_index];

    changeHTML("project-title", newProject.title, direction);
    changeHTML("project-description", newProject.description, direction);
    changeIcons(newProject.icons, direction);
    update_links(newProject.media, direction);


    for(let i = 0; i < document.querySelectorAll(".carousel-indicator").length; i++){
        if(i == index){
            document.querySelectorAll(".carousel-indicator")[i].classList.add("carousel-indicator-active");
        }
        else {
            document.querySelectorAll(".carousel-indicator")[i].classList.remove("carousel-indicator-active");
        }

    }
}

document.getElementById("next-project").onclick = e => {
    proj_index += 1;
    if(proj_index > projects.length-1) proj_index = 0;

    update_project(proj_index, 1);
}

document.getElementById("prev-project").onclick = e => {
    proj_index -= 1;
    if(proj_index < 0) proj_index = projects.length-1;

    update_project(proj_index, -1);
}


