import constants from './store/constants';

export default {
    /**************
        Message
    ***************/

    set_message(message) {
        return {
            type: constants.MESSAGE,
            theMessage:message
        };
    }
};
