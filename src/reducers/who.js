import whoJson from './data/who.json';

const who = (state = whoJson, action) => {
    switch (action.type) {
        case 'getAllPeople':
            return (
                action.who
            )
        default:
            return (state);
    }
};

export default who;
