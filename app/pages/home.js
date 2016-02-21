import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

let Home = (props)=>{

        return <div>
                Message in store: "{props.message.theMessage}"
              </div>;
}

Home.propTypes = {
    message: PropTypes.shape({
        theMessage: PropTypes.string.isRequired
    })

};


/**
let msg = () => {
  return props.message.theMessage;
}
  **/

/**
<button>{props.message.theMessage}</button>

**/

let mapStateToProps = (state) => {
    return {
        message:state.message
    };
};

export default connect(mapStateToProps)(Home);
