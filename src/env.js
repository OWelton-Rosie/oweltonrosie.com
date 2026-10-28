import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ PUBLIC_FORMSPREE_URL: { public: true, static: true } });
