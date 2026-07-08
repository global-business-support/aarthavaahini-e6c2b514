// Shared input sanitizers & validators for site + CRM forms.
// Import these instead of hand-rolling regex per form.

export const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

/** Keep only letters & single spaces. No digits/special chars. */
export function sanitizeName(v: string): string {
  return v.replace(/[^A-Za-z\s]/g, "").replace(/\s+/g, " ").slice(0, 60);
}

/** 10 digits only. Strip everything else. */
export function sanitizePhone10(v: string): string {
  return v.replace(/\D/g, "").slice(0, 10);
}

/** Aadhar: 12 digits only. */
export function sanitizeAadhar(v: string): string {
  return v.replace(/\D/g, "").slice(0, 12);
}

/** PAN partial: uppercase, alphanumeric only, max 10. */
export function sanitizePan(v: string): string {
  return v.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
}

/** Return a validation error message, or null when valid. */
export function validateLead(o: {
  name?: string;
  phone?: string;
  pan?: string;
  aadhar?: string;
  email?: string;
}): string | null {
  if (o.name !== undefined) {
    const n = o.name.trim();
    if (n.length < 2) return "Please enter your full name";
    if (!/^[A-Za-z\s]+$/.test(n)) return "Name can only contain letters";
  }
  if (o.phone !== undefined) {
    const p = sanitizePhone10(o.phone);
    if (p.length !== 10 || !/^[6-9]/.test(p))
      return "Enter a valid 10-digit mobile number";
  }
  if (o.pan) {
    if (!PAN_REGEX.test(o.pan.toUpperCase()))
      return "Enter a valid PAN (e.g. ABCDE1234F)";
  }
  if (o.aadhar) {
    if (!/^\d{12}$/.test(o.aadhar)) return "Aadhaar must be exactly 12 digits";
  }
  if (o.email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email))
      return "Enter a valid email address";
  }
  return null;
}

export const NAME_TITLES = ["Mr", "Mrs", "Miss"] as const;
export type NameTitle = (typeof NAME_TITLES)[number];

/** Title-Case Every Word. */
export function toTitleCase(v: string): string {
  return v
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
