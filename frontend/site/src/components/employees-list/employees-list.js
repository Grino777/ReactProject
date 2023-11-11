import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRaise }) => {
    const elements = data.map((item) => {
        const { id } = item;
        return <EmployeesListItem key={id}
            {...item}
            onDelete={onDelete}
            onToggleIncrease={onToggleIncrease}
            onToggleRaise={onToggleRaise}
            />;
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
