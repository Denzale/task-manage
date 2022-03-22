import { CREATE_TASK } from "../actions/types";
import {  EDIT_TASK } from "../actions/types";

const intialState = [
    /****************************************
              * 
   * **************************************/
    /*
    {
        id: 1,
        title: "Learn ReactJS",
        description: "Let's learn React js today!",
        status: "Completed"
    },
    {
        id: 2,
        title: "Learn Redux",
        description: "Let's learn Redux today!",
        status: "In Progress"
    },
    {
        id: 3,
        title: "Learn MERN",
        description: "Let's learn MERN Stack!",
        status: "Unstarted"
    },
    /****************************************
                * 
     * **************************************/


]

const tasks = (state = { tasks: intialState }, action) => {
    /****************************************
                * if else version
     * **************************************/
    /*
        if (action.type === EDIT_TASK) {
        const { payload } = action;
        return {
            tasks: state.tasks.map((task) => {
                if (task.id === payload.id) {
                    return Object.assign({}, task, payload.params);
                }
                return task;
            }),
        };
    }
        /****************************************
                * switch version
     * **************************************/
    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map((task) => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task;
                }),
            }
        }
        case CREATE_TASK : {
            return {
                tasks: state.tasks.concat(action.payload),
            };
        }
        default:
            return state;
    }
};

export default tasks;