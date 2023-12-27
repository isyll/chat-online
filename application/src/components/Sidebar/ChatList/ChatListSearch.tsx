function ChatListSearch() {
  return (
    <form className="flex justify-center px-6">
      <input
        type="text"
        className="chat-search-input w-full rounded-sm"
        placeholder="Rechercher une discussion"
      />
    </form>
  );
}

export default ChatListSearch;
