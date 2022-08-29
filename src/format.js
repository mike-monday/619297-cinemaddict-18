import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const formatYear = (date, template = 'YYYY') =>
  dayjs(date).format(template);


export const formatDuration = (minutes, template = 'H[h] mm[m]') =>
  dayjs.duration(minutes, 'minutes').format(template);
