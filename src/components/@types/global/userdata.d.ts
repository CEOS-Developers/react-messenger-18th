declare module "*.json" {
  const value: any;
  export default value;
}

type UserData = {
  me: {
    userName: string;
    userID: string;
    profileImage: string;
  };
  other: {
    userName: string;
    userID: string;
    profileImage: string;
  };
};

declare const userData: UserData;

export default userData;
