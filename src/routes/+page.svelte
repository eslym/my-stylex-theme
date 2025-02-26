<script lang="ts" module>
    export const styles = stylex.create({
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
</script>

<script lang="ts">
    import { button } from '$lib/styles/buttons';
    import type { Theme } from '@stylexjs/stylex';
    import { accentPrimary } from '$lib/styles/theme/accents/primary.stylex';
    import { accentSecondary } from '$lib/styles/theme/accents/secondary.stylex';
    import { accentTertiary } from '$lib/styles/theme/accents/tertiary.stylex';
    import { accentPositive } from '$lib/styles/theme/accents/positive.stylex';
    import { accentNegative } from '$lib/styles/theme/accents/negative.stylex';
    import { accentWarning } from '$lib/styles/theme/accents/warning.stylex';
    import stylex from '@stylexjs/stylex';
    import { radixColors } from '$lib/styles/theme/radix.stylex';
    import { baseValue } from '$lib/styles/values.stylex';

    let type: 'solid' | 'outline' | 'ghost' | 'minimal' = $state('solid');
    let theme: Theme<any> | undefined = $state(undefined);
    let disabled = $state(false);
</script>

{#snippet buttons(type: StyleXAttr, scheme: StyleXAttr)}
    <div
        stylex-attrs={[scheme]}
        stylex-create={{
            padding: `calc(${baseValue.lengthFixed} * 4)`,
            backgroundColor: radixColors.surface1,
            display: 'flex',
            flexDirection: 'row',
            gap: `calc(${baseValue.lengthFixed} * 2)`,
            alignItems: 'center'
        }}
    >
        <button {disabled} stylex-attrs={[theme, type, button.size.xl]}>CLICK ME</button>
        <button {disabled} stylex-attrs={[theme, type, button.size.lg]}>CLICK ME</button>
        <button {disabled} stylex-attrs={[theme, type]}>CLICK ME</button>
        <button {disabled} stylex-attrs={[theme, type, button.size.sm]}>CLICK ME</button>
        <button {disabled} stylex-attrs={[theme, type, button.size.xs]}>CLICK ME</button>
    </div>
{/snippet}

<div
    stylex-create={{
        width: '100vw',
        height: stylex.firstThatWorks('100dvh', '100vh'),
        backgroundColor: radixColors.surface2,
        padding: `calc(${baseValue.lengthFixed} * 4)`,
        gap: `calc(${baseValue.lengthFixed} * 4)`,
        display: 'flex',
        flexDirection: 'column'
    }}
>
    <div>
        <select bind:value={theme}>
            <option value={undefined}>Default</option>
            <option value={accentPrimary}>Primary</option>
            <option value={accentSecondary}>Secondary</option>
            <option value={accentTertiary}>Tertiary</option>
            <option value={accentPositive}>Positive</option>
            <option value={accentNegative}>Negative</option>
            <option value={accentWarning}>Warning</option>
        </select>
        <select bind:value={type}>
            <option value="solid">Solid</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
            <option value="minimal">Minimal</option>
        </select>
        <label>
            <input type="checkbox" bind:checked={disabled} />
            Disabled
        </label>
    </div>
    {@render buttons(button[type], styles.schemeLight)}
    {@render buttons(button[type], styles.schemeDark)}
</div>
