import { createContext, useState } from 'react'
import { User } from '../models';
import { CreateUserRequest, DeleteUserRequest, EditUserRequest, getUsersRequest } from '../services';
import { GridColDef } from '@mui/x-data-grid';

const initialUsersContextValue = {
    users: [],
    getUsers: () => { },
    isLoading: false,
    getColumns: () => { },
    createUser: () => { },
    columns: [],
};

export const UsersContext = createContext(initialUsersContextValue);

export const UsersContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [columns, setColumns] = useState<GridColDef[]>([]);
    const [activeForm, setactiveForm] = useState<boolean>(false);
    const [editing, setEditing] = useState<boolean>(false);
    const [editUserId, setEditUserId] = useState<number>();
    const [rowValues, setRowValues] = useState<User>();


    const getUsers = async () => {
        setIsLoading(true);
        const response = await getUsersRequest();
        const users = response.data;
        setUsers(users);
        setIsLoading(false);
    };

    const handleDeleteUser = async (userId: number) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        await DeleteUserRequest(userId);
    };

    const EditUser = async (userId: number, newUserData: User) => {
        const updatedUsers = users.map((user) => {
            if (user.id === userId) {
                return { ...user, ...newUserData };
            }
            return user;
        });
        setUsers(updatedUsers)
        setEditing(false)
        try {
            await EditUserRequest(userId, newUserData)
        } catch (e) {
            console.log(e)
        }
    };

    const showEditForm = (row: User) => {
        setEditing(true)
        setEditUserId(row.id)
        setRowValues(row)
        showForm()
    }

    const getColumns = () => {
        const newColumns: GridColDef[] = [];
        users.forEach((user) => {
            const arrayKeys = Object.keys(user);
            arrayKeys.forEach((key) => {
                if (!newColumns.find((col) => col.field === key)) {
                    newColumns.push({ field: key, headerName: key.toUpperCase(), width: 150 });
                }
            });
        });

        const buttonStyle = { marginRight: "10px", padding: "3px", borderRadius: "5px", border: " solid 1px #313131", cursor: "pointer" };

        newColumns.push({
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <div>
                    <button className='table_button' style={buttonStyle} onClick={() => handleDeleteUser(params.row.id)}>Delete</button>
                    <button style={buttonStyle} onClick={() => showEditForm(params.row)}>Edit</button>
                </div>
            ),
        });
        setColumns(newColumns);
    }

    const createUser = async (user: User) => {
        try {
            const response = await CreateUserRequest(user);
            const newUsers = [...users, response.data];
            setUsers(newUsers);
        } catch (error) {
            console.log(error)
        }
    };

    const showForm: () => void = () => {
        setactiveForm(!activeForm);
    };


    return (
        <UsersContext.Provider value={{ users, getUsers, isLoading, getColumns, createUser, columns, showForm, activeForm, editing, EditUser, editUserId, rowValues, setEditing }} >
            {children}
        </UsersContext.Provider>
    )
} 