import React, { useState } from "react";
import axios from "axios";
import { api } from "../../config";
import Usuario from "../Usuario";
import ModalAdicionarUsuario from "../ModalAdicionarUsuario";
import styles from "./lista.de.usuario.css";

const ListaDeUsuarios = () => {
  const [listaDeUsuarios, setListaDeUsuarios] = React.useState([]);
  const [termoDeBusca, setTermoDeBusca] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState(null);
  const [modalAdicionarUsuario, setModalAdicionarUsuario] =
    React.useState(false);

  const getUsers = () => {
    axios.get(api).then((response) => {
      setListaDeUsuarios(response.data);
    });
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const filtrarUsuarios = () => {
    const usuariosEncontrados = listaDeUsuarios.filter((user) => {
      const nome = user.nome.toLowerCase();
      const telefone = user.telefone;

      const contemTelefone = telefone.includes(termoDeBusca);
      const contemNome = nome.includes(termoDeBusca);

      if (contemNome || contemTelefone) return user;
    });

    setFilteredUsers(usuariosEncontrados);
  };

  const mostrarUsuariosFiltrados = () => {
    return filteredUsers.map((user) => (
      <Usuario key={user.id} userProp={user} />
    ));
  };

  const mostrarTodosOsUsuarios = () => {
    return listaDeUsuarios.map((user) => (
      <Usuario key={user.id} userProp={user} />
    ));
  };

  return (
    <main className={styles.bgList}>
      <div>
        <h1>Pesquisa multipla</h1>

        <input
          type="search"
          onChange={(event) => {
            setTermoDeBusca(event.target.value);
          }}
        />
        <button onClick={filtrarUsuarios}>Filtrar</button>
        {filteredUsers ? mostrarUsuariosFiltrados() : mostrarTodosOsUsuarios()}
        <button onClick={() => setModalAdicionarUsuario(false)}>
          Adicionar Usuario
        </button>
        {<ModalAdicionarUsuario />}
      </div>
    </main>
  );
};

export default ListaDeUsuarios;
