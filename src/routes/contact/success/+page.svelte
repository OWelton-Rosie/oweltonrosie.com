<script>
  import Header from '#lib/components/Header.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import Check from '@lucide/svelte/icons/check';
</script>

<svelte:head>
    <title>Message sent</title>
</svelte:head>

<Header />

<div class="success">
    <div class="success-icon">
        <Check size={32} />
    </div>

    <h1>Message sent!</h1>
    <p><a href="/">Back to home</a></p>
</div>

<Footer />

<style>
    .success {
        max-width: 600px;
        margin: 100px auto;
        text-align: center;
    }

    .success-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        margin: 0 auto 25px;
        border-radius: 50%;
        background: #f3f4f6;
    }

    .success h1 {
        margin-bottom: 12px;
    }

    .success p {
        margin-bottom: 25px;
    }
</style>
