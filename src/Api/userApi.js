import axios from "axios";

import { API_ADDRESS } from "./constant";

// Logar Conta
export async function logarConta(email, senha, navigate) {
  try {
    const url = API_ADDRESS + '/user/login';
    const r = await axios.post(url, { email, password: senha });
    const userData = r.data;

    if (userData && userData.loggedIn) {  
      navigate('/funcao_admin');
    } else {
      alert("Verifique se o email ou senha está certo");
    }
  } catch (error) {
    alert("Verifique se o email ou senha está certo");
  }
}

// Cadastrar conta
export async function criarContaAdm(nome, email, senha, navigate) {
  let url = API_ADDRESS + '/user/register';
  let corp = {
    name: nome,
    email: email,
    password: senha
  };

  try {
    let r = await axios.post(url, corp);
    let info = r.data;

    alert('Cadastro Realizado! Seu ID é: ' + info.id);
    navigate('/login');

    return info;
  } 
  catch (error) {
    alert('Erro ao criar conta. Tente novamente.');
  }
}

// Nova senha
export async function alterarSenha(email, newPassword, navigate) {
  try {
    const url = API_ADDRESS + "/user/password";
    const response = await axios.put(url, { email, newPassword });

    if (response.status === 200) {
      setTimeout(() => {
        alert('Senha alterada!');
        navigate("/login");
      }, 2000);
    }
  } catch (error) {
    alert('Senha não alterada!');
    console.error(error);
  }
}