import './Dashboard.css';
import { useContext, useEffect } from 'react';
import { DataGridTable } from '../../components';
import { ThemeContext, UsersContext } from '../../context';

function Dashboard() {

    const { users, getUsers, isLoading, getColumns } = useContext(UsersContext);
    const { darkTheme } = useContext(ThemeContext)

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        getColumns()
    }, [users]);

    return (
        <div className="dashboard_container">
            <div className="dashboard_title--container">
                <h1 id={darkTheme ? 'dark' : 'light'} className="dashboard_title">Dashboard</h1>
                <p id={darkTheme ? 'dark' : 'light'} className="dashboard_description">
                    This is where the magic happens, feel free to <b>interact</b> with the users table. Here
                    you can add, modify, delete users, sort them by name, email, status, search especific data with the filter tool, among other relevant
                    data.
                </p>
            </div>
            <div style={{ backgroundColor: "white" }}>
                <DataGridTable isLoading={isLoading} />
            </div>
        </div >
    );
}

export default Dashboard;
