"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True once the app has hydrated on the client, `false` during SSR.
 *
 * Implemented with `useSyncExternalStore` so hydration stays consistent
 * (server snapshot) and no `setState` is called from an effect.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
