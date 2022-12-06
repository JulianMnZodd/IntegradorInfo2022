import React from "react";
import News from "./News";
import Alert from "@mui/material/Alert";
import { Container } from "@mui/material";

function NewsList({ news }) {
  if (news.length === 0) {
    return (
      <Container style={{marginTop:'50px'}}>
        <Alert severity="info">No se encontraron resultados</Alert>
      </Container>
    );
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {news.map((noticia, indice) => (
        <News key={indice} noticias={noticia}></News>
      ))}
    </div>
  );
}

export default NewsList;
