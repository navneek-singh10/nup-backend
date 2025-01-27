import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly supabaseClient: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL; 
    const supabaseKey = process.env.SUPABASE_KEY;

    if (supabaseUrl && supabaseKey) {
        this.supabaseClient = createClient(supabaseUrl, supabaseKey);
      } else {
        throw new Error('Supabase URL is not defined');
      }  }

  getClient(): SupabaseClient {
    return this.supabaseClient;
  }
}
