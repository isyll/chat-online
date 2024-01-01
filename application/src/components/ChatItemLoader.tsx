import ContentLoader from 'react-content-loader';

function ChatItemLoader() {
  return (
    <li className="py-4 px-6">
      <ContentLoader
        viewBox="0 0 380 70"
        backgroundColor="var(--primary)"
        foregroundColor="var(--grey)">
        <circle cx="30" cy="30" r="30" width="2rem" />
        <rect x="80" y="17" rx="4" ry="4" width="280" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="230" height="10" />
      </ContentLoader>
    </li>
  );
}

export default ChatItemLoader;
