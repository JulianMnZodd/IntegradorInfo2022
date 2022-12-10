import { Pagination } from "@mui/material";

const Paginador = ({ cantidadPaginas, onCambioPagina, pagActual }) => {
  return (
    <Pagination
      color="primary"
      count={cantidadPaginas}
      page={pagActual}
      onChange={(_e, v) => {
        onCambioPagina(v);
      }}
    ></Pagination>
  );
};

export default Paginador;
