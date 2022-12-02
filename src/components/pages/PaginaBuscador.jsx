import { useEffect, useState } from "react";
import SearchAppBar from "../SearchAppBar";
import Container from "@mui/material/Container";
import NewsList from "../NewsList";
//import {NewService} from ".../Services/NewService"
import Paginator from "../Paginator";
import Loading from "../Loading";

const APIKEY = "48daa31b215045c5abd4714a438f4347";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function PaginaBuscador() {
  const [searchParams] = useSearchParams();
  const [contexto, setContexto] = useState(
    searchParams.get("search") || "argentina"
  );

  const [pagActual, setPagActual] = useState(
    Number(searchParams.get("pag")) || 1
  );

  const [news, setNews] = useState([]);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async () => {
    setIsLoading(true);
    const resp = await fetch(
      `https://newsapi.org/v2/everything?q=${contexto}&page=${pagActual}&pageSize=10&apiKey=${APIKEY}&language=es`
    );
    const news = await resp.json();
    setNews(news.articles);
    setCantidadPaginas(Math.ceil(parseInt(news.totalResults) / 10));
    setIsLoading(false);
  };

  useEffect(() => {
    onSearch();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/?search=${contexto}&pag=${pagActual}`);
    onSearch();
  }, [contexto, pagActual]);

  const onCambioPagina = (page) => {
    setPagActual(page);
  };

  const onBusqueda = (noticia) => {
    setContexto(noticia);
  };
  return (
    <Container>
      <SearchAppBar onBuscar={onBusqueda} />
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <NewsList news={news}></NewsList>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <Paginator
              cantidadPaginas={cantidadPaginas}
              onCambioPagina={onCambioPagina}
              pagActual={pagActual}
            />
          </Container>
        </>
      )}
    </Container>
  );
}

export default PaginaBuscador;
