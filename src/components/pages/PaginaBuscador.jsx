import { useEffect, useState } from "react";
import SearchAppBar from "../SearchAppBar";
import Container from "@mui/material/Container";
import NewsList from "../NewsList";
import Paginator from "../Paginator";
import Loading from "../Loading";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer";

const APIKEY = "48daa31b215045c5abd4714a438f4347";

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
  const [cantResultados,setCantResultados] = useState(0)
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async () => {
    setIsLoading(true);
    const resp = await fetch(
      `https://newsapi.org/v2/everything?q=${contexto}&page=${pagActual}&pageSize=10&apiKey=${APIKEY}&language=es`
    );
    const news = await resp.json();
    setNews(news.articles);
    setCantidadPaginas(Math.ceil(parseInt(news.totalResults) / 10));
    setCantResultados(news.totalResults)
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
    setPagActual(1);
    setContexto(noticia);
  };
  return (
    <Container>
      <SearchAppBar onBuscar={onBusqueda} />
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Typography
            style={{marginTop:'20px',marginLeft:'25px'}}
            variant=""
            color="text.secondary"
            component="div"
          >
            {`Está viendo  ${news.length} noticias de ${cantResultados} resultados`}
          </Typography>
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
      <Footer></Footer>
    </Container>
  );
}

export default PaginaBuscador;
