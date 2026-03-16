import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://wuwdgplpnwcgziegnccx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1d2RncGxwbndjZ3ppZWduY2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwOTQ1NDEsImV4cCI6MjA4NzY3MDU0MX0.vZK2wiINbSaaPHxVpsb5Dvfy67YK3BR_F7lFxumfOhc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
