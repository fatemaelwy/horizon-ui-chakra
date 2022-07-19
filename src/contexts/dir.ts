export type Switcher = {
    locale: string,
    direction: string
} 

import { createContext } from 'react';


export const DirectionContactContext = createContext<Switcher | null >(null);
export const DirectionContextProvider = DirectionContactContext.Provider;
export const DirectionContextConsumer = DirectionContactContext.Consumer;