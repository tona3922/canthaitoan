export type TProduct = {
  _id: string;
  name: string;
  foundname: string;
  description: string;
  type: string;
  subtype: string;
  image: string;
  information: [{ noteName: string; noteDescription: string; _id: string }];
};
