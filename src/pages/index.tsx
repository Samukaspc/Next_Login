import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";
import { FormEventHandler, useRef, useState } from "react";
import Cadastro from "./cadastro";
import { Button } from 'antd';
import { FaRobot } from "react-icons/fa";
import Robot from "../../public/robot.svg";
import Link from "next/link";

export default function Home() {
  const { push } = useRouter();
  const linkRef = useRef(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const InputValue = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  const handleLinkClick = () => {
    push("/cadastro");
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.url) {
      return push(result?.url);
    }
  };

  return (
    <section className="flex items-center justify-center h-[100vh] bg-gradient-to-r from-emerald-100 from-10% via-sky-200 via-30% to- to-90%  ">
      <div className="
      max-w-lg w-full border-gray-200  shadow sm:p-6 md:p-8 bg-white bg-opacity-100   rounded-md">
        <div className="flex justify-center">
          <FaRobot className="text-4xl" />
        </div>

        <h2 className="m-[1rem] font-extrabold text-[30px] text-center">
          Faça o Login
        </h2>
        <form
          action=""
          autoComplete="off"
          className="flex flex-col gap-2 w-[100%] max-w-[100%]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              className="p-[10px] border border-black rounded"
              onChange={InputValue}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              className="p-[10px] border-black rounded border "
              onChange={InputValue}
            />
          </div>
          <div  >
            <p>
              Não tem conta?{" "}
              <a ref={linkRef} onClick={handleLinkClick} style={{ color: '#3db0f7' }}  >
                Cadastre-se!
              </a>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Link href="/dashboard">
            <button type="button" style={{ backgroundColor: "blue", width: '150px', padding: '10px', color: 'white', border: 'none', borderRadius: '5px' }}>Login</button>
          </Link>
          </div>



          {/* <fieldset className="border-t border-slate-50 mt-[10px]">
            <legend className="mx-auto px-4 text-white text-1xl italic ">
              ou
            </legend>
            <div className="text-white pt-4">Acesse com o seu:</div>
          </fieldset> */}
          {/* <button
            type="button"
            className=" justify-center text-white bg-blue-700 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            onClick={() => signIn("github")}
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Github
          </button> */}
        </form>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
