/*
# Create early_access table

1. New Tables
- `early_access`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — visitor's email for early access
  - `role` (text, nullable) — optional: "need" or "have" or "both"
  - `created_at` (timestamptz, default now)
2. Security
- Enable RLS on `early_access`.
- Allow anon + authenticated INSERT only (public sign-up form, no login).
- No SELECT/UPDATE/DELETE for anon — emails are private to the project owner.
*/

CREATE TABLE IF NOT EXISTS early_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE early_access ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_early_access" ON early_access;
CREATE POLICY "anon_insert_early_access"
  ON early_access FOR INSERT
  TO anon, authenticated WITH CHECK (true);
