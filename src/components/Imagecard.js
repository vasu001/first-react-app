import React from 'react';

class Imagecard extends React.Component {
    render() {
        const { alt_description, urls } = this.props.image;

        return (
            <img src={urls.regular} alt={alt_description} className="img" />
        );
    }
}

export default Imagecard;