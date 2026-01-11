<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Section title="How to Play">
	<p>
		Each color has two allies and two enemies:
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
		You own cards in your library.
	</p>
	<p>
		The first player starts the game with:
	</p>
	<div class="card-container">
		<Card title='Time Keepers Duty' type='Ritual' text=
		'At the beginning of your upkeep, remove a time counter from each Arc Ritual; then each player moves the top X cards of their library to the next player from them, where X is the number of time counters on Arc Rituals in that players command zone 
		
		When you lose the game put this Ritual into the next players Command Zone.
		'/>
		<Card title='Time Keepers Embargo' type='Ritual' 
			text="Players don't draw their initial hands and players cannot take Mulligans.

			Put seven time counters on this Ritual.
			
			At the beginning of your upkeep remove a time counter from this Ritual.
			Players can't play cards or activate abilities as long as this Ritual has a time counter on it."
		/>
	</div>
	<p> All players start with:</p>
	<div class="card-container">
		<Card title='Pentagram Arc' type='Ritual - Arc' 
		text="When you get this Ritual, put five time counters on it.

		At the beginning of your upkeep take the top X cards of your library and set them aside, where X is the number of time counters on this Ritual; you may look at and reorder cards these cards at any time; if you reveal, search, or they leave your library you may have them become basic lands of your choice while you own them (Cards set aside are still considered to be on top of your library)"
		/>
		<Card title="Pentagram Grudge" type="Ritual" 
		text="When a land you control enters, if it produces mana of a color thats an enemy of a color of mana that your lands can produce then it enters tapped; put X stun counters on that land, where X is one less then the number of enemy colors. (If you control a Forest and a Plains, and play a Swamp; then the Swamp enters tapped with 1 stun counter)"/>
	</div>
</Section>

<style>
	ul {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.card-container {
		display: flex;
		gap: 1rem;
		padding-bottom: 1rem;
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
