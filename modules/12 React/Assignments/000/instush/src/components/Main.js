import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 60
        };
       
    }

    render() {
        const cssPadding = 0;
        const { src } = this.props.mainImage;
        
        return (
            <div className="col-sm-12">
                <div className="row">
                    <img
                    src={ src}
                    className="col-sm-12"
                    alt="img1"
                    style={{ padding: cssPadding, margin: 0, borderColor: 'red', borderWidth: 4, borderStyle: 'solid' }} />
                </div>
            </div>
        );
    }
}

export default Main;