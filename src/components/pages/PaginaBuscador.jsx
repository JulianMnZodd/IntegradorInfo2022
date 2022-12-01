import { useEffect, useState } from "react";
import SearchAppBar from "../SearchAppBar";
import Container from "@mui/material/Container";
import NewsList from "../NewsList";
//import {NewService} from ".../Services/NewService"
import Paginator from "../Paginator";

const APIKEY = "48daa31b215045c5abd4714a438f4347";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function PaginaBuscador() {
  const [searchParams] = useSearchParams();
  const [news, setNews] = useState([]);

  const [contexto, setContexto] = useState(
    searchParams.get("search") || "argentina"
  );

  const [pagActual, setPagActual] = useState(
    Number(searchParams.get("pag")) || 1
  );

  const [cantidadPaginas, setCantidadPaginas] = useState(1);

  const navigate = useNavigate();

  const onSearch = async () => {
    const resp = await fetch(
      `https://newsapi.org/v2/everything?q=${contexto}&page=${pagActual}&pageSize=10&apiKey=${APIKEY}&language=es`
    );
    const news = await resp.json();
    setNews(news.articles);
    setCantidadPaginas(Math.ceil(parseInt(news.totalResults) / 10));
  };

  useEffect(() => {
    onSearch();
  }, []);

  useEffect(() => {
    navigate(`/?search=${contexto}&pag=${pagActual}`);
    onSearch();
  }, [contexto,pagActual]);

  const onCambioPagina = (page) => {
    setPagActual(page);
  };

  const onBusqueda = (noticia) => {
    setContexto(noticia);
  };
  return (
    <Container>
      <SearchAppBar onBuscar={onBusqueda} />
      <NewsList news={news}></NewsList>
      <Container style={{display:'flex', justifyContent:'center', padding:'30px'}}>
        <Paginator
          cantidadPaginas={cantidadPaginas}
          onCambioPagina={onCambioPagina}
          pagActual={pagActual}
        />
      </Container>
    </Container>
  );
}

export default PaginaBuscador;
