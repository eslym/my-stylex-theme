<script lang="ts" module>
    export const styles = stylex.create({
        controls: {
            padding: `calc(${baseValue.lengthFixed} * 4)`,
            backgroundColor: radixColors.surface1,
            display: 'flex',
            flexDirection: 'row',
            gap: `calc(${baseValue.lengthFixed} * 2)`,
            alignItems: 'center',
            color: radixColors.surface12
        },
        schemeLight: {
            colorScheme: 'light'
        },
        schemeDark: {
            colorScheme: 'dark'
        }
    });
</script>

<script lang="ts">
    import { button } from '$lib/styles/buttons';
    import { accentPrimary } from '$lib/styles/theme/accents/primary.stylex';
    import { accentSecondary } from '$lib/styles/theme/accents/secondary.stylex';
    import { accentTertiary } from '$lib/styles/theme/accents/tertiary.stylex';
    import { accentPositive } from '$lib/styles/theme/accents/positive.stylex';
    import { accentNegative } from '$lib/styles/theme/accents/negative.stylex';
    import { accentWarning } from '$lib/styles/theme/accents/warning.stylex';
    import stylex from '@stylexjs/stylex';
    import { radixColors } from '$lib/styles/theme/radix.stylex';
    import { baseValue } from '$lib/styles/values.stylex';
    import { checkbox, switches } from '$lib/styles/checkboxes';
    import { config } from '$lib/states.svelte';

    let theme = $derived(config.theme);
    let type = $derived(config.buttonType);
    let disabled = $derived(config.disabled);
</script>

<div
    stylex-create={{
        width: '100vw',
        height: stylex.firstThatWorks('100dvh', '100vh'),
        backgroundColor: radixColors.surface2,
        color: radixColors.surface12,
        padding: `calc(${baseValue.lengthFixed} * 4)`,
        gap: `calc(${baseValue.lengthFixed} * 4)`,
        display: 'flex',
        flexDirection: 'column'
    }}
>
    <div>
        <select bind:value={config.theme}>
            <option value={null}>Default</option>
            <option value={accentPrimary}>Primary</option>
            <option value={accentSecondary}>Secondary</option>
            <option value={accentTertiary}>Tertiary</option>
            <option value={accentPositive}>Positive</option>
            <option value={accentNegative}>Negative</option>
            <option value={accentWarning}>Warning</option>
        </select>
        <select bind:value={config.buttonType}>
            <option value="solid">Solid</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
            <option value="minimal">Minimal</option>
        </select>
        <label>
            <input
                stylex-attrs={[theme, switches.styles]}
                type="checkbox"
                bind:checked={config.disabled}
            />
            Disabled
        </label>
    </div>
    {#each [styles.schemeLight, styles.schemeDark] as scheme}
        <div stylex-attrs={[scheme, styles.controls]}>
            <button {disabled} stylex-attrs={[theme, button[type], button.size.xl]}>
                CLICK ME
            </button>
            <button {disabled} stylex-attrs={[theme, button[type], button.size.lg]}>
                CLICK ME
            </button>
            <button {disabled} stylex-attrs={[theme, button[type]]}> CLICK ME </button>
            <button {disabled} stylex-attrs={[theme, button[type], button.size.sm]}>
                CLICK ME
            </button>
            <button {disabled} stylex-attrs={[theme, button[type], button.size.xs]}>
                CLICK ME
            </button>
        </div>
    {/each}
    {#each [styles.schemeLight, styles.schemeDark] as scheme}
        <div stylex-attrs={[scheme, styles.controls]}>
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[theme, checkbox.styles, checkbox.lg]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[theme, checkbox.styles]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[theme, checkbox.styles, checkbox.sm]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[theme, switches.styles, switches.lg]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[theme, switches.styles]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[theme, switches.styles, switches.sm]}
            />
        </div>
    {/each}
</div>
