import { decorate, observable, action } from 'mobx';

class ProjectStore {

    sortArrayProjects(){
        this.arrayProjects = this.arrayProjects.slice().sort(sortByOrder);
    }

    arrayProjects = [
        {
            order: 1,
            id: 0,
            name: 'Raven',
            type: 'default',
            goal: 'Evaluate the effects of sound, tactile and visual stimuli in gamified learning environments.',
            about: "An application for learning Japanese (Kanji) was developed, in which different Kanji were projected that the user should follow according to the system he was questioning. In the memorization process, the platform sent visual, sound and tactile stimuli to guide the user, before a final test without guides.",
            topics: [
                {
                    name: "Make a decision",
                    text: "The stimuli within the platform will help you choose the right Kanji, to keep your way in the forest."
                }, {
                    name: "Users tested it",
                    text: "Experience shows that users are more influenced by visual and sound stimuli."
                }, {
                    name: "Research",
                    text: "Audio-tactile priming to guide information recall in edutainment (2019)."
                }
            ],
            behance: "https://www.behance.net/gallery/73144851/Raven",
            git: null,
            test: null,
            build: [8, 10, 11, 18]
        }, {
            order: 0,
            id: 1,
            name: 'Vibo',
            type: 'default',
            goal: 'For the course "Proyecto Integrador ll" we were asked for a solution that simplifies the collection, analysis and visualization of data in a newsroom or in a research environment.',
            about: "Vibo is a platform that allows improving information management for journalists, researchers or editors. In addition, it allows data visualization of these investigations.",
            topics: [
                {
                    name: "Organize",
                    text: "Always keep control of your resources (projects, folders, files). Vibo offers you an easy system of organization and search."
                }, {
                    name: "Share",
                    text: "Add collaborators to the different projects you require, and you can even assign specific tasks to managers."
                }, {
                    name: "Chat",
                    text: "Communicate quickly with your work team at any time."
                }
            ],
            behance: "https://www.behance.net/gallery/88983583/Vibo",
            git: "https://github.com/PIntegrador/nm-app",
            test: null,
            build: [5, 6, 7, 12, 20]
        }, {
            order: 2,
            id: 2,
            name: 'Mingu',
            type: 'default',
            goal: 'Presenting Mingu, a network connected app that try to make easier a conversation for people, through a collaborative game experience.',
            about: "A web app and a mobile app throughout the rethinking of the classic charades game is made.",
            topics: [
                {
                    name: "New Charades!",
                    text: "This app was created thinking that today millennials give preference to the development of virtual experiences over those given in the real world, generating that they neglect their close social environment, that is, that they move away from the people around them."
                }, {
                    name: "Topic 2",
                    text: "And taking into account, that some of the most important people for them and with whom they have the greatest contact are their friends."
                }, {
                    name: "People Love it!",
                    text: "The solution system generates a positive experience in the individuals, it is perceived as nice and funny."
                }
            ],
            behance: "https://www.behance.net/gallery/88987115/Mingu",
            git: null,
            test: null,
            build: [8, 10, 11, 18]
        },{
        order: 3,
        id: 3,
        name: 'LOGON',
        type: 'coming',
        goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        topics: [
            {
                name: "Topic 1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            }, {
                name: "Topic 2",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            }, {
                name: "Topic 3",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            }
        ],
        behance: "",
        git: "https://github.com/SantiagoOrtiz0630/final-sti",
        test: "https://dashboard.heroku.com/apps/final-sti",
        build: [4, 5, 12, 20]
        },{
    order: 4,
    id: 4,
    name: 'InnReality',
    type: 'coming',
    goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    topics: [
        {
            name: "Topic 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }, {
            name: "Topic 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }, {
            name: "Topic 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
    ],
    behance: "",
    git: "",
    test: "",
    build: []
}];

    getProjectById(index) {
        let project = this.arrayProjects.find(elem => elem.id === index);
        //console.log(project);
        return project;
    }
}

function sortByOrder(a, b){
    return a.order - b.order;
}

decorate(ProjectStore, {
    arrayProjects: observable,
    getProjectById: action,
    sortArrayProjects: action
});

export default ProjectStore;