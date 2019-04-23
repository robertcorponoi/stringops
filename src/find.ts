'use strict'

/**
 * Count the number of occurances that a substring is found
 * in a string.
 *
 * @version 0.1.0
 *
 * @param {string} haystack The string to search through.
 * @param {string} needle The substring to search for.
 *
 * @returns {number} Returns the number of times the substring was found in the string.
 */
export function count(haystack: string, needle: string): number {

  let count: number = 0;

  let results: boolean = true;

  let lastIndex: number = 0;

  while (results) {

    const index: number = haystack.indexOf(needle, lastIndex);

    if (index > -1) {

      count++;

      lastIndex = index + 1;

    } else {

      results = false;

    }

  }

  return count;

}

/**
 * Counts the number of times each character appears in the string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to count characters of.
 *
 * @returns {Object} Returns an object with each key being a character and the value being its count.
 */
export function countChars(str: string): any {

  const count: any = new Object(null);

  for (const character of str) {

    if (!count[character]) count[character] = 0;

    count[character]++;

  }

  return count;

}

/**
 * Find the position of the nth occurance of a substring in a string.
 *
 * @version 0.1.0
 *
 * @param {string} str The string to search for the substring.
 * @param {string} sub The substring to searh for.
 * @param {number} occurance Determines which occurance of the substring will be returned.
 *
 * @returns {number} Returns the index of the substring.
 */
export function nthIndexOf(str: string, sub: string, occurance: number): (number | undefined) {

  let lastIndex: number = 0;

  for (let i = 0; i < occurance; i++) {

    const index = str.indexOf(sub, lastIndex);

    if (index == -1) return;

    lastIndex = index + 1;

  }

  return lastIndex;

}

/**
 * Calculates the Levenshtein distance between two strings.
 *
 * Reference: https://gist.github.com/andrei-m/982927
 *
 * @version 0.1.0
 *
 * @param {string} str1 The first string.
 * @param {string} str2 The second string.
 *
 * @returns {number} Returns the number of operations required to match the two strings.
 */
export function levenshtein(str1: string, str2: string): number {

  if (str1.length == 0) return str2.length;
  if (str2.length == 0) return str1.length;

  const table = [];

  for (let i = 0; i <= str2.length; ++i) table[i] = [i];

  for (let j = 0; j <= str1.length; ++j) table[0][j] = j;

  for (let i = 1; i <= str2.length; ++i) {

    for (let j = 1; j <= str1.length; ++j) {

      if (str2.charAt(i - 1) == str1.charAt(j - 1)) {

        table[i][j] = table[i - 1][j - 1];

      } else {

        table[i][j] = 
          Math.min(
            table[i - 1][j - 1] + 1,
            Math.min(
              table[i][j - 1] + 1,
              table[i - 1][j] + 1
            )
          )

      }

    }

  }

  return table[str2.length][str1.length];

}