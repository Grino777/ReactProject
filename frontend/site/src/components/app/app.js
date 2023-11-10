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
                { name: 'John C.', salary: 800, id: 1 },
                { name: 'Alex M.', salary: 3000, id: 2 },
                { name: 'Carl W.', salary: 5000, id: 3 },
            ],
        };
    }

    onDeleteDataItem = (id) => {
        const newData = this.state.data.filter((elem) => elem.id !== id);
        this.setState(({ data }) => ({
            data: newData,
        }));
    };

    getItemId = () => {
        const data = this.state.data;
        let id = 0;
        if (data.length !== 0) {
            data.map((elem) => {
                return (id = elem.id >= id ? elem.id + 1 : id);
            });
        }

        return id;
    };

    onAddDataItem = (e) => {
        e.preventDefault();
        const elem = { id: this.getItemId() };
        const newData = this.state.data;
        const form = e.target.form;

        const formData = new FormData(form);

        for (const [key, value] of formData) {
            elem[key] = value;
        }

        newData.push(elem);

        this.setState(({ data }) => ({
            data: newData,
        }));

        console.log(this.state.data);
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.onDeleteDataItem}
                />
                <EmployeesAddForm onAddEmployee={this.onAddDataItem} />
            </div>
        );
    }
}

export default App;
