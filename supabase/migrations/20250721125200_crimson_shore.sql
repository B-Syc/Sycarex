/*
  # Update consultations table structure

  1. Changes
    - Rename `business_needs` column to `business_description`
    - Update column to better reflect the new purpose

  2. Security
    - Maintain existing RLS policies
    - Keep all existing constraints and triggers
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'consultations' AND column_name = 'business_needs'
  ) THEN
    ALTER TABLE consultations RENAME COLUMN business_needs TO business_description;
  END IF;
END $$;