export const formatUtcDateTimeToJstDate = (dateTime: string): string => {
  const date = new Date(dateTime);
  const jstDateTime = date.toLocaleDateString('ja-JP');
  if (jstDateTime === 'Invalid Date') {
    return '';
  }

  return jstDateTime;
};
