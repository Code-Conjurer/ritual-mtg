<script lang="ts">
	interface Props {
		title: string;
		type: string;
		text: string;
	}

	let { title, type, text }: Props = $props();
</script>

<div class="card">
	<div class="card-inner">
		<div class="card-title">{title}</div>
		<div class="card-art"></div>
		<div class="card-type">{type}</div>
		<div class="card-text">{text}</div>
	</div>
</div>

<style>
	.card {
		aspect-ratio: 7 / 10;
		width: 100%;
		background: var(--color-bg);
		border: 2px solid var(--color-text);
		padding: var(--space-sm);
	}

	.card-inner {
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: var(--space-sm);
	}

	.card-title {
		border: 1px solid var(--color-text);
		padding: var(--space-xs) var(--space-sm);
		font-size: var(--text-sm);
		color: var(--color-text-bright);
	}

	.card-art {
		flex: 1;
		border: 1px solid var(--color-text);
		min-height: 0;
	}

	.card-type {
		border: 1px solid var(--color-text);
		padding: var(--space-xs) var(--space-sm);
		font-size: var(--text-sm);
		color: var(--color-text-bright);
	}

	.card-text {
		border: 1px solid var(--color-text);
		padding: var(--space-sm);
		font-size: var(--text-xs);
		color: var(--color-text);
		min-height: 25%;
	}
</style>
