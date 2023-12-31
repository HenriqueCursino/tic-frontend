import { useState } from "react";
import { InputComponent } from "../Input";
import styled from "styled-components";
import { createUser } from "../../service/users/request";
import { CreateUser } from "../../service/users/type";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .container-box {
    background: #fff;
    border-radius: 10px;

    padding: 41px;

    max-width: 900px;
    width: 90%;

    #flex {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .submit-button {
    text-align: right;
    margin-top: 1rem;
    button {
      border-radius: 5px;
      background: #0c5dbd;
      color: #fff;
      padding: 0.5rem 1rem;
    }
  }

  .flex {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CreateUserPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdm, setIsAdm] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsAdm((prev) => !prev);
  };

  const onSubmit = async () => {
    try {
      const data: CreateUser = {
        email: email,
        name: userName,
        password: password,
        is_adm: isAdm ? isAdm : false,
      };

      await createUser(data);
      navigate("/dashboard/createuser")
    } catch (error) {
      alert("Erro ao criar um usuario");
    }
  };

  return (
    <Container>
      <div className="container-box">
      <h1 className="font-bold text-2xl pb-2" style={{ textAlign: 'center' }}>Cadastro de Usuários</h1>
        <div id="flex">
          <div className="flex gap-8">
            <InputComponent
              value={userName}
              labelText="Usuario"
              type="text"
              name="user"
              onChange={setUserName}
            />
            <InputComponent
              value={email}
              labelText="Email"
              type="email"
              name="email"
              onChange={setEmail}
            />
          </div>

          <div className="flex gap-8">
            <InputComponent
              value={password}
              labelText="Senha"
              type="password"
              name="password"
              onChange={setPassword}
            />
            <div className="flex">
              <input
                type="radio"
                checked={isAdm}
                onClick={handleCheckboxChange}
              />
              <label htmlFor={"ADM"}>É ADM?</label>
            </div>
          </div>

        </div>

        <div className="submit-button">
          <button onClick={onSubmit}>Criar Usuario</button>
        </div>
      </div>
    </Container>
  );
};
