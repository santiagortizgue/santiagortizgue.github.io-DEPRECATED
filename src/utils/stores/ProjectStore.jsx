import { decorate, observable, action } from 'mobx';

class ProjectStore {

    sortArrayProjects(){
        this.arrayProjects = this.arrayProjects.slice().sort(sortByYear);
        this.arrayConcepts = this.arrayConcepts.slice().sort(sortByYear);
    }

    arrayProjects = [
        {
            slides: [0, 1],
            e_logo: null,
            year: 2018,
            id: 0,
            subtitle: 'Raven',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            type: 'project',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
                name: "Nicolás Martinez",
                route: "https://www.instagram.com/nicolas26982"
            }]
        }, {
            slides: [0, 1, 2],
            e_logo: null,
            year: 2019,
            id: 1,
            subtitle: 'Vibo',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            type: 'project',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            type: 'project',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
            ],
            behance: "https://www.behance.net/gallery/88987115/Mingu",
            git: null,
            test: null,
            teammates: [{
                name: "Estefanía Montaña",
                route: "https://www.instagram.com/emonbui"
            },{
                name: "Cristian Rodriguez",
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
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            type: 'project',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            topics: [
                {
                    name: "Topic 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }, {
                    name: "Topic 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
            ],
            behance: null,
            git: null,
            test: "https://somosaurora.co",
            teammates: null
        }];

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