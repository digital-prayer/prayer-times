import { Ayah } from './ayah';

/**
 *
 */
export interface Surah {

  englishName?: string;
  englishNameTranslation?: string;
  revelationType?: string;
  number?: number;
  numberOfAyahs?: number;
  ayahs: Array<Ayah>;
}
