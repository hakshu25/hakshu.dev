export const formatUtcDateTimeToJst = (dateTime: string): string => {
  const date = new Date(dateTime);
  const jstDateTime = date.toLocaleString('ja-JP');
  if (jstDateTime === 'Invalid Date') {
    return '';
  }

  return jstDateTime;
};
