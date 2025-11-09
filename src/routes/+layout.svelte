<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import mcss from '$lib/assets/materialize/css/materialize.min.css';
	import Navi from '$lib/navi.svelte';
	//l	import Navi2 from '$lib/navi.md';
	let a = 'tyo';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<template lang="pug">
	Navi 
	// Navi2
</template>
{a}

{@render children()}

<style lang="scss">
	// $color: #00ff00;
	$color: #008800;

	h1 {
		color: $color;
	}
	.cls {
		color: $color;
	}
</style>
