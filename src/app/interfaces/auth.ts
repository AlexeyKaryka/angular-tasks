export interface LoginData {
   name: string;
   password: string;
}

export interface DataWithToken {
   token: string;
}

export interface UserInfo {
   id: string;
   fakeToken: string;
   name: {
      first: string;
      last: string;
   };
   login: string;
   password: string;
}
