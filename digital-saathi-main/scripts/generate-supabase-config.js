const fs = require('node:fs');
const path = require('node:path');

const supabaseUrl = (process.env.SUPABASE_URL || '')
  .trim()
  .replace(/\/rest\/v1\/?$/, '')
  .replace(/\/+$/, '');
const publishableKey = (process.env.SUPABASE_PUBLISHABLE_KEY || '').trim();

if (!supabaseUrl || !publishableKey) {
  throw new Error(
    'Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in the deployment environment.'
  );
}

let parsedUrl;
try {
  parsedUrl = new URL(supabaseUrl);
} catch {
  throw new Error('SUPABASE_URL must be a valid HTTPS Supabase project URL.');
}

if (
  parsedUrl.protocol !== 'https:' ||
  !parsedUrl.hostname.endsWith('.supabase.co') ||
  parsedUrl.pathname !== '/'
) {
  throw new Error('SUPABASE_URL must be a Supabase project URL without a path.');
}

if (!publishableKey.startsWith('sb_publishable_')) {
  throw new Error('SUPABASE_PUBLISHABLE_KEY must be a public sb_publishable_ key.');
}

const config = {
  supabaseUrl,
  supabasePublishableKey: publishableKey
};
const output = `window.DIGITAL_SAATHI_CONFIG = ${JSON.stringify(config)};\n`;
const outputPath = path.join(__dirname, '..', 'supabase-config.local.js');

fs.writeFileSync(outputPath, output, { encoding: 'utf8' });
console.log('Generated Supabase browser config from deployment environment.');
