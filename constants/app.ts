import type { Message } from 'message';

import { icons } from './icon';

export const messages: Message[] = [
  // {
  //   avatarUrl:
  //     'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
  //   username: 'Clarzi',
  //   location: 'San Antonio, Philippines',
  //   flag: 'https://flagcdn.com/w20/ph.png',
  //   time: '15:57',
  // },
  // {
  //   avatarUrl:
  //     'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
  //   username: 'Jonathan',
  //   location: 'San Antonio, Philippines',
  //   flag: 'https://flagcdn.com/w20/ph.png',
  //   time: '15:57',
  // },
  // {
  //   avatarUrl:
  //     'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
  //   username: 'Robert',
  //   location: 'San Antonio, Philippines',
  //   flag: 'https://flagcdn.com/w20/ph.png',
  //   time: '15:57',
  // },
];

export const availableLanguages = [
  'Tiếng Việt',
  '中文',
  '한국어',
  'English',
  'Türkçe',
  'ภาษาไทย',
  'Bahasa Indonesia',
  'Español',
  'Français',
  'Deutsch',
  'Italiano',
];

export const locations = [
  { name: 'Sun', icon: icons.solar_sun },
  { name: 'Jupiter', icon: icons.solar_jupiter },
  { name: 'Neptune', icon: icons.solar_neptune },
  { name: 'Venus', icon: icons.solar_venus },
  { name: 'Mars', icon: icons.solar_mars },
  { name: 'Mecury', icon: icons.solar_mecury },
  { name: 'Uranus', icon: icons.solar_uranus },
  { name: 'Saturn', icon: icons.solar_saturn },
];
