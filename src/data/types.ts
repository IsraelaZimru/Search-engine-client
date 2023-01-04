export type TInfo = {
  _id?: string;
  name: {
    pattern: RegExp;
    msg: string[];
    value: string;
    isInVaild: boolean;
  };
};

export type TPerson = {
  _id?: string;
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
