function ChatListSearch() {
  return (
    <form className="flex justify-center px-6 mb-4">
      <input
        id="searchChat"
        type="text"
        className="bg-primary border border-secondary w-full rounded-sm py-2 px-3 outline-none focus:border-blue focus:border"
        placeholder="Rechercher une discussion"
      />
    </form>
  );
}

export default ChatListSearch;
