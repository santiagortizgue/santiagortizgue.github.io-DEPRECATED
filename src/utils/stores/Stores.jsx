import { createContext } from 'react';
import UIStore from './UIStore';
import ProjectStore from './ProjectStore';

const uiStore = new UIStore();
const projectStore = new ProjectStore();

export default createContext({
    uiStore,
    projectStore,
});