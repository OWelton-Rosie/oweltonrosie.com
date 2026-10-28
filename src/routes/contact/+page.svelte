<script>
    import Header from '#lib/components/Header.svelte';

    import { faGithub, faStrava } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    import Footer from '#lib/components/Footer.svelte';
    import Check from '@lucide/svelte/icons/check';
    import Form from '#lib/components/Form.svelte';


    let showCopied = $state(false);
    let copiedTimeout;

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText('oweltonrosie@proton.me');

            showCopied = true;

            clearTimeout(copiedTimeout);
            copiedTimeout = setTimeout(() => {
                showCopied = false;
            }, 2000);
        } catch (error) {
            console.error('Failed to copy email address:', error);
        }
    }
</script>

<svelte:head>
    <title>Contact me</title>
</svelte:head>

<Header />

<div class="hero-content">
    <h1>Contact me</h1>
    <p>You can contact me through any of the following:</p>
</div>

<ul>
    <li>
        <button class="email-button" onclick={copyEmail}>
            oweltonrosie@proton.me
        </button>
        (my public PGP key can be found
        <a href="/pgp.txt" target="_blank">here</a>)
    </li>
    <li>@oweltonrosie on Discord</li>
</ul>

<p>(You can also use the contact form below.)</p>

<Form />

{#if showCopied}
    <div class="copied-popup" role="status">
        <Check />
        Email copied!
    </div>
{/if}

<h1>Socials</h1>
<div class="socials">
	<a href="https://github.com/OWelton-Rosie" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
	    <FontAwesomeIcon icon={faGithub} />
    </a>

    <a href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer"aria-label="Strava">
	    <FontAwesomeIcon icon={faStrava} />
    </a>
</div>


<Footer />

<style>
    .email-button {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: #2563eb;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .email-button:hover {
        color: #1d4ed8;
    }

    .copied-popup {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 18px;
        border-radius: 10px;
        background: #1f2937;
        color: white;
        font-size: 0.95rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        animation: popup-in 0.2s ease-out;
        z-index: 1000;
    }

    @keyframes popup-in {
        from {
            opacity: 0;
            transform: translate(-50%, 10px);
        }

        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

    .socials {
		display: flex;
		gap: 1rem;
	}

	.socials :global(svg) {
		width: 2rem;
		height: 2rem;
        color: black;
	}
</style>
