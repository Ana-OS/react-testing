import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component { 

    render() {
        return (
        <div>Hello {this.props.name}, how are you?</div> 
        );
    } 
}


Hello.propTypes = {
    // works as validation . the props name has to receive a string and it is required
    // we can chain more validation fields. and we can valiate an object and its keys:  below validtion of css
    // PropTypes.shape({
    //     color: PropTypes.string,
    //     fontSize: PropTypes.number
    // })
    

    name: PropTypes.string.isRequired 
}

export default Hello;
