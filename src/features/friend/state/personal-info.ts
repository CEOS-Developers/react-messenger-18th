export interface PersonalInfoBoxProps {
  id: number;
  img: string;
  name: string;
  message: string;
  majorIn: string;
  group: {
    id: number;
    name: string;
    state: string;
  };
}
