import PropTypes from "prop-types";

const strContains = (arg1, arg2) => {
    if(arg1.toLowerCase().includes(arg2.toLowerCase())){
        return true;
    }
    else {
        return false;
    }
};

strContains.propTypes = {
    arg1: PropTypes.string.isRequired,
    arg2: PropTypes.string.isRequired
};

export default strContains;