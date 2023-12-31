function ChatListSearch() {
  return (
    <form className="flex justify-center px-6 mb-4">
      <input
        id="searchChat"
        type="text"
        className="chat-search-input w-full rounded-sm"
        placeholder="Rechercher une discussion"
      />
    </form>
  );
}

export default ChatListSearch;
