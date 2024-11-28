import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Using fallback configuration for development.');
}

// Create Supabase client with fallback values for development
export const supabase = createClient(
  supabaseUrl || 'https://xyzcompany.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdXZrcHJra3BpeGJiam1xbnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjAxNjAsImV4cCI6MjAyNTM5NjE2MH0.S2G_LTG5FRqf9ryCvS5K6E7g5wGvqKcwrjbJ3kHZ3zQ'
);