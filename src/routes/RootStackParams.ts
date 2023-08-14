export enum Routes {
  Home = 'Home',
  PostDetails = 'PostDetails',
}

export type RootStackParams = {
  navigate(arg0: string, props?: unknown): void;
  [Routes.Home]: undefined;
  [Routes.PostDetails]: any;
};
