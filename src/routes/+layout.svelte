<script lang="ts">
	import '$lib/styles/theme.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();

	const navItems = [
		{ label: 'How to Play', href: resolve('/how-to-play') },
		{ label: 'Deck Building', href: resolve('/deck-building') },
		{ label: 'Sample Cube', href: resolve('/sample-cube') },
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
</svelte:head>

<div class="layout">
	<header class="hero">
		<a href={resolve('/')} class="title-link">
			<h1 class="title">Ritual Magic TG</h1>
		</a>
		<nav class="nav">
			{#each navItems as item}
				<a class="nav-link" href={item.href}>{item.label}</a>
			{/each}
		</nav>
	</header>

	<main class="content">
		{@render children()}
	</main>
</div>

<style>
	.layout {
		min-height: 100vh;
		max-width: 800px;
		margin: 0 auto;
		padding: var(--space-md);
	}

	.hero {
		text-align: center;
		padding: var(--space-md) 0;
		border-bottom: 1px solid var(--color-border);
		margin-bottom: var(--space-md);
	}

	.title-link {
		text-decoration: none;
	}

	.title {
		font-size: var(--text-4xl);
		color: var(--color-text-bright);
		margin-bottom: var(--space-md);
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	.nav {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.nav-link {
		color: var(--color-text-muted);
		text-decoration: none;
		padding: var(--space-sm) var(--space-md);
		border: 1px solid var(--color-border);
		transition: all var(--transition-fast);
	}

	.nav-link:hover {
		color: var(--color-text-bright);
		border-color: var(--color-border-bright);
	}

	.content {
		padding-bottom: var(--space-md);
	}

	@media (max-width: 768px) {
		.hero {
			padding: var(--space-md) 0;
		}

		.title {
			font-size: var(--text-md);
		}

		.nav {
			flex-direction: column;
			align-items: center;
			gap: var(--space-sm);
		}

		.nav-link {
			width: 100%;
			max-width: 200px;
			text-align: center;
		}
	}
</style>
