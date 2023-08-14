export enum Routes {
  Home = 'Home',
  PostDetails = 'PostDetails',
}

export type RootStackParams = {
  navigate(arg0: string, props?: unknown): void;
  [Routes.Home]: any;
  [Routes.PostDetails]: any;
};
