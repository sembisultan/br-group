import axios from 'axios';
import { storyType } from './types/story';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storiesList = `${baseUrl}newstories.json`;
export const items = `${baseUrl}item/`;

export const getItem = async (id: number) => {
  const result = await axios.get<storyType>(items + id + '.json');
  return result;
}

export const getStoriesList = async ()  => {
  const result = await axios.get<number[]>(storiesList);
  return result;
};