import { Formik, Form, Field } from 'formik';
import roles from '../../assets/data/roles'
import gender from '../../assets/data/gender'
import './UsersForm.css'
import { HideHandler, User } from '../../models';
import { useContext } from 'react';
import { UsersContext } from '../../context/usersContext';

function UsersForm({ onHide, onCreateUser }: { onHide: HideHandler; onCreateUser: (userData: User) => void }) {

    const { editing, EditUser, editUserId, setEditing, rowValues } = useContext(UsersContext);

    // console.log(editUserId)
    const hideForm = () => {
        onHide(true);
    };

    const initialValues = editing ? rowValues : {
        name: "",
        apellidos: "",
        celular: "",
        direccion: "",
        email: "",
        role: "",
        genero: "",
        foto: "",
        status: 1,
        password: 123,
    }

    return (
        <div className="dashboard_form--container">
            <div className="dashboar_form--title">
                <h2>Create a user</h2>
            </div>
            <Formik

                initialValues={initialValues}
                onSubmit={(values) => {
                    hideForm();
                    if (editing && editUserId) {
                        // Si estás editando, envía el ID del usuario y los datos actualizados
                        EditUser(editUserId, values);

                        console.log(editing)
                    } else {
                        // Si estás creando, simplemente envía los datos del nuevo usuario
                        onCreateUser(values);
                    }
                }}
            >
                {({ handleChange, handleSubmit }) => (
                    <Form className='dashboar_form' onSubmit={handleSubmit}  >
                        <label>Nombres</label>
                        <Field id="field" type="text" name='name' onChange={handleChange} />

                        <label>Apellidos</label>
                        <Field id="field" type="text" name='apellidos' onChange={handleChange} />

                        <label>Celular</label>
                        <Field id="field" type="text" name='celular' onChange={handleChange} />

                        <label>Dirección</label>
                        <Field id="field" type="text" name='direccion' onChange={handleChange} />

                        <label>Email</label>
                        <Field id="field" type="email" name='email' onChange={handleChange} />
                        <br />

                        <label>Rol</label>
                        <Field id="field" as="select" name="role" onChange={handleChange}>
                            <option value="">Select an option</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.role}>
                                    {role.role}
                                </option>
                            ))}
                        </Field>

                        <label>Género</label>
                        <Field id="field" as="select" name="genero" onChange={handleChange}>
                            <option value="">Select an option</option>
                            {gender.map((gender) => (
                                <option key={gender.id} value={gender.gender}>
                                    {gender.gender}
                                </option>
                            ))}
                        </Field>
                        <label>Foto</label>
                        <Field
                            as="input"
                            type="file"
                            id="field"
                            name="foto"
                            onChange={handleChange}
                        />
                        <button className='submit' type='submit'>Save</button>
                        <button className='cancel' onClick={() => hideForm()}></button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default UsersForm