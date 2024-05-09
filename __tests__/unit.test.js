// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('checks if string is a phone number 1', () => {
  expect(isPhoneNumber('123-456-7891')).toBe(true);
});

test('checks if string is an email 1', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});

test('checks if string is a strong password 1', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('checks if string is a date 1', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('checks if string is a hex color 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});


test('checks if string is a phone number 2', () => {
  expect(isPhoneNumber('313-456-7891')).toBe(true);
});

test('checks if string is an email 2', () => {
  expect(isEmail('def@gmail.com')).toBe(true);
});

test('checks if string is a strong password 2', () => {
  expect(isStrongPassword('def123')).toBe(true);
});

test('checks if string is a date 2', () => {
  expect(isDate('01/01/2024')).toBe(true);
});

test('checks if string is a hex color 2', () => {
  expect(isHexColor('#DDDDDD')).toBe(true);
});


test('checks if string is NOT a phone number 1', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});

test('checks if string is NOT an email 1', () => {
  expect(isEmail('abcgmail.com')).toBe(false);
});

test('checks if string is NOT a strong password 1', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});

test('checks if string is NOT a date 1', () => {
  expect(isDate('101/01/2000')).toBe(false);
});

test('checks if string is NOT a hex color 1', () => {
  expect(isHexColor('#1FFFFFF')).toBe(false);
});


test('checks if string is NOT a phone number 2', () => {
  expect(isPhoneNumber('def')).toBe(false);
});

test('checks if string is NOT an email 2', () => {
  expect(isEmail('defgmail.com')).toBe(false);
});

test('checks if string is NOT a strong password 2', () => {
  expect(isStrongPassword('1def123')).toBe(false);
});

test('checks if string is NOT a date 2', () => {
  expect(isDate('01/01/20242')).toBe(false);
});

test('checks if string is NOT a hex color 2', () => {
  expect(isHexColor('#1DDDDDD')).toBe(false);
});