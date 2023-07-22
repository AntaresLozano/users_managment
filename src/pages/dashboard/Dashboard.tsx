import './Dashboard.css';
import { useContext, useEffect } from 'react';
// import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
// import { getUsersRequest, DeleteUserRequest, CreateUserRequest } from '../../services';
// import { User } from '../../models';
// import { UsersForm } from '../../components';
import { UsersContext } from '../../context/usersContext';
import { DataGridTable } from '../../components';

function Dashboard() {

    const { users, getUsers, isLoading, getColumns } = useContext(UsersContext);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        getColumns()
    }, [users]);

    // createUser

    // showForm

    return (
        <div className="dashboard_container">
            <div className="dashboard_title--container">
                <h1 className="dashboard_title">Dashboard</h1>
                <p className="dashboard_description">
                    This is where the magic happens, feel free to <b>interact</b> with the users table. Here
                    you can add, modify, delete users, sort them by name, email, status, search especific data with the filter tool, among other relevant
                    data.
                </p>
            </div>
            <DataGridTable isLoading={isLoading} />
        </div >
    );
}

export default Dashboard;
