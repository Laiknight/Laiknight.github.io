// Projects.js

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const projects = [
        {
            image: '',
            title: 'Zombie Survival',
            description: 'This was a demo project for a zombie survival game. The game was built using Unity and C#. The concept of the game was to survive as long as possible while buying upgrades and becoming stronger.',
            date: '2024-09-26',
            link: 'https://semicolongames.itch.io/zombie-survival'
        },
        {
            image: '',
            title: 'Summer Horror',
            description: 'This was made for a game jam hosted by my friends and I. The game was created in about two days, with the theme of "Summer Horror"',
            date: '2024-06-16',
            link: 'https://semicolongames.itch.io/a-game-is-called-a-game'
        },
        {
            image:'',
            title:'Mid Ages',
            description:'Made for the 2024 TSA Video Game Design competition. The theme was high fantasy, and the game was created with a group of 3 other people. All the art was done by Nora, level design and coding by Colten and I, and voice acting/sound effects by Carson.',
            date:'2024-02-09',
            link:'https://semicolongames.itch.io/mid-ages'
        },
        {
            image:'',
            title:'Purple Duck Dress-Up',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/purple-duck-dress-up'
        },
        {
            image:'',
            title:'Backflip Battles!',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/backflip-battles'
        },
        {
            image:'',
            title:'A Pointless Existence',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/a-pointless-existence'
        },
        {
            image:'',
            title:'Shadow Day: Anger Amongst Gods',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/sdaag'
        },
        {
            image:'',
            title:'Civics Quest',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/civics-quest'
        },
        {
            image:'',
            title:'The Lamest Game',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/the-lamest-game'
        },
        {
            image:'',
            title:'Attack of the Angry Men!',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/aotam'
        },
        {
            image:'',
            title:'Unfortunite Mishap',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/unfortunite-mishap'
        },
        {
            image:'',
            title:'Cathedraphobia',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/cathedraphobia'
        },
        {
            image:'',
            title:'Bweew',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/bweew'
        },
        {
            image:'',
            title:'The Dark Hallway...',
            description:'',
            date:'',
            link:'https://semicolongames.itch.io/test-project'
        }
        // Add more project objects here
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = 'Project Image';

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = project.title;

        const expandableBox = document.createElement('div');
        expandableBox.classList.add('expandable-box');

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = project.description;

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = `Date Created: ${project.date}`;

        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = 'View Project';
        link.classList.add('project-link');
        link.target = '_blank'; // Open link in a new tab

        expandableBox.appendChild(description);
        expandableBox.appendChild(date);
        expandableBox.appendChild(link);

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

        projectDiv.appendChild(img);
        projectDiv.appendChild(title);
        projectDiv.appendChild(expandableBox);
        projectDiv.appendChild(expandBtn);

        projectsContainer.appendChild(projectDiv);
    });
});