/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */



declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface TimerConfig {
  id: number;
  minutes: number;
  seconds: number;
}

export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
};
