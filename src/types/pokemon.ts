export interface PartialPokemon {
  name: string;
  url: string;
}

export default interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface Form {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: {
    name: string;
    url: string;
  };
  move_learn_method: {
    name: string;
    url: string;
  };
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
    };
  };
  versions: {
    "generation-i": {
      "red-blue": {
        back_default: string;
        back_gray: string;
        front_default: string;
        front_gray: string;
      };
      yellow: {
        back_default: string;
        back_gray: string;
        front_default: string;
        front_gray: string;
      };
    };
    "generation-ii": {
      crystal: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    "generation-iii": {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      "firered-leafgreen": {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      "ruby-sapphire": {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    "generation-iv": {
      "diamond-pearl": {
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "heartgold-soulsilver": {
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      platinum: {
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
    };
    "generation-v": {
      "black-white": {
        animated: {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
    };
    "generation-vi": {
      "omegaruby-alphasapphire": {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "x-y": {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
    };
    "generation-vii": {
      icons: {
        front_default: string;
        front_female: string | null;
      };
      "ultra-sun-ultra-moon": {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
    };
    "generation-viii": {
      icons: {
        front_default: string;
        front_female: string | null;
      };
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PastType {
  generation: {
    name: string;
    url: string;
  };
  types: Type[];
}
