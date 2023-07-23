import { DataGrid, GridRowsProp } from "@mui/x-data-grid"
import { UsersContext } from "../../context";
import { UsersForm } from '../usersForm'
import { useContext } from "react"
import './DataGridTable.css'


interface DataGridTableProps {
    isLoading: boolean;
}

const DataGridTable = ({ isLoading }: DataGridTableProps) => {
    const { users, columns, createUser, showForm, activeForm } = useContext(UsersContext);
    return (
        <div className="dashboard_table--container">
            <div className="dashboard_table">
                {isLoading ? (
                    <div style={{ "marginTop": "100px" }} >
                        <h1>loading...</h1>
                    </div>
                ) : (
                    <DataGrid
                        rows={(users as GridRowsProp)}
                        columns={columns}
                        loading={isLoading}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                )}
                {activeForm ? <UsersForm onHide={showForm} onCreateUser={createUser} /> : <div className="dashboard_form--container" style={{ display: "none" }}></div>}
                <div className="dashboard_button--container">
                    <button className='dashboard_button--create' onClick={() => showForm()} > create </button>
                </div>
            </div>
        </div>
    )
}
export default DataGridTable