import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}; // aqui vou colocar todas as informacoes do episodio pro player em si e nao todas as infos de um episodio

type PlayerContextData = {
  episodesList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData); // o context nao e o valor com que o contexto vai iniciar, eh so o formato dos dados que o conexto vai iniciar
