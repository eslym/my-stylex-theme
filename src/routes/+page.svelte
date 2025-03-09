<script lang="ts" module>
    export const styles = stylex.create({
        controls: {
            padding: `calc(${baseValue.lengthFixed} * 4)`,
            backgroundColor: radixSurface.color1,
            display: 'flex',
            flexDirection: 'row',
            gap: `calc(${baseValue.lengthFixed} * 2)`,
            alignItems: 'center',
            color: radixSurface.color12
        },
        schemeLight: {
            colorScheme: 'light',
            color: radixSurface.color12
        },
        schemeDark: {
            colorScheme: 'dark',
            color: radixSurface.color12
        },
        box: {
            width: '50px',
            height: '50px',
            minWidth: '50px',
            minHeight: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 700
        }
    });
</script>

<script lang="ts">
    import { button } from '$lib/styles/buttons';
    import * as stylex from '@stylexjs/stylex';
    import { baseValue } from '$lib/styles/values.stylex';
    import { checkbox, switches } from '$lib/styles/checkboxes';
    import { config } from '$lib/states.svelte';
    import { accentPrimary } from '$lib/styles/theme/schemes/accent/primary.stylex';
    import { accentSecondary } from '$lib/styles/theme/schemes/accent/secondary.stylex';
    import { accentPositive } from '$lib/styles/theme/schemes/accent/positive.stylex';
    import { accentNegative } from '$lib/styles/theme/schemes/accent/negative.stylex';
    import { accentWarning } from '$lib/styles/theme/schemes/accent/warning.stylex';
    import { surfaceNegative } from '$lib/styles/theme/schemes/surface/negative.stylex';
    import { surfacePositive } from '$lib/styles/theme/schemes/surface/positive.stylex';
    import { surfacePrimary } from '$lib/styles/theme/schemes/surface/primary.stylex';
    import { surfaceSecondary } from '$lib/styles/theme/schemes/surface/secondary.stylex';
    import { surfaceWarning } from '$lib/styles/theme/schemes/surface/warning.stylex';
    import { radixAccent, radixSurface } from '$lib/styles/theme/radix.stylex';

    let theme = $derived([config.accent, config.surface]);
    let type = $derived(config.buttonType);
    let disabled = $derived(config.disabled);
</script>

<div
    stylex-create={{
        width: '100vw',
        height: stylex.firstThatWorks('100dvh', '100vh'),
        backgroundColor: radixSurface.color2,
        color: radixSurface.color12,
        padding: `calc(${baseValue.lengthFixed} * 4)`,
        gap: `calc(${baseValue.lengthFixed} * 4)`,
        display: 'flex',
        flexDirection: 'column'
    }}
>
    <div>
        <select bind:value={config.accent}>
            <option value={null}>Default</option>
            <option value={accentPrimary}>Primary</option>
            <option value={accentSecondary}>Secondary</option>
            <option value={accentPositive}>Positive</option>
            <option value={accentNegative}>Negative</option>
            <option value={accentWarning}>Warning</option>
        </select>
        <select bind:value={config.surface}>
            <option value={null}>Default</option>
            <option value={surfacePrimary}>Primary</option>
            <option value={surfaceSecondary}>Secondary</option>
            <option value={surfacePositive}>Positive</option>
            <option value={surfaceNegative}>Negative</option>
            <option value={surfaceWarning}>Warning</option>
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
        <div>
            <div
                stylex-attrs={[theme, scheme, styles.controls]}
                stylex-create-at={Infinity}
                stylex-create={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 50px)'
                }}
            >
                {#each [radixAccent, radixSurface] as scale}
                    {#each { length: 12 }, i}
                        {@const t = i < 8 ? 12 : 1}
                        <div
                            stylex-attrs={[styles.box]}
                            style:background-color={(scale as any)[`color${i + 1}`]}
                        >
                            <span style:color={(scale as any)[`color${t}`]}>{i + 1}</span>
                        </div>
                    {/each}
                    {#each { length: 12 }, i}
                        {@const t = i < 8 ? 12 : 1}
                        <div
                            stylex-attrs={[styles.box]}
                            style:background-color={(scale as any)[`alpha${i + 1}`]}
                        >
                            <span style:color={(scale as any)[`color${t}`]}>{i + 1}</span>
                        </div>
                    {/each}
                {/each}
            </div>
        </div>
    {/each}
    {#each [styles.schemeLight, styles.schemeDark] as scheme}
        <div stylex-attrs={[scheme, theme, styles.controls]}>
            <button {disabled} stylex-attrs={[button[type], button.size.xl]}> CLICK ME </button>
            <button {disabled} stylex-attrs={[button[type], button.size.lg]}> CLICK ME </button>
            <button {disabled} stylex-attrs={[button[type]]}> CLICK ME </button>
            <button {disabled} stylex-attrs={[button[type], button.size.sm]}> CLICK ME </button>
            <button {disabled} stylex-attrs={[button[type], button.size.xs]}> CLICK ME </button>
        </div>
    {/each}
    {#each [styles.schemeLight, styles.schemeDark] as scheme}
        <div stylex-attrs={[scheme, theme, styles.controls]}>
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[switches.styles, switches.lg]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[switches.styles]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[switches.styles, switches.sm]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[checkbox.styles, checkbox.lg]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[checkbox.styles]}
            />
            <input
                type="checkbox"
                bind:checked={config.checked}
                {disabled}
                stylex-attrs={[checkbox.styles, checkbox.sm]}
            />
            <span
                role="checkbox"
                aria-checked="mixed"
                aria-disabled={disabled}
                stylex-attrs={[checkbox.styles, checkbox.lg]}
            ></span>
            <span
                role="checkbox"
                aria-checked="mixed"
                aria-disabled={disabled}
                stylex-attrs={[checkbox.styles]}
            ></span>
            <span
                role="checkbox"
                aria-checked="mixed"
                aria-disabled={disabled}
                stylex-attrs={[checkbox.styles, checkbox.sm]}
            ></span>
        </div>
    {/each}
</div>
