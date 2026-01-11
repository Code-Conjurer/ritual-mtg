<script lang="ts">
	import HowToPlay from '$lib/components/HowToPlay.svelte';
	import DeckBuilding from '$lib/components/DeckBuilding.svelte';
	import SampleCube from '$lib/components/SampleCube.svelte';
	import Fireplace from '$lib/components/Fireplace.svelte';

	const navItems = [
		{ label: 'How to Play', href: '#how-to-play' },
		{ label: 'Deck Building', href: '#deck-building' },
		{ label: 'Sample Cube', href: '#sample-cube' },
		{ label: 'Fireplace', href: '#fireplace' }
	];
</script>

<div class="page">
	<header class="hero">
		<h1 class="title">Ritual Mage</h1>
		<nav class="nav">
			{#each navItems as item}
				<a class="nav-link" href={item.href}>{item.label}</a>
			{/each}
		</nav>
	</header>

	<main class="content">
		<HowToPlay />
		<DeckBuilding />
		<SampleCube />
		<Fireplace />
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		max-width: 800px;
		margin: 0 auto;
		padding: var(--space-md);
	}

	.hero {
		text-align: center;
		padding: var(--space-3xl) 0;
		border-bottom: 1px solid var(--color-border);
		margin-bottom: var(--space-2xl);
	}

	.title {
		font-size: var(--text-4xl);
		color: var(--color-text-bright);
		margin-bottom: var(--space-xl);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.nav {
		display: flex;
		justify-content: center;
		gap: var(--space-lg);
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
		padding-bottom: var(--space-3xl);
	}

	@media (max-width: 768px) {
		.hero {
			padding: var(--space-2xl) 0;
		}

		.title {
			font-size: var(--text-3xl);
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
