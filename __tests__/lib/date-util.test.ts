import { formatUtcDateTimeToJst } from '../../lib/date-util';

describe('DateUtil', () => {
  describe('formatUtcDateTimeToJst()', () => {
    it('return JST datetime string', () => {
      expect(formatUtcDateTimeToJst('2021-09-12T12:34:56Z')).toBe(
        '2021/9/12 21:34:56'
      );
    });

    describe('When set not datetime string', () => {
      it('return empty string', () => {
        expect(formatUtcDateTimeToJst('invalid date')).toBe('');
      });
    });
  });
});
