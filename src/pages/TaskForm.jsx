import { Form, Formik } from "formik";
import { useTask } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Formik mantiene el estado y Form crea un formulario la prop name es necesaria para que Formik lo reconozca en initialValues
// y acceda a esos inputs. La funcion handleChange va llenando los estados de initialValues

function TaskForm() {
  const { createTask, getTask, updateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams(); // Me dice si la url estando en TaskForm tiene params (:id)
  const navigate = useNavigate();
  // console.log(params);

  const loadTask = async () => {
    if (params.id) {
      const task = await getTask(params.id);
      setTask({
        title: task.title,
        description: task.description,
      });
      console.log(task);
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          {
            if (params.id) {
              await updateTask(params.id, values);
              navigate("/");
            } else {
              await createTask(values);
            }
          }
          setTask({
            title: "",
            description: "",
          });
          // actions.resetForm(); // Limpia los values de initialValues
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                {params.id ? "Edit Task" : "Create Task"}
              </h1>
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={values.title}
                className="px-2 py-1 rounded-sm w-full"
              ></input>

              <label className="block">Description</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Write a desciption"
                onChange={handleChange}
                value={values.description}
                className="px-2 py-1 rounded-sm w-full"
              ></textarea>

              <button className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
            // Se desabilita el boton si esta enviando y cambia el contenido del boton dependiendo de la accion
          );
        }}
        {/*  En react cuando se utiliza una función flecha dentro de {} la funcion necesita return explicito pero si esta entre () considera ese valor como lo que debe retornar */}
      </Formik>
    </div>
  );
}

export default TaskForm;
