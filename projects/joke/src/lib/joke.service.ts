import { Injectable } from '@angular/core';
import axios from 'axios';

type JokeResponse = {
  id: string;
  joke: string;
};

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  async getJoke() {
    try {
      const response: JokeResponse = await axios.get(
        'https://icanhazdadjoke.com/api',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      return response.joke;
    } catch (error) {
      throw error;
    }
  }
}
