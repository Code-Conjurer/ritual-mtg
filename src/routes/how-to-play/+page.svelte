<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Section title="How to Play">
	<p>
		Each colour has two allies and two enemies.
	</p>
	<ul>
		<li><span class='color-white'>White</span> is allied with <span class='color-green'>Green</span> and <span class='color-blue'>Blue</span>; its enemies are <span class='color-red'>Red</span> and <span class='color-black'>Black</span></li>
		<li><span class='color-blue'>Blue</span> is allied with <span class='color-white'>White</span> and <span class='color-black'>Black</span>; its enemies are <span class='color-green'>Green</span> and <span class='color-red'>Red</span></li>
		<li><span class='color-black'>Black</span> is allied with <span class='color-blue'>Blue</span> and <span class='color-red'>Red</span>; its enemies are <span class='color-green'>Green</span> and <span class='color-white'>White</span></li>
		<li><span class='color-red'>Red</span> is allied with <span class='color-black'>Black</span> and <span class='color-green'>Green</span>; its enemies are <span class='color-white'>White</span> and <span class='color-blue'>Blue</span></li>
		<li><span class='color-green'>Green</span> is allied with <span class='color-red'>Red</span> and <span class='color-white'>White</span>; its enemies are <span class='color-blue'>Blue</span> and <span class='color-black'>Black</span></li>
	</ul>
	<p>
		Ritual cards start face up in the command zone.
	</p>
	<p>
		You own cards in your deck.
	</p>
	<p>
		The first player starts the game with:
	</p>
	<div class="card-container">
		<Card title='Time Keepers Duty' type='Ritual' text=
		'At the beginning of your end step, remove a time counter from each Arc Ritual; then each player moves the top X cards of their library to the next player from them, where X is the number of time counters on Arc Rituals in that players command zone 
		'/>
		<Card title='Time Keepers Embargo' type='Ritual' text="
		Players don't draw their initial hands

		foo
		"/>
	</div>
	
		<!-- <Card title='title' type='ritual' text=''/> -->
</Section>

<style>
	ul {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.card-container {
		display: flex;
		justify-content: space-between;
		/* height: 400px; */
	}

	.color-white {
	background-color: var(--mtg-white);
	color: #000;
	padding: 0 0.2em;
}

.color-blue {
	background-color: var(--mtg-blue);
	color: #000;
	padding: 0 0.2em;
}

.color-black {
	background-color: var(--mtg-black);
	color: #000;
	padding: 0 0.2em;
}

.color-red {
	background-color: var(--mtg-red);
	color: #000;
	padding: 0 0.2em;
}

.color-green {
	background-color: var(--mtg-green);
	color: #000;
	padding: 0 0.2em;
}
</style>
