/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person requesting consultation
      - `email` (text, required) - Email address for contact
      - `business_needs` (text, required) - Description of business needs and automation goals
      - `status` (text, default 'pending') - Status of the consultation request
      - `created_at` (timestamp) - When the consultation was requested
      - `updated_at` (timestamp) - When the record was last updated

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for public insert (anyone can submit a consultation request)
    - Add policy for authenticated users to read all consultations (for admin access)

  3. Notes
    - The table stores consultation requests from the website form
    - Public can insert new requests, but only authenticated users can view them
    - Status field allows tracking of consultation progress
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_needs text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests
CREATE POLICY "Anyone can submit consultation requests"
  ON consultations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all consultations (for admin access)
CREATE POLICY "Authenticated users can read all consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update consultation status
CREATE POLICY "Authenticated users can update consultations"
  ON consultations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON consultations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();