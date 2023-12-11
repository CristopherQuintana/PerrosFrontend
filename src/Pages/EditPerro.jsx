import React from "react";
import { useParams } from "react-router-dom";
import FormPerro from "./Components/FormPerro";
import { useQueryVerPerro } from "../Queries/queryVerPerro";
import { CircularProgress } from "@mui/material";
import Navbar from "./Components/Navbar";

function EditPerro() {
  const paramsUrl = useParams();
  const { data: perro, isLoading, isSuccess, isError } = useQueryVerPerro(
    paramsUrl.id
  );

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <FormPerro
          formType="edit"
          initialValues={{
            id: paramsUrl.id,
            nombre: perro.nombre,
            foto: perro.foto_url,
            descripcion: perro.descripcion,
          }}
        />
      )}
    </>
  );
}

export default EditPerro;