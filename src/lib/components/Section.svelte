<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section class="section">
	<h2 class="section-title">{title}</h2>
	<div class="section-content">
		{@render children()}
	</div>
</section>

<style>
	.section-title {
		font-size: var(--text-lg);
		color: var(--color-text-bright);
	}

	.section-content :global(p) {
		margin-bottom: var(--space-md);
	}

	.section-content :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
