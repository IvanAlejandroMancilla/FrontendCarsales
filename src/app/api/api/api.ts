export * from './character.service';
import { CharacterService } from './character.service';
export * from './episode.service';
import { EpisodeService } from './episode.service';
export * from './location.service';
import { LocationService } from './location.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [CharacterService, EpisodeService, LocationService, WeatherForecastService];
