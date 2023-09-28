import Container from "../../components/Container";
import Header from "../../components/Header";
import CardDescription from "../../components/Comp.organi/CardDescription";
import { useState } from "react";
import "./index.scss";

const Organization = ({ data }) => {
  const [dataTask, setDataTask] = useState([...data]);


  return (
    <div className="organization">
      <Header />
      <Container styles="main_container">
       <CardDescription
        key={data.id}
         dataTask={dataTask}
        /> 
      </Container>
    </div>
  );
};

export default Organization;
