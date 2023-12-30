import { format, isToday, isYesterday } from 'date-fns';
import { fr } from 'date-fns/locale';
import { capitalizeWords } from './capitalizeWords';

export const formatDateDynamic = (date: Date): string => {
  if (isToday(date)) {
    return format(date, 'HH:mm');
  } else if (isYesterday(date)) {
    return 'Hier';
  } else {
    return capitalizeWords(format(date, 'd MMM yyyy', { locale: fr }));
  }
};
