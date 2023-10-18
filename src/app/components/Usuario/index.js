import React from "react";

const User = ({ userProp }) => {
  return (
    <div key={userProp.id}>
      <h2>Nome: {userProp.nome}</h2>
      <h2>CPF: {userProp.cpf}</h2>
      <h2>Telefone: {userProp.telefone}</h2>
    </div>
  );
};

export default User;
