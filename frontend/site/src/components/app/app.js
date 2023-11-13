import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'John C.',
                    salary: 800,
                    increase: false,
                    rise: true,
                    id: 1,
                },
                {
                    name: 'Alex M.',
                    salary: 3000,
                    increase: true,
                    rise: false,
                    id: 2,
                },
                {
                    name: 'Carl W.',
                    salary: 5000,
                    increase: false,
                    rise: false,
                    id: 3,
                },
            ],

            temp: '',
            filter: 'all',
        };
        this.maxId = this.state.data.length + 1;
    }

    onDeleteDataItem = (id) => {
        const newData = this.state.data.filter((elem) => elem.id !== id);
        this.setState(({ data }) => ({
            data: newData,
        }));
    };

    onAddDataItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    onDataLength = () => {
        return this.state.data.length;
    };

    getReward = () => {
        return this.state.data.filter((item) => {
            return item.increase === true;
        }).length;
    };

    searchEmployees = (data, temp) => {
        if (temp.length === 0) {
            return data;
        }

        return data.filter((item) => {
            return item.name.indexOf(temp) > -1;
        });
    };

    onUpdateSearch = (temp) => {
        this.setState({ temp });
    };

    onChooseFilter = (filter) => {
        this.setState({ filter });
    };

    getSelectedFilter = (data, filter) => {
        switch (filter) {
            case 'all':
                return data;
            case 'rise':
                return data.filter((item) => item.rise);
            case 'greater_1000':
                return data.filter((item) => +item.salary >= 1000);
            default:
                return data;
        }
    };

    render() {
        const { data, temp, filter } = this.state;
        let visibleData = this.searchEmployees(data, temp);

        visibleData = this.getSelectedFilter(visibleData, filter);

        return (
            <div className="app">
                <AppInfo
                    onDataLength={this.onDataLength}
                    getReward={this.getReward}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        onChooseFilter={this.onChooseFilter}
                        filter={filter}
                    />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.onDeleteDataItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAddEmployee={this.onAddDataItem} />
            </div>
        );
    }
}

export default App;
