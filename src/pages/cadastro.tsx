import { useSession } from "next-auth/react";

export default function Cadastro() {
   return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[30px]">Cadastro</h2>
        <form
          action=""
          autoComplete="off"
          className="flex flex-col gap-2 w-[100%] max-w-[100%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">nome</label>
            <input
              type="text"
              name="name"
              className="p-[10px] bg-slate-900 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              className="p-[10px] bg-slate-900 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              className="p-[10px] bg-slate-900 rounded"
            />
            <button
              type="submit"
              className="bg-green-800 p-[10px] text-gray-50 font-semibold rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
