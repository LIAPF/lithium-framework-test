import {Context, createContext} from '@lit/context';

export const simpleContext: Context<symbol, unknown> = createContext(Symbol('my-context'));