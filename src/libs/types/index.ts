export type State = {
  loading: boolean;
  data: null;
  error: any;
};

export interface IBoard {
  id: number;
  title: string;
  number: number;
  user: {
    id: number;
    login: string;
    avatar_url?: string;
  };
  state: string;
  comments: number;
  created_at: string;
  body: string;
}
