import { radixColors } from '$lib/styles/theme/radix.stylex';
import { baseValue } from '$lib/styles/values.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
    container: {
        width: '100vw',
        height: stylex.firstThatWorks('100dvh', '100vh'),
        backgroundColor: radixColors.surface2,
        padding: `calc(${baseValue.lengthFixed} * 4)`,
        gap: `calc(${baseValue.lengthFixed} * 4)`,
        display: 'flex',
        flexDirection: 'column'
    },
    buttons: {
        padding: `calc(${baseValue.lengthFixed} * 4)`,
        backgroundColor: radixColors.surface1,
        display: 'flex',
        flexDirection: 'row',
        gap: `calc(${baseValue.lengthFixed} * 2)`,
        alignItems: 'center'
    },
    schemeLight: {
        colorScheme: 'light'
    },
    schemeDark: {
        colorScheme: 'dark'
    },
    schemeAuto: {
        colorScheme: 'light dark'
    }
});
