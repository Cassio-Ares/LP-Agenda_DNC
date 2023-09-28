import "./CardDescription.scss";


const CardDescription = ({ dataTask }) => {


  return (
    <div className="containerCard">
      <h1>{dataTask.title}</h1>
      <p>
        <strong>Descrição</strong>: {dataTask.description}
      </p>
      <p>
        <span>
          <strong>Horario</strong>:{dataTask.hour}
        </span>
        <br />
        <span>
          <strong>Data</strong>: {dataTask.date}
        </span>
      </p>
      <div className="container-btn">
      </div>
    </div>
  );
};

export default CardDescription;
