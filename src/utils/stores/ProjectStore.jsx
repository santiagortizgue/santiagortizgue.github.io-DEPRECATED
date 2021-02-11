import { decorate, observable, action } from 'mobx';

class ProjectStore {

    constructor(db, storage){
        this.db = db;
        this.storage = storage;
    }

    sortArrayProjects(){
        this.arrayProjects = this.arrayProjects.slice().sort(sortByYear);
        this.arrayConcepts = this.arrayConcepts.slice().sort(sortByYear);
    }

    arrayProjects = [];

    getProjectsFromDB(){
        
    }


    getProjectById(index) {
        let project = this.arrayProjects.find(elem => elem.id === index);
        //console.log(project);
        return project;
    }

    arrayConcepts = [];

    getConceptsById(index){
        let concept = this.arrayConcepts.find(elem => elem.id === index);
        //console.log(concept);
        return concept;
    }

    arrayResearch = [{
        id: 0,
        year: "2018 - 2019",
        name: "Audio-tactile priming to guide information recall in edutainment",
        link: "https://ieeexplore.ieee.org/document/9212866"
    },{
        id: 1,
        year: "2019",
        name: "Thesis (In coming)",
        link: null
    }];
}

function sortByYear(a, b){
    return b.year - a.year;
}

decorate(ProjectStore, {
    arrayProjects: observable,
    arrayConcepts: observable,
    arrayResearch: observable,
    getProjectById: action,
    getConceptsById: action,
    sortArrayProjects: action
});

export default ProjectStore;

/*
arrayProjects = [
    {
        slides: [0, 1],
        e_logo: null,
        year: 2018,
        id: 0,
        subtitle: 'Raven',
        title: 'Audio-Tactile Priming to Guide Information Recall in Edutainment',
        type: 'project',
        role: 'Application Developer & Scenario artist.',
        about: "This project is a research for evaluating the effects of stimuli in people perception and learning. In this case, a game experience was designed for learning Kanji from japanese language.",
        topics: [
            {
                name: "Goal",
                text: "Evaluate the effects of sound, tactile and visual stimuli in gamified learning environments."
            }, {
                name: "50%",
                text: "As expected, the visual stimuli managed to guide users and generate positive effects on their learning. Additionally, 40% of users followed auditory stimuli, leaving only 10% for tactile stimuli."
            }, {
                name: "For the Future",
                text: "During the investigation, an interesting hypothesis emerged: Probably, the followed stimuli by the users was related with their personality. This was found in a qualitative analysis of the user tests."
            }
        ],
        behance: "https://www.behance.net/gallery/73144851/Raven",
        git: null,
        test: 'https://ieeexplore.ieee.org/document/9212866',
        teammates: [{
            name: "Valentina Moreno",
            route: "https://www.instagram.com/soymore___"
        },{
            name: "Sebastián Restrepo",
            route: "https://www.instagram.com/seb.rq"
        },{
            name: "Nicolás Martínez",
            route: "https://www.instagram.com/nicolas26982"
        }]
    }, {
        slides: [0, 1, 2],
        e_logo: null,
        year: 2019,
        id: 1,
        subtitle: 'Vibo',
        title: 'Editing, Visualization and Storage data as a design challenge.',
        type: 'project',
        role: 'Front-End Developer.',
        about: "DataPico, a data visualization company from Cali, proposed a challenge for the ‘Integrator Project’ class. This consisted in the creation of a portal where journalists, researchers and editors could store and present the information for their press articles or virtual newspaper pages.",
        topics: [
            {
                name: "Determinants",
                text: "For the development of journalistic and informative content, the ux team found it is determinant that the system allows: collaborative work, adaptable interfaces to different user roles and data visualization."
            }, {
                name: "Technology",
                text: "To achieve this, it was essential to develop the application using web programming languages, powered by React."
            }, {
                name: "Challenge",
                text: "Adopting the Scrum methodology to optimize communication between the UX, UI and development team, in order to build a solution in an ‘agile’ and efficient way."
            }
        ],
        behance: "https://www.behance.net/gallery/88983583/Vibo",
        git: "https://github.com/PIntegrador/nm-app",
        test: null,
        teammates: null
    }, {
        slides: [0, 1],
        e_logo: null,
        year: 2018,
        id: 2,
        subtitle: 'Mingu',
        title: 'Enhance your friendship through a game experience.',
        type: 'project',
        role: 'Desktop App Developer & User Interface Designer.',
        about: "Despite the human need to socialize, nowadays we found ourselves separated. The sociocultural context we are exposed to, changes our way to behave and how we build relationships. This project tries to find a way in which through the incorporation of an experience in the daily activities, the friendships can be boosted using a popular game with changes in their experiences that boost the connection between individuals.",
        topics: [
            {
                name: "Research",
                text: "The team focused on finding elements that promote friendship, generate distances, existing patterns of friendship and the importance of intimacy in interpersonal relationships."
            }, {
                name: "Key Findings",
                text: "We found that although the lack of contact does not break friendship, it causes negative effects in the trust between them. Also, we learned the importance of trust on the number of short-term encounters."
            }, {
                name: "Results",
                text: "The solution system generates a positive experience in the individuals. It’d be interesting to integrate new interactions that implies removing tactile controllers, such as voice & movement recognition."
            }
        ],
        behance: "https://www.behance.net/gallery/88987115/Mingu",
        git: null,
        test: null,
        teammates: [{
            name: "Estefanía Montaña",
            route: "https://www.instagram.com/emonbui"
        },{
            name: "Cristian Rodríguez",
            route: "https://www.instagram.com/candiescense"
        }]
    }, {
        slides: [0, 1, 2, 3, 4],
        e_logo: {
            url: 'https://weareangular.com',
            logo: 'angular.svg'
        },
        year: 2020,
        id: 3,
        subtitle: 'Aurora',
        title: 'Changing Latam through online education & technology.',
        type: 'project',
        role: 'User Interface Designer.',
        about: "Aurora was born from the belief of power to change Latin America through the integration of technology and education. Recognized as a Full Education Company, it is focused on technical training and education. It is a web platform that allows people to acquire new skills and job skills, to stand out in a more competitive future.",
        topics: [
            {
                name: "Look and Feel",
                text: "According to UX requirements & the brand manual, the web application that will train Latin American workers was built from a clean, friendly and modern design."
            }, {
                name: "5 minutes Experience",
                text: "I worked with a team with more than 5 years of experience in interaction design and user research. They know that Colombian workers do not have a lot of free time in their workday, which requires a quick and easily accessible learning experience. Therefore, the platform's MVP was built with interaction patterns aligned to these educational requirements."
            }
        ],
        behance: null,
        git: null,
        test: "https://somosaurora.co",
        teammates: null
}];*/