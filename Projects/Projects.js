// Projects.js

document.addEventListener('DOMContentLoaded', () => {
    const currentProjectsContainer = document.getElementById('current-projects');
    const gameDevProjectsContainer = document.getElementById('game-dev-projects');
    const softwareDevProjectsContainer = document.getElementById('software-dev-projects');
    const videoProjectsContainer = document.getElementById('video-projects');
    const photographyProjectsContainer = document.getElementById('photography-projects');
    const miscProjectsContainer = document.getElementById('misc-projects');
    
    const gameDevProjects = [
        {
            image: 'Images/Game_Development/ZS.png',
            title: 'Zombie Survival',
            description: 'This was a demo project for a zombie survival game. The game was built using Unity and C#. The concept of the game was to survive as long as possible while buying upgrades and becoming stronger.',
            date: '2024-09-26',
            link: 'https://semicolongames.itch.io/zombie-survival'
        },
        {
            image: 'Images/Game_Development/SH.png',
            title: 'Summer Horror',
            description: 'This was made for a game jam hosted by my friends and I. The game was created in about two days, with the theme of "Summer Horror"',
            date: '2024-06-16',
            link: 'https://semicolongames.itch.io/a-game-is-called-a-game'
        },
        {
            image: 'Images/Game_Development/PB.png',
            title: 'Package Boys',
            description: 'Package Boys was the first VR game dev project that I had ever made. It was created for my Game Development class in 2024, with my good friend Colten. This project required a bunch of research and various other strategies to get it complete, but it was a lot of fun to make, even if it ended up incomplete.',
            date: '2024-05-13',
        },
        {
            image:'Images/Game_Development/MA.png',
            title:'Mid Ages',
            description:'Made for the 2024 TSA Video Game Design competition. The theme was high fantasy, and the game was created with a group of 3 other people. All the art was done by Nora, level design and coding by Colten and I, and voice acting/sound effects by Carson.',
            date:'2024-02-09',
            link:'https://semicolongames.itch.io/mid-ages'
        },
        {
            image:'Images/Game_Development/PDDU.png',
            title:'Purple Duck Dress-Up',
            description:'Purple Duck Dress-Up was made in about 6 hours for fun. The idea of the game was just to dress up the duck like many other dress-up games. It was a lot of fun to make, and very basic.',
            date:'2024-01-11',
            link:'https://semicolongames.itch.io/purple-duck-dress-up'
        },
        {
            image:'Images/Game_Development/BB.png',
            title:'Backflip Battles!',
            description:'Backflip Battles! was a game made in about four hours. The idea of the game was to do backflips faster than your opponent. You start by pressing space, and then the key that it tells you to press.',
            date:'2024-01-10',
            link:'https://semicolongames.itch.io/backflip-battles'
        },
        {
            image:'Images/Game_Development/APE.png',
            title:'A Pointless Existence',
            description:'There wasn\'t anything crazy about this game, it was simply just a walking simulator. There wasn\'t any goal, or anything to do. It was just a game to walk around and look at the scenery.',
            date:'2023-12-28',
            link:'https://semicolongames.itch.io/a-pointless-existence'
        },
        {
            image:'Images/Game_Development/SDAAG.png',
            title:'Shadow Day: Anger Amongst Gods',
            description:'Shadow Day is a day where middle schoolers can visit the FTTC\'s computer science academy. This game was made in 48 hours with my friend Colten, and then presented to the middle schoolers.',
            date:'2023-12-04',
            link:'https://semicolongames.itch.io/sdaag'
        },
        {
            image:'Images/Game_Development/CQ.png',
            title:'Civics Quest',
            description:'Civics quest was made for some congressional video game challenge. The game had a long time span to be created, but it was put on the back burner due to other projects. It was made in about a day, and then submitted.',
            date:'2023-11-30',
            link:'https://semicolongames.itch.io/civics-quest'
        },
        {
            image:'Images/Game_Development/TLG.png',
            title:'The Lamest Game',
            description:'With the permission of my teacher, this game was created. The game was made in about 2 days, for a project called "The Lame Game" I had liked the name of that, and asked my teacher for permission to make a game that was even lamer than the one he suggested. Thus, The Lamest Game was born!',
            date:'2023-11-18',
            link:'https://semicolongames.itch.io/the-lamest-game'
        },
        {
            image:'Images/Game_Development/AOTAM.png',
            title:'Attack of the Angry Men!',
            description:'Attack of the Angry Men was swiftly created in one day for fun. It served as a proof of concept of a top down shooting game that I had planned to originally make. I made the game extremely difficult and spread it across my peers to see who could survive the longest.',
            date:'2023-07-19',
            link:'https://semicolongames.itch.io/aotam'
        },
        {
            image:'Images/Game_Development/UM.png',
            title:'Unfortunite Mishap',
            description:'This game was created for the TSA Video Game Development competition. It was the first ever multiplayer game ever created by Colten and I, leading to a lot of issues, but it was still fun to create. The concept of the game is that you see your friends camera, and have to tell them what directions to take so that they can continue.',
            date:'2023-03-23',
            link:'https://semicolongames.itch.io/unfortunite-mishap'
        },
        {
            image:'Images/Game_Development/CATH.png',
            title:'Cathedraphobia',
            description:'Cathedraphobia is a horror game made in a week for the Brackeys Game Jam. It was a lot of fun to make with Colten, and we learned a lot about game development.',
            date:'2022-02-27',
            link:'https://semicolongames.itch.io/cathedraphobia'
        },
        {
            image:'Images/Game_Development/BWEEW.png',
            title:'Bweew',
            description:'This was one of the largest games I had ever created, following many different tutorials online, I learned a bunch of new things about Unity\'s framework. There isn\'t much to do in the game itself, but it was still a lot of fun to program and make.',
            date:'2022-02-04',
            link:'https://semicolongames.itch.io/bweew'
        },
        {
            image:'Images/Game_Development/TDH.png',
            title:'The Dark Hallway...',
            description:'The Dark Hallway was literally, as the title entails, a very dark hallway. This game had a huge overarching story on paper, but it was never actually added into the game, and after learning some new things about Unity, the game was later scrapped.',
            date:'2021-12-14',
            link:'https://semicolongames.itch.io/test-project'
        }
        // Add more project objects here
    ];

    const softwareDevProjects = [
        {
            image: 'Images/Software_Development/BULL.png',
            title: 'Bulletin',
            description: 'Bulletin is a platform meant to help for schedule planning and organization. It is being created for the 2024 Congressional App Challenge and TSA Software Development competition. The app is being created with a group of 3 other people, Luis, our server developer, Colten, our Android developer, and Nora, our UI/UX developer.',
            date: '',
            link: 'https://github.com/sneakyturtle2007/Bulletin'
        },
        {
            image: 'Images/Software_Development/LMR.png',
            title: 'Local Market Radar',
            description: 'Local Market Radar was a project meant for the TSA software development competition. It placed 3rd in state, and was meant for local stores to upload their inventory to a database, and for customers to search for items in their area.',
            date: '2024-02-09',
            link: 'https://github.com/sneakyturtle2007/Local_Market_Radar'
        }
    ];

    const videoProjects = [
        {
            videoEmbed: '\Videos\Intro.mp4',
            title: 'Living Machines',
            description: 'A video essay over Living Machines.',
            date: ''
        },
        {
            videoEmbed: 'https://www.youtube.com/embed/CTBnr3IT1yI',
            title: 'Bulletin Congressional App Challenge Video',
            description: 'The recording of the actual video was done in the parking lot of the school, with all editing done by me, and the voice over being done by Luis.',
            date: '2024-10-24'
        },
        {
            videoEmbed: 'https://youtube.com/embed/CDwGQsru8e0?si=CMWPCVbJrLDI22Gz',
            title: 'Procedural Animation Test',
            description: 'This video shows off the first ever attempt I had put into make a procedural animation. I put a lot of research into figuring out how to program it, and it was a lot of fun to make, but also very challenging.',
            date: '2024-05-21'
        },
        {
            videoEmbed: 'https://youtube.com/embed/ptW3YMpdZPI?si=ps2MjMA7DTxYOloI',
            title: 'Package Boys Cinematic Trailer',
            description: 'This was the best trailer for the game. Starring your developers, Colten and Lai!',
            date: '2024-05-14'
        },
        {
            videoEmbed: 'https://youtube.com/embed/0B7e4k2TtKI?si=FjkASvDTziI40p6w',
            title: 'TSA On Demand Video',
            description: 'This video was made to compete locally against other On Demand Video groups at my local school, for the opportunity to compete at the state level.',
            date: '2024-02-25'
        },      
        {
            videoEmbed: 'https://youtube.com/embed/rxsDSrjlJjA?si=R2W3M3G9_5itofzx',
            title: 'Shadow Day: Cinematic Trailer',
            description: 'This was a trailer for the game Shadow Day: Anger Amongst Gods. The video was made last minute with Colten\'s cousin Noah. All credits at the end except for Colten and I were fake names.',
            date: '2023-12-03'
        },   
    ];

    const photographyProjects = [
        {
            image: '',
            title: '',
            description: '',
            date: '',
            link: ''
        }
    ];

    const miscProjects = [
        {
            image: '',
            title: '',
            description: '',
            date: '',
            link: ''
        }
    ];

    function createProjectElement(project, isVideoProject = false) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        if (isVideoProject) {
            const iframe = document.createElement('iframe');
            iframe.src = project.videoEmbed;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            projectDiv.appendChild(iframe);
        } else {
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = 'Project Image';
            projectDiv.appendChild(img);
        }

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = project.title;

        const expandableBox = document.createElement('div');
        expandableBox.classList.add('expandable-box');

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = project.description;

        if(project.date != '') {

            var date = document.createElement('p');
            date.classList.add('date');
            date.textContent = `Date Created: ${project.date}`;
        } else {
            var date = document.createElement('p');
        }

        expandableBox.appendChild(description);
        expandableBox.appendChild(date);

        if (!isVideoProject && project.link) {
            const link = document.createElement('a');
            link.href = project.link;
            link.textContent = 'View Project';
            link.classList.add('project-link');
            link.target = '_blank'; // Open link in a new tab
            expandableBox.appendChild(link);
        }

        const expandBtn = document.createElement('button');
        expandBtn.classList.add('expand-btn');
        expandBtn.textContent = 'Expand';

        expandBtn.addEventListener('click', () => {
            if (expandableBox.style.display === 'none' || expandableBox.style.display === '') {
                expandableBox.style.display = 'block';
                expandBtn.textContent = 'Collapse';
            } else {
                expandableBox.style.display = 'none';
                expandBtn.textContent = 'Expand';
            }
        });

        projectDiv.appendChild(title);
        projectDiv.appendChild(expandableBox);
        projectDiv.appendChild(expandBtn);

        return projectDiv;
    }

    function appendProjects(container, projects, isVideoProject = false) {
        projects.forEach(project => {
            if(project.date == '' && currentProjects && currentProjectsContainer)
            {
                currentProjectsContainer.appendChild(createProjectElement(project, isVideoProject));
            }
            const projectElement = createProjectElement(project, isVideoProject);
            container.appendChild(projectElement);
        });
    }

    appendProjects(gameDevProjectsContainer, gameDevProjects);
    appendProjects(softwareDevProjectsContainer, softwareDevProjects);
    appendProjects(videoProjectsContainer, videoProjects, true);
    /* appendProjects(photographyProjectsContainer, photographyProjects);
    appendProjects(miscProjectsContainer, miscProjects); */

    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);
            if (targetContainer.style.display === 'none' || targetContainer.style.display === '') {
                targetContainer.style.display = 'grid';
            } else {
                targetContainer.style.display = 'none';
            }
        });
    });
});