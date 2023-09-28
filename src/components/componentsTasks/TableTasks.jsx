import "./TableTasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";
import CardAdd from "../Cards/CardAdd";
import CardDel from "../Cards/CardDel";
import { useState } from "react";
import CardDescription from "../Cards/CardDescription";


const TableTasks = ({ dataTask = [], removeTask }) => {
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idToShow, setIdToShow] = useState(null);


  function delet() {
    setDel(!del);
  }

 
  function edite() {
    setEdit(!edit);
  }


 
  function appear(id) {
    setIdToShow(id);
  }

  
  function disappear() {
    setIdToShow(null);
  }

  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {idToShow != null && (
              <CardDescription dataTask={dataTask[idToShow]} />
            )}

            {dataTask.map((dataTask, id) => {
              return (
                <tr key={id}>
                  <td
                    onMouseEnter={() => {
                      appear(id);
                    }}
                    onMouseOut={disappear}
                    className="table_pg"
                  >
                    {dataTask.title}
                  </td>

                  <td className="td_checkbox">
                    <input className="checkbox" type="checkbox" />
                    <label
                      className="checkbox_Label"
                      htmlFor="checkbox"
                    ></label>
                  </td>

                  <td className="icons">
                    <FaPen onClick={edite} />
                    {edit === true && <CardAdd onclickNo={edite} />}
                    <FaTrash onClick={delet} />
                    {del === true && (
                      <CardDel onclickNo={delet} />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTasks;
