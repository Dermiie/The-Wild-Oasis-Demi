import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://cobfrvvirenhjnmctrkf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvYmZydnZpcmVuaGpubWN0cmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MzE0MDAsImV4cCI6MjA1NjAwNzQwMH0.WllnrDQMOGxfBNnTEMFUahq3o0mxJLhCL7iwfQqVf1k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
