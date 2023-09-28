import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [select, setSelect] = useState(null);

  return (
    <div className="header">
      <ul>
        <ul>
          <li>
            <Link
              to={`/Organization`}
              className={`${select?.organization && "header_detail"}`}
              onMouseEnter={() => {
                setSelect({ organization: true, tarefas: false });
              }}
            >
              Organização
            </Link>
          </li>

          <li>
            <Link
              to={`/`}
              className={`${select?.tarefas && "header_detail"}`}
              onMouseEnter={() => {
                setSelect({ organization: false, tarefas: true });
              }}
            >
              Taferas
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Header;
