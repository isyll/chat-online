import { Message } from '../types/Message';

type Order = 'asc' | 'desc';

export function filterMessagesByDate(msgs: Message[], order: Order): Message[] {
  const sorted = msgs.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  if (order === 'asc') {
    return sorted;
  } else {
    return sorted.reverse();
  }
}
