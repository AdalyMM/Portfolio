import { Injectable } from '@angular/core';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private _session: AuthSession | null = null

  constructor() {
    const supabaseUrl = environment.supabaseUrl; 
    const supabaseKey = environment.supabaseKey;
    this.supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        // persistSession: false, // Desactiva la persistencia basada en LockManager
        // autoRefreshToken: true, // Permite la renovación automática de tokens
        storageKey: 'supabase-auth-token',
        storage: localStorage
      },
    });
  }

  async getSignedUrl(path: string): Promise<string | null> {
    const { data, error } = await this.supabase.storage
      .from('Personal Archives')
      .createSignedUrl(path, 60 * 60); // 1 hora
    console.log(data?.signedUrl);
    if (error) {
      console.error('Error generating signed URL', error);
      return null;
    }
    return data.signedUrl;
  }
}
