<script lang="ts">
    import { button } from '$lib/styles/buttons';
    import type { Theme } from '@stylexjs/stylex';
    import { styles } from './page-styles';
    import { accentPrimary } from '$lib/styles/theme/accents/primary.stylex';
    import { accentSecondary } from '$lib/styles/theme/accents/secondary.stylex';
    import { accentTertiary } from '$lib/styles/theme/accents/tertiary.stylex';
    import { accentPositive } from '$lib/styles/theme/accents/positive.stylex';
    import { accentNegative } from '$lib/styles/theme/accents/negative.stylex';
    import { accentWarning } from '$lib/styles/theme/accents/warning.stylex';

    let type: 'solid' | 'outline' | 'ghost' | 'minimal' = $state('solid');
    let theme: Theme<any> | undefined = $state(undefined);
    let disabled = $state(false);
</script>

{#snippet buttons(type: StyleXAttr, scheme: StyleXAttr)}
    <div stylex={[scheme, styles.buttons]}>
        <button {disabled} stylex={[theme, type, button.size.xl]}>CLICK ME</button>
        <button {disabled} stylex={[theme, type, button.size.lg]}>CLICK ME</button>
        <button {disabled} stylex={[theme, type]}>CLICK ME</button>
        <button {disabled} stylex={[theme, type, button.size.sm]}>CLICK ME</button>
        <button {disabled} stylex={[theme, type, button.size.xs]}>CLICK ME</button>
    </div>
{/snippet}

<div stylex={styles.container}>
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
