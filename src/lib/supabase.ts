import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizers' | 'mains' | 'desserts' | 'drinks';
  image_url?: string;
  is_available: boolean;
  created_at: string;
}

export interface Reservation {
  guest_name: string;
  email: string;
  phone: string;
  party_size: number;
  reservation_date: string;
  reservation_time: string;
  special_requests?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
