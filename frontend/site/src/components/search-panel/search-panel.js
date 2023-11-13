import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            filter: {},
        };
    }

    onUpdateSearch = (e) => {
        const temp = e.target.value;
        this.setState({ temp });
        this.props.onUpdateSearch(temp)
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.temp}
                onChange={this.onUpdateSearch}
            />
        );
    }
}

export default SearchPanel;
