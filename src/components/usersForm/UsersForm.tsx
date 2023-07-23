import { Formik, Form, Field, ErrorMessage } from 'formik';
import roles from '../../assets/data/roles';
import gender from '../../assets/data/gender';
import './UsersForm.css';
import { HideHandler, User } from '../../models';
import { useContext } from 'react';
import { UsersContext } from '../../context/usersContext';
import { UsersSchema } from '../../schemas';

function UsersForm({ onHide, onCreateUser }: { onHide: HideHandler; onCreateUser: (userData: User) => void }) {

    const { editing, EditUser, editUserId, setEditing, rowValues } = useContext(UsersContext);

    // console.log(editUserId)
    const hideForm = () => {
        onHide(true);
    };
    const cancel = () => {
        setEditing(false);
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
        // foto: "",
        status: 1,
        password: 123,
    };

    return (
        <div className="dashboard_form--container">
            <div className="dashboar_form--title">
                <h2>Create a user</h2>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={UsersSchema}
                onSubmit={(values) => {
                    hideForm();
                    if (editing && editUserId) {
                        EditUser(editUserId, values);
                        setEditing(false);
                        console.log(editing);
                    } else {
                        onCreateUser(values);
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
                    <Form className='dashboar_form' onSubmit={handleSubmit}  >
                        <label>Nombres</label>
                        <Field id={touched.name && errors.name ? 'error' : 'field'} type="text" name='name' onChange={handleChange} onBlur={handleBlur} />
                        <ErrorMessage name="name" component="div" className="error-message" />

                        <label>Apellidos</label>
                        <Field id={touched.apellidos && errors.apellidos ? 'error' : 'field'} type="text" name='apellidos' onChange={handleChange} onBlur={handleBlur} />
                        <ErrorMessage name="apellidos" component="div" className="error-message" />

                        <label>Celular</label>
                        <Field id={touched.celular && errors.celular ? 'error' : 'field'} type="text" name='celular' onChange={handleChange} onBlur={handleBlur} />
                        <ErrorMessage name="celular" component="div" className="error-message" />

                        <label>Dirección</label>
                        <Field id={touched.direccion && errors.direccion ? 'error' : 'field'} type="text" name='direccion' onChange={handleChange} onBlur={handleBlur} />
                        <ErrorMessage name="direccion" component="div" className="error-message" />

                        <label>Email</label>
                        <Field id={touched.email && errors.email ? 'error' : 'field'} type="email" name='email' onChange={handleChange} onBlur={handleBlur} />
                        <ErrorMessage name="email" component="div" className="error-message" />

                        <br />

                        <label>Rol</label>
                        <Field id={touched.rol && errors.rol ? 'error' : 'field'} as="select" name="role" onChange={handleChange} onBlur={handleBlur} >
                            <option value="">Select an option</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.role}>
                                    {role.role}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="role" component="div" className="error-message" />

                        <label>Género</label>
                        <Field id={touched.genero && errors.genero ? 'error' : 'field'} as="select" name="genero" onChange={handleChange} onBlur={handleBlur}  >
                            <option value="">Select an option</option>
                            {gender.map((gender) => (
                                <option key={gender.id} value={gender.gender}>
                                    {gender.gender}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="genero" component="div" className="error-message" />

                        {/* <label>Foto</label>
                        <Field
                            as="input"
                            type="file"
                            id={touched.foto && errors.foto ? 'error' : 'field'}
                            name="foto"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage name="foto" component="div" className="error-message" /> */}
                        
                        <button className='submit' type='submit'>Save</button>
                        <button className='cancel' onClick={() => cancel()}></button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default UsersForm;
