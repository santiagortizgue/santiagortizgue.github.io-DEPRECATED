import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import Store from '../../utils/stores/Stores';

import './ProjectView.scss';

const ProjectView = (props) => {
    const stores = useContext(Store);
    let id = parseInt(props.match.params.id);
    const [data] = useState(stores.projectStore.getProjectById(id));

    //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    stores.uiStore.actualLink = 4;

    return (
        <div className="ProjectView">

            <div className="ProjectView-header">
                <Fade timeout={1250} right>
                    <img className="ProjectView-Logo" src={`./img/projects/${data.id}/header.png`} alt="project header" />
                </Fade>
            </div>

            <Fade delay={250} timeout={1250} left>
                <div className="ProjectView-about">
                    <h3>About</h3>
                    <p>{data.about}</p>
                </div>
            </Fade>

            <Fade timeout={1250} delay={500}>
                <img className="ProjectView-wireframes" src={`./img/projects/${data.id}/context.png`} alt="project wireframes" />
            </Fade>

            <Fade timeout={1250} top>
                <div className="ProjectView-goal">
                    <h3>Goal</h3>
                    <p>{data.goal}</p>
                </div>
            </Fade>
           
            <div className="ProjectView-topic">

                <Fade timeout={1250} left>
                    <div className="ProjectView-topicInfo">
                        <h3>{data.topics[0].name}</h3>
                        <p>{data.topics[0].text}</p>
                    </div>
                </Fade>

                <Fade timeout={1250} right>
                    <img className="ProjectView-topicImg" src={`./img/projects/${data.id}/topic_0.png`} alt="project topic" />
                </Fade>
            </div>

            <div className="ProjectView-topic">

                <Fade timeout={1250} left>
                    <img className="ProjectView-topicImg" src={`./img/projects/${data.id}/topic_1.png`} alt="project topic" />
                </Fade>

                <Fade timeout={1250} right>
                    <div className="ProjectView-topicInfo2">
                        <h3>{data.topics[1].name}</h3>
                        <p>{data.topics[1].text}</p>
                    </div>
                </Fade>
            </div>

            <div className="ProjectView-topic">

                <Fade timeout={1250} left>
                    <div className="ProjectView-topicInfo">
                        <h3>{data.topics[2].name}</h3>
                        <p>{data.topics[2].text}</p>
                    </div>
                </Fade>

                <Fade timeout={1250} right>
                    <img className="ProjectView-topicImg" src={`./img/projects/${data.id}/topic_2.png`} alt="project topic" />
                </Fade>
            </div>

            <h3 className="ProjectView-moreTitle">
                Do you want to know more?
            </h3>

            <Fade timeout={1250} delay={250}>
                <div className="ProjectView-options">

                    <div className="ProjectView-contButtons">
                        {(data.git != null) ?
                            <a target='_blank' rel='noopener noreferrer' className="ProjectView-git" href={data.git}>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.34769 16.6697C8.35202 16.7721 8.34098 16.872 8.31942 16.9731C8.28154 17.1507 8.20839 17.3387 8.10484 17.5125C7.81049 18.0063 7.31045 18.3358 6.66667 18.3358C5.15008 18.3358 4.55486 17.5917 3.8096 15.7286C3.30486 14.4667 3.06675 14.1691 2.5 14.1691L2.5 12.5024C4.01658 12.5024 4.6118 13.2465 5.35706 15.1096C5.8618 16.3715 6.09992 16.6691 6.66667 16.6691C6.66667 16.4273 6.66335 16.2131 6.65639 15.923C6.64005 15.2432 6.63817 15.1044 6.66783 14.9227C6.67969 14.5259 6.78211 14.2444 6.9875 13.965C5.12766 13.5602 3.87327 12.724 3.15331 11.3678L2.88361 10.7336C2.62087 9.97849 2.5 9.12293 2.5 8.13485C2.5 6.99688 2.84696 5.9794 3.49502 5.12888C3.29286 4.32043 3.32054 3.33267 3.76692 2.21716L3.91278 1.85265L4.28672 1.73304C4.33679 1.71702 4.39765 1.70256 4.46916 1.69134C5.1973 1.57706 6.23342 1.84972 7.58796 2.71736C8.38647 2.53226 9.22737 2.4388 10.074 2.4388C10.8305 2.4388 11.5829 2.51507 12.3014 2.66544C13.6192 1.84016 14.6269 1.58132 15.3354 1.69148C15.4061 1.70247 15.4663 1.71666 15.516 1.73241L15.8923 1.85173L16.0383 2.21846C16.4288 3.19907 16.4958 4.10279 16.3537 4.89356C17.0987 5.78749 17.5 6.88647 17.5 8.13485C17.5 9.18729 17.4246 9.97868 17.2079 10.7486L16.9791 11.3764C16.3802 12.7311 15.0596 13.5767 13.0229 13.9794C13.2346 14.2725 13.3333 14.57 13.3333 15.0024V15.8358C13.3333 16.2396 13.3333 16.252 13.3324 16.6691C13.3343 16.699 13.3368 16.7137 13.3395 16.7229C13.3389 16.7231 13.3333 18.3358 13.3333 18.3358C12.6235 18.3358 12.0957 17.9896 11.8361 17.4435C11.7016 17.1604 11.6614 16.8901 11.6667 16.6573V15.0024C11.6667 14.9326 11.6642 14.9285 11.4941 14.7584C11.0392 14.3035 10.8333 13.9603 10.8333 13.3358V12.5819L11.5834 12.5066C13.8161 12.2824 15.0304 11.6623 15.4331 10.7565L15.6212 10.2422C15.7709 9.70434 15.8333 9.04937 15.8333 8.13485C15.8333 7.16311 15.4941 6.36038 14.8525 5.71904L14.4998 5.36652L14.6438 4.88912C14.7716 4.465 14.802 3.96315 14.6668 3.39074C14.6443 3.39643 14.6209 3.40264 14.5967 3.40939C14.1505 3.53362 13.5934 3.80017 12.922 4.2489L12.6158 4.45357L12.2584 4.36493C11.567 4.19349 10.824 4.10547 10.074 4.10547C9.23989 4.10547 8.41539 4.21159 7.65372 4.41924L7.282 4.52057L6.96402 4.30304C6.26969 3.82805 5.69288 3.54558 5.23035 3.41363C5.19732 3.4042 5.16587 3.39577 5.13597 3.38826C4.9746 4.05075 5.03843 4.59504 5.20186 5.00346L5.39782 5.49317L5.03907 5.87984C4.46741 6.49599 4.16667 7.2458 4.16667 8.13485C4.16667 8.94881 4.26195 9.62328 4.43657 10.1313L4.65464 10.6475C5.19978 11.6705 6.35767 12.2859 8.42215 12.5072L9.16667 12.587V13.3358C9.16667 13.9603 8.96076 14.3035 8.50592 14.7584C8.33576 14.9285 8.33333 14.9326 8.33333 15.0024L8.31897 15.1565C8.30946 15.207 8.30946 15.3375 8.32257 15.883C8.3286 16.1339 8.33204 16.3325 8.33303 16.54C8.34299 16.583 8.34449 16.6107 8.34769 16.6697Z" />
                                </svg>
                            </a> : ''}
                        {(data.behance != null) ?
                            <a target='_blank' rel='noopener noreferrer' className="ProjectView-behance" href={data.behance}>
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.66669 4.16667H5.83335C7.6743 4.16667 9.16669 5.65906 9.16669 7.50001C9.16669 8.31637 8.87321 9.06419 8.38602 9.64373C9.35324 10.2272 10 11.2881 10 12.5C10 14.341 8.50764 15.8333 6.66669 15.8333H1.66669V10.8333V9.16667V4.16667ZM3.33335 14.1667V10.8333H5.83335H6.66669C7.58716 10.8333 8.33335 11.5795 8.33335 12.5C8.33335 13.4205 7.58716 14.1667 6.66669 14.1667H3.33335ZM11.6667 5.00001V6.66667H17.5V5.00001H11.6667ZM14.6982 14.1667C15.5653 14.1667 16.0981 13.9894 16.3826 13.7225C16.5324 13.5819 16.5949 13.4255 16.5949 13.3333H18.2616C18.2616 14.6893 17.0422 15.8333 14.6982 15.8333C12.3789 15.8333 10.8334 14.3299 10.8334 11.6667C10.8334 9.19492 12.1504 7.50001 14.5834 7.50001C17.0163 7.50001 18.3334 9.19492 18.3334 11.6667V12.5H12.5739C12.8001 13.6476 13.5396 14.1667 14.6982 14.1667ZM16.5955 10.8333C16.3886 9.74187 15.7278 9.16667 14.5834 9.16667C13.4389 9.16667 12.7781 9.74187 12.5712 10.8333H16.5955ZM3.33335 9.16667V5.83334H5.83335C6.75383 5.83334 7.50002 6.57953 7.50002 7.50001C7.50002 8.42048 6.75383 9.16667 5.83335 9.16667H3.33335Z" />
                                </svg>
                            </a> : ''}

                        {(data.test != null) ?
                            <a target='_blank' rel='noopener noreferrer' className="ProjectView-test" href={data.test}>Test Prototype</a>
                            : ''}
                    </div>

                    <div className="ProjectView-build">
                        <h3>Technology</h3>
                        <div className="ProjectView-contBuild">
                            {data.build.map((idImg, index) => {
                                return (
                                    <img key={index} src={`./img/iconSoftware/${idImg}.png`} alt="software logo" />
                                )
                            })}
                        </div>
                    </div>

                </div>
            </Fade>

            <footer className="footer">
                <h4>© 2019 Santiago Ortiz Guevara.</h4>
                <h4>All rights reserved.</h4>
            </footer>
        </div>
    )
}

export default observer(ProjectView);
