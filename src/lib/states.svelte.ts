import type { button } from '$lib/styles/buttons';
import { accentNegative } from '$lib/styles/theme/accents/negative.stylex';
import { accentPositive } from '$lib/styles/theme/accents/positive.stylex';
import { accentPrimary } from '$lib/styles/theme/accents/primary.stylex';
import { accentSecondary } from '$lib/styles/theme/accents/secondary.stylex';
import { accentTertiary } from '$lib/styles/theme/accents/tertiary.stylex';
import { accentWarning } from '$lib/styles/theme/accents/warning.stylex';
import type { radixColors } from '$lib/styles/theme/radix.stylex';
import type { Theme } from '@stylexjs/stylex';

let theme: Theme<typeof radixColors> | null = $state(null);

let buttonType: Exclude<keyof typeof button, 'size'> = $state('solid');

let disabled = $state(false);

let checked = $state(false);

export const themes: Record<string, Theme<typeof radixColors> | null> = {
    default: null,
    primary: accentPrimary,
    secondary: accentSecondary,
    tertiary: accentTertiary,
    positive: accentPositive,
    negative: accentNegative,
    warning: accentWarning
};

export const config = {
    get theme() {
        return theme;
    },
    set theme(value: Theme<typeof radixColors> | null) {
        theme = value;
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
