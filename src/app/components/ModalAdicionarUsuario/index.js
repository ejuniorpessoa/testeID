import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./modal.module.css";

const ModalAdicionarUsuario = (isOpen) => {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  /* const [cpf, setTermoDeBusca] = useState("");
  const [, setTermoDeBusca] = useState(""); */
  const cadastrar = () => {
    axios.post(api, {
      nome: formNome,
      CPF: formCpf,
      telefone: formTelefone,
    });
  };

  if (!isOpen) {
    return (
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <button>X</button>

          <h2>Adicionar Pessoa</h2>
          <label>Nome:</label>
          <input
            placeholder="Nome Sobrenome"
            type="text"
            onChange={(event) => {
              setTermoDeBusca(event.target.value);
            }}
          />
          <label>CPF:</label>
          <input
            placeholder="xxx.xxx.xxx-xx"
            type="text"
            onChange={(event) => {
              setTermoDeBusca(event.target.value);
            }}
          />
          <label>Celular:</label>
          <input
            placeholder="(xx) xxxxx-xxxx"
            type="text"
            onChange={(event) => {
              setTermoDeBusca(event.target.value);
            }}
          />
          <button onClick={cadastrar}>+ Adicionar Pessoa</button>
        </div>
      </div>
    );
  }
  return null;
};

export default ModalAdicionarUsuario;
