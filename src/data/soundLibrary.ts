export type SoundCollection = {
  id: string;
  title: string;
  description: string;
  soundIds: string[];
  icon: 'music' | 'audio' | 'waves';
};

// soundIds reference data/sounds.ts so the picker here and the live timer demo
// always agree on what a sound is actually called.
export const soundCollections: SoundCollection[] = [
{
  id: 'classical',
  title: 'Public-domain classical',
  description: 'Familiar compositions, performed for calm concentration.',
  soundIds: ['gymnopedie', 'moonlight', 'canon'],
  icon: 'music'
},
{
  id: 'cinematic',
  title: 'Original cinematic',
  description: 'Original piano composed for long study blocks.',
  soundIds: ['cinematic-piano'],
  icon: 'audio'
},
{
  id: 'ambient',
  title: 'Ambient focus',
  description: 'Simple textures that soften the room without taking attention.',
  soundIds: ['rain', 'ocean', 'forest'],
  icon: 'waves'
}];