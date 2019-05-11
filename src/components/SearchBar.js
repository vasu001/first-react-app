import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmitForm(this.state.term);
    }

    render() {
        return (
            <div className="d-flex-column text-center bg-primary text-white">
                <h1 className="h2 pt-2">Image Search</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <input type="text" className="form-control mb-3" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;