// This file defines TypeScript types and interfaces used throughout the application.

export type Phrase = {
  text: string;
  isSong: boolean; // true if it's a Taylor Swift song, false if it's a Bath and Body Works scent
};

export type VoteResult = {
  phrase: Phrase;
  votes: number; // Number of votes for the phrase
};

export interface GameState {
  phrases: Phrase[];
  currentPhraseIndex: number;
  score: number;
  totalVotes: number;
}