<script>
    import { goto } from '$app/navigation';
    import { PUBLIC_FORMSPREE_URL } from '$app/env/public';

    let submitting = $state(false);
    let error = $state('');

    async function submitForm(event) {
        event.preventDefault();

        submitting = true;
        error = '';

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch(PUBLIC_FORMSPREE_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                await goto('/contact/success');
                return;
            }

            const data = await response.json();

            error = data.errors
                ? data.errors.map((err) => err.message).join(' ')
                : 'Something went wrong. Please try again.';
        } catch (err) {
            error = 'Something went wrong. Please check your connection and try again.';
        } finally {
            submitting = false;
        }
    }
</script>

<section class="contact-form">
    <form onsubmit={submitForm}>
        <div class="form-group">
            <label for="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
            />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
                rows="6"
                required
            ></textarea>
        </div>

        <input
            type="hidden"
            name="subject"
            value="New message from oweltonrosie.com"
        />

        {#if error}
            <p class="form-error" role="alert">{error}</p>
        {/if}

        <button
            class="submit-button"
            type="submit"
            disabled={submitting}
        >
            {submitting ? 'Sending...' : 'Send message'}
        </button>
    </form>
</section>

<style>
    .contact-form {
        max-width: 650px;
        margin: 70px auto 80px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    label {
        font-weight: 600;
    }

    input,
    textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 11px 13px;
        border: 1px solid #d1d5db;
        border-radius: 7px;
        background: white;
        color: inherit;
        font: inherit;
        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
    }

    textarea {
        resize: vertical;
        min-height: 140px;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }

    .submit-button {
        align-self: flex-start;
        padding: 11px 20px;
        border: none;
        border-radius: 7px;
        background: #2563eb;
        color: white;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .submit-button:hover:not(:disabled) {
        background: #1d4ed8;
    }

    .submit-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .form-error {
        margin: 0;
        color: #dc2626;
    }
</style>
