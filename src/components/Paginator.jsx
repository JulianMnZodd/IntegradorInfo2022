import { Pagination } from "@mui/material";

const Paginador = ({ cantidadPaginas, onCambioPagina, pagActual }) => {
  return (
    <Pagination
        color="primary"
      count={cantidadPaginas}
      page={pagActual}
      onChange={(e, v) => {
        onCambioPagina(v);
        console.log(v);
      }}
    ></Pagination>
  );
};

export default Paginador;
