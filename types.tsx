/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";



declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface TimerConfig {
  // id: number;
  minutes: number;
  seconds: number;
}

export type RootStackParamList = {
  Root: undefined;
  CreateTimers: { title: string };
  RunTimers: { timers: TimerConfig[] },
  NotFound: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
