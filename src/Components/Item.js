import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        const {text} = this.props;
        return (
            <div>
                <p>{text}</p>
            </div>
        );
    }
}

Item.propTypes = {
    text: PropTypes.string
};

export default Item;