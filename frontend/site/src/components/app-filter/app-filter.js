import './app-filter.css';

const AppFilter = (props) => {
    const filterButtons = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'greater_1000', label: 'З/П больше 1000$' },
    ];

    const btns = filterButtons.map((item) => {
        const { name, label } = item;
        const clazz = props.filter === name ? 'btn-light' : 'btn-outline-light';
        // const clazz = '';

        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                data-filter={name}
                onClick={() => {
                    props.onChooseFilter(name);
                }}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group">{btns}</div>;
};

export default AppFilter;
