export interface PersonalInfoBoxProps {
  id: number;
  img: string;
  name: string;
  message: string;
  majorIn: string;
  phoneNumber: string;
  phoneLink: string;
  email: string;
  emailLink: string;
  behanceLink: string;
  instagramLink: string;
  githubLink: string;
  group: {
    id: number;
    name: string;
    state: string;
  };
}
