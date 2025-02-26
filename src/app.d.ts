import type {
    CompiledStyles,
    StyleXArray,
    InlineStyles,
    UserAuthoredStyles
} from '@stylexjs/stylex/lib/StyleXTypes';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    type StyleXAttr = StyleXArray<
        (null | undefined | CompiledStyles) | boolean | Readonly<[CompiledStyles, InlineStyles]>
    >;

    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

declare module 'svelte/elements' {
    export interface HTMLAttributes<T> {
        ['stylex-attrs']?: StyleXAttr | readonly StyleXAttr[];
        ['stylex-create']?: UserAuthoredStyles; // if you need
    }

    export interface SVGAttributes<T> {
        ['stylex-attrs']?: StyleXAttr | readonly StyleXAttr[];
        ['stylex-create']?: UserAuthoredStyles; // if you need
    }
}

export {};
