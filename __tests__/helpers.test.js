const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});

test('format_pluralize() returns a pluralized string', () => {
  const word = "Tiger";
  const amount = 2;
  
  const word2 = "Lion";
  const amount2 = 1;

  expect(format_plural(word, amount)).toBe('Tigers');
  expect(format_plural(word2, amount2)).toBe('Lion');
});

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('http://coolstuff.com/abcdefg/');
  const url3 = format_url('http://google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});
