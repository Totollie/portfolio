import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextEntry.scss';
import Title from "../title/Title";

class TextEntry extends Component {

    render(){
        let {title, children} = this.props;

        return (
            <div className="text-entry">
                <Title>{title}</Title>
                {children}
            </div>
        )
    }

}

TextEntry.propTypes = {
  title: PropTypes.node
};

TextEntry.defaultProps = {
    title: null
};

export default TextEntry;