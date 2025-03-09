import type { button } from '$lib/styles/buttons';
import type { radixAccent, radixSurface } from '$lib/styles/theme/radix.stylex';
import type { Theme } from '@stylexjs/stylex';

let accent: Theme<typeof radixAccent> | null = $state(null);
let surface: Theme<typeof radixSurface> | null = $state(null);

let buttonType: Exclude<keyof typeof button, 'size'> = $state('solid');

let disabled = $state(false);

let checked = $state(false);

export const config = {
    get accent() {
        return accent;
    },
    set accent(value: Theme<typeof radixAccent> | null) {
        accent = value;
    },
    get surface() {
        return surface;
    },
    set surface(value: Theme<typeof radixSurface> | null) {
        surface = value;
    },
    get buttonType() {
        return buttonType;
    },
    set buttonType(value: typeof buttonType) {
        buttonType = value;
    },
    get disabled() {
        return disabled;
    },
    set disabled(value: boolean) {
        disabled = value;
    },
    get checked() {
        return checked;
    },
    set checked(value: boolean) {
        checked = value;
    }
};
