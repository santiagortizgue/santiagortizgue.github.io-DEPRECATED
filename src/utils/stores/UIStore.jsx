import { decorate, observable, action } from 'mobx';

class UIStore {

    /** Home */

    arrayWhatProfile = [{
        id: 0,
        data: 'Product Design & Development'
    }];

    arrayWhatOther = [{
        id: 0,
        data: 'Front-End Development'
    }, {
        id: 1,
        data: 'User Experience Design'
    }, {
        id: 2,
        data: 'User Interface Design'
    }];

    selectWhat(i) {
        this.arrayWhat.forEach(what => {
            what.selected = false;
        });
        this.arrayWhat[i].selected = true;
    }

    actualLink = 0;

    arrayLink = [{
        link: "/",
        name: "home",
        id: 0
    }, {
        link: "/about",
        name: "about",
        id: 1
    }, {
        link: "/projects",
        name: "projects",
        id: 2
    }, {
        link: "/contact",
        name: "contact",
        id: 3
    }];

    /* Menu */

    displayMenu = false;

    setDisplayMenu(value) {
        this.displayMenu = value;
    }

    /** Contact */
    email = 'santiagortizgue@gmail.com';

    /** About **/

    idActualInfo = 0;
    typeSkill = 'skill';
    typeTalent = 'talent';

    arrayInfo = [{
        name: 'UI Design',
        id: 0,
        type: 'skill',
        data: "According to people's needs, I create attractive design systems & patterns to develop applications."
    }, {
        name: 'Web Development',
        id: 1,
        type: 'skill',
        data: "Then, build these interactions with the best practices. I'm always learning new frameworks."
    }, {
        name: 'Prototyping',
        id: 2,
        type: 'skill',
        data: "Co-creation with users is always essential when I’m making design concepts & user experience ideas."
    },{
        name: 'UX Design',
        id: 3,
        type: 'skill',
        data: "Empathy with people makes me imagine the best way users can interact with digital experiences."
    },{
        name: 'Photography',
        id: 4,
        type: 'skill',
        data: "Seeing the world through a lens helps me stimulate my creativity."
    }, {
        name: 'Creativity',
        id: 5,
        type: 'talent',
        data: "Constantly observing what surrounds me holistically, allows me to strengthen my work generating new ideas."
    }, {
        name: 'Problem Solving',
        id: 6,
        type: 'talent',
        data: "Using research through design to find solutions for people's challenges, complexities & needs."
    }, {
        name: 'Results Orientation',
        id: 7,
        type: 'talent',
        data: "Constantly remembering the objective and goals, allows my work to satisfy the required guidelines."
    }, {
        name: 'Teamwork',
        id: 8,
        type: 'talent',
        data: "Working with my colleagues to achieve the objectives. I find my place to strengthen the work of my workmates."
    }]

    actualInfo = this.arrayInfo[this.idActualInfo];

    changeInfoHandler(i) {
        this.idActualInfo = i;
        this.actualInfo = this.arrayInfo[this.idActualInfo];
    }

    /** EndFunction **/
}

decorate(UIStore, {
    email: observable,
    arrayWhat: observable,
    selectWhat: action,
    actualLink: observable,
    arrayLink: observable,
    displayMenu: observable,
    setDisplayMenu: action,
    idActualInfo: observable,
    typeSkill: observable,
    typeTalent: observable,
    arrayInfo: observable,
    actualInfo: observable,
    changeInfoHandler: action
});

export default UIStore;