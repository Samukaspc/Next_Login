export default function TextArea() {
  return (
    <>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-slate-200 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-white">
            <textarea
              id="comment"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-white focus:ring-0 dark:text-white dark:placeholder-black"
              placeholder="Escreva a mensagem"
              required
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}
