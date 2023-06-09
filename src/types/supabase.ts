 
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      flow: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          title: string
          description?: string
          sessionId: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          metadata?: Json | null
          title: string
          description?: string
          sessionId?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          title: string
          description?: string
          sessionId?: string | null
          status?: string | null
        }
      }
      project: {
        Row: {
          unit: any[]
          created_at: string | null
          description: string | null
          id: string
          name: string | null
          userId: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
          userId?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
          userId?: string | null
        }
      }
      session: {
        Row: {
          count?: number
          created_at: string | null
          id: string
          tag: string
          unitId: string | null
        }[]
        Insert: {
          created_at?: string | null
          id: string
          tag: string
          unitId?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          tag?: string
          unitId?: string | null
        }
      }
      unit: {
        Row: {
          session: any[]
          created_at: string | null
          description: string | null
          id: string
          projectId: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          projectId?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          projectId?: string | null
          title?: string | null
        }
      }
      user: {
        Row: {
          authId: string | null
          created_at: string | null
          id: string
        }
        Insert: {
          authId?: string | null
          created_at?: string | null
          id?: string
        }
        Update: {
          authId?: string | null
          created_at?: string | null
          id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
