import { Link } from "react-router-dom";
import './../../index.css';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../Services/firebaseConfig";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
      }

      if (loading) {
        return <p>carregando...</p>;
      }
      if (user) {
        return console.log(user);
      }

  return (
    <div className='w-screen h-screen
                    flex items-center  justify-center flex-col
                    bg-slate-900'>
       <div className='bg-slate-800 rounded-lg p-20 border-2 border-red-600'>               
      <header className='flex items-center flex-col
                         mb-10'>
        <img src="https://imediacomunicacao.com.br/wp-content/uploads/Logo_Imedia.png" alt="logo" />
        <span className='pt-5 font-medium text-orange-100 text-xl font-mono'>Olá Entre com as informações de Login</span>
      </header>

      <form className='flex items-center flex-col'>
        <div className='flex flex-initial flex-col mb-4'>
        <label className='text-xl mb-2 text-orange-100 font-mono' htmlFor="E-mail"> E-mail :</label>
        <input className='flex flex-row flex-initial p-4 rounded-xl
                          w-96 h-12 border-2 border-red-600' type="text" name="Email" placeholder='usuario@gmail.com' 
                          onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='flex flex-initial flex-col'>
        <label className='text-xl mb-2 text-orange-100 font-mono' htmlFor="Senha">Senha :</label>
        <input className='flex flex-row flex-initial p-4 rounded-xl
                          w-96 h-12 border-2  border-red-600' type="password" name="Senha" placeholder='*************' 
                          onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <a className='text-lg pt-4 pb-4 text-orange-100 hover:text-red-600 font-mono' href="#">Esqueceu sua senha</a>

        <button className='flex flex-row justify-center items-center p-2
                           rounded-xl bg-red-600 w-72 h-10
                           hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-red-600 hover:font-bold'
                           onClick={handleSignIn}>
          LOGIN 
        </button>

        <div className='flex items-center justify-center gap-1 mt-2'>
          <p className='text-lg text-orange-100 font-mono'>Ainda não possui uma conta?</p>
          <Link className='text-lg text-orange-100 hover:text-red-600 font-mono' to="/register">Crie sua conta agora</Link>
        </div>
      </form>
      </div>
    </div>
  );
}
