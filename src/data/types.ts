export type TInfo = {
  id: string;
  name: {
    pattern: RegExp;
    msg: string[];
    value: string;
    isInVaild: boolean;
  };
};

export type TPerson = {
  name: string;
  gender: {
    gender: string;
    probability: number;
    count: number;
  };
  nationality: {
    country_id: string;
    probability: number;
  }[];
};
