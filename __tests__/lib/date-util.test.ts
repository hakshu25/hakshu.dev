import { formatUtcDateTimeToJstDate } from '../../app/_lib/date-util';

describe('DateUtil', () => {
  describe('formatUtcDateTimeToJstDate()', () => {
    it('return JST date string', () => {
      expect(formatUtcDateTimeToJstDate('2021-09-12T12:34:56Z')).toBe(
        '2021/9/12'
      );
    });

    describe('When set not datetime string', () => {
      it('return empty string', () => {
        expect(formatUtcDateTimeToJstDate('invalid date')).toBe('');
      });
    });
  });
});
