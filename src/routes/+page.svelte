<script>
    import Footer from '#lib/components/Footer.svelte';
</script>

<div class="hero-content">
    <img src="/assets/portrait_NEW.jpeg" alt="Oscar Welton-Rosie Portrait" class="hero-portrait" />
<h1>Oscar Welton-Rosie</h1>
</div>

<p>I'm Oscar. I'm a New Zealand Year 12 high school student and hobby developer working with <a href="https://github.com/OWelton-Rosie?tab=repositories&q=&type=&language=svelte&sort=" target="_blank" rel="noopener noreferrer" aria-label="GitHub">Svelte</a> and <a href="https://github.com/OWelton-Rosie?tab=repositories&q=&type=&language=python&sort=" target="_blank" rel="noopener noreferrer" aria-label="GitHub">Python</a>.</p>

<p>When not coding, I'm usually <a href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer" aria-label="Strava">running</a>, <a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank" rel="noopener noreferrer" aria-label="WCA">solving Rubik's Cubes</a>, and <a href="/writing">writing</a>.</p>

<Footer />

<style>
img {
    display: block;
    margin: 0 auto;
    width: 40%;
    height: auto; /* Preserve aspect ratio */
}

@media (max-width: 768px) {
    img {
        width: 90%;
    }
}
</style>
