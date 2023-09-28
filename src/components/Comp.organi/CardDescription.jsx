import "./CardDescription_Org.scss";
import Button from "../Button";

const CardDescription = ({ dataTask }) => {
  console.log(dataTask);

  return (
    <>
      {dataTask.map((data) => {
        return (
          <div className="containerCard_Org" key={data.id}>
            <h1>{data.title}</h1>
            <p>
              <strong>Descrição</strong>: {data.description}
            </p>
            <p>
              <span>
                <strong>Horario</strong>:{data.hour}
              </span>
              <br />
              <span>
                <strong>Data</strong>: {data.date}
              </span>
            </p>
            <div className="container-btn">
              <Button text="Excluir" styles="btnCard_nao" />
              {/* event={onclickNo}  */}
              <Button text="Editar" styles="btnCard_sim" />
              {/* event={onclickYes} */}
            </div>
          </div>
        );
      })}
    </>

  );
};

export default CardDescription;
