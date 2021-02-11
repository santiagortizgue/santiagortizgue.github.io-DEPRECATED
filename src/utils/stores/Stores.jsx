import { createContext } from 'react';
import UIStore from './UIStore';
import ProjectStore from './ProjectStore';
import AuthStore from './AuthStore';

// Initialize Firebase
import { db, auth, storage } from './fbConfig';

const uiStore = new UIStore();
const projectStore = new ProjectStore(db, storage);
const authStore = new AuthStore(auth);

projectStore.sortArrayProjects();

export default createContext({
    uiStore,
    projectStore,
    authStore
});