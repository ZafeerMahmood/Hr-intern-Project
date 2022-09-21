import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thxyhmsnhiyrfhbvcqjj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeHlobXNuaGl5cmZoYnZjcWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk1MTE0MjYsImV4cCI6MTk3NTA4NzQyNn0.QOG3Ktr8dbZIqVmvyMY8wmVC5KcijhKYzPL1KoKE14A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)