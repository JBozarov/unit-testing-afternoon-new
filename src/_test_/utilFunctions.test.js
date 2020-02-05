

import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import { shortText, longText, posts, users } from './_data_/testData'

test('will not alter if length is over 100', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('will', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

test('word counting', () => {
    expect(wordCount(posts)).toBe(233)
})

test('has display name property', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('remove check', () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
})