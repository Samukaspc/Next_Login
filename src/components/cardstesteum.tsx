import TextArea from "./textarea";

export default function CardsTeste() {
  return (
    <div className="w-full px-4 md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Cadastrar mensagem
        </h5>
        <div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mensagem do menu
            </label>
            <TextArea />
            <div className="flex items-center h-5"></div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mensagem de atendimento inválido
            </label>
            <TextArea />
            <div className="flex items-center h-5"></div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seu nome
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Qual é seu nome"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
