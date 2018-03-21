import React from 'react';
import axios from 'axios';
import ViewShared from './ViewShared.jsx'
import {currentDoc} from '../actions/index.js'
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';

class Document extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.doc);

        return (
        <div className="row">
            <div className="col-lg-12"><p>
            <Link to={{ pathname: '/edit', state: { current: this.props.doc}}}
                className="btn btn-outline-secondary">{this.props.doc.name}</Link>
        </p></div></div>);
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Document)
