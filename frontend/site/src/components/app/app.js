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

    onToggleIncrease = (id) => {
        const oldData = this.state.data;

        this.setState({
            data: oldData.map((item) => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase };
                }
                return item;
            }),
        });
    };

    onToggleRaise = (id) => {
        const oldData = this.state.data;

        this.setState({
            data: oldData.map((item) => {
                if (item.id === id) {
                    return { ...item, raise: !item.raise };
                }
                return item;
            }),
        });
    };

    onDataLength = () => {
        return this.state.data.length;
    };

    getReward = () => {
        return this.state.data.filter(item => {
            return item.increase === true
        }).length
    }

    render() {
        return (
            <div className="app">
                <AppInfo 
                    onDataLength={this.onDataLength}
                    getReward={this.getReward}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.onDeleteDataItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRaise={this.onToggleRaise}
                />
                <EmployeesAddForm onAddEmployee={this.onAddDataItem} />
            </div>
        );
    }
}

export default App;
