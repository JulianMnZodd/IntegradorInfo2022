import React from "react";
import News from "./News";

function NewsList({ news }) {
  if (news === undefined) {
    return <h1>No se encontraron news con ese nombre</h1>;
  }

  return (
    <div
      style={{
        marginTop:"20px",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {news.map((noticia,indice) => (
        <News key={indice} noticias={noticia}></News>
      ))}
    </div>
  );
}

export default NewsList;
