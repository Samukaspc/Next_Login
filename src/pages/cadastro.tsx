import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useSession, getSession, signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Cadastro() {
  const { push } = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log("Dados:", data);

  const InputValue = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

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
    <section className="flex items-center justify-center h-[100vh]">
      <div className="max-w-lg w-full bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700rounded-md">
        <div className="flex justify-center">
          <FaRobot className="text-4xl" />
        </div>
        <h2 className="m-[1rem] font-extrabold text-[30px] text-center">Cadastro</h2>
        <form
          action=""
          autoComplete="off"
          className="flex flex-col gap-2 w-[100%] max-w-[100%]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              className="p-[10px] rounded"
              onChange={InputValue}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              className="p-[10px]  rounded"
              onChange={InputValue}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              className="p-[10px]  rounded"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Salvar
            </button>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Voltar
            </button>
          </div>
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
        destination: "/",
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
