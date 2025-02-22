import type { CompiledStyles, StyleXArray, InlineStyles } from '@stylexjs/stylex/lib/StyleXTypes';

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
        stylex?: StyleXAttr | readonly StyleXAttr[];
    }
}

export {};
