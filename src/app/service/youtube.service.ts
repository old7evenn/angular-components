import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './interfaces/card.interface';
import { API_KEY, API_URL } from '@app/constants/constants';


interface Videos {
  kind: string
  etag: string
  items: Card[]
}

type Params = Record<string, string | number | undefined>;

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private readonly http: HttpClient) {}
  
  params: Partial<Params> = {
    param: 'videos',
    part: 'snippet,contentDetails,statistics',
    key: API_KEY,
    chart: 'mostPopular',
    maxResults: '15',
  };

  async getVideos(): Promise<Card[]> {
    try {
      const response: Videos = await (await fetch(this.generateUrl(this.params))).json();
      return response.items;
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw new Error('Failed to fetch videos');
    }
  }

  async getDetailsVideo(id: string): Promise<Card> {    
    try {
      const responce: Videos = await (await fetch(this.generateUrl(this.params))).json()
      const video = responce.items.find((item) => item.id === id)
      if (video) {
        return video;
      } else {
        throw new Error('Video not found')
      }
    }  catch (error) {
      console.error('Error fetching video details:', error);
      throw new Error('Failed to fetch video details');
    }
  }

  findFirst<T>(array: T[], predicate: (value: T) => boolean): T | undefined {
    return array.find(predicate);
  }

  generateUrl(params: Params): string {
    return Object.keys(params).reduce((acc, key) => {
      const value = params[key];
      if (value !== undefined) {
        if (key === 'param') {
          return `${acc}${value}?`;
        }
        return `${acc}&${key}=${value}`;
      }
      return acc;
    }, API_URL);
  }
}
