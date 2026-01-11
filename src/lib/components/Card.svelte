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
		max-width: 300px;
		background: var(--color-bg);
		border: 2px solid var(--color-text);
		padding: 3cqw;
		box-sizing: border-box;
		container-type: inline-size;
	}

	.card-inner {
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 2cqw;
	}

	.card-title {
		flex-shrink: 0;
		border: 1px solid var(--color-text);
		padding: 1cqw 2cqw;
		font-size: 5cqw;
		color: var(--color-text-bright);
	}

	.card-art {
		flex: 5 1 0;
		border: 1px solid var(--color-text);
		min-height: 0;
	}

	.card-type {
		flex-shrink: 0;
		border: 1px solid var(--color-text);
		padding: 1cqw 2cqw;
		font-size: 5cqw;
		color: var(--color-text-bright);
	}

	.card-text {
		flex: 4 1 0;
		border: 1px solid var(--color-text);
		padding: 2cqw;
		font-size: 4cqw;
		line-height: 1.3;
		color: var(--color-text);
		overflow: hidden;
	}
</style>
