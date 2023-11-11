import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        if (name.length >= 3 && salary.length >= 3) {
            this.props.onAddEmployee(name, salary);
            this.resetForm();
        } else {
            this.resetForm();
        }
    };

    resetForm = () => {
        this.setState({
            name: '',
            salary: '',
        });
    };

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onChangeValue}
                        name="name"
                        value={name}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onChangeValue}
                        name="salary"
                        value={salary}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
