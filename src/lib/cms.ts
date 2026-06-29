// Shared types & fallback data for Site CMS.
// Public site components read from DB but fall back to these constants
// if the network/query fails so the homepage never blanks out.

export type HeroSlide = {
  id?: string;
  position: number;
  image_url: string;
  title: string | null;
  subtitle: string | null;
  show_text: boolean;
  cta_label: string | null;
  cta_link: string | null;
  is_active: boolean;
};

export type ProductCard = {
  id?: string;
  position: number;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  bg_color: string | null;
  button1_label: string | null;
  button1_link: string | null;
  button2_label: string | null;
  button2_link: string | null;
  is_active: boolean;
};

export type Testimonial = {
  id?: string;
  position: number;
  name: string;
  role: string | null;
  text: string;
  rating: number;
  image_url: string | null;
  is_verified: boolean;
  is_active: boolean;
};

export type DashboardCardOverride = {
  id?: string;
  key: string;
  label: string;
  value_override: string | null;
  trend: string | null;
  icon: string | null;
  position: number;
  is_active: boolean;
};

export const FALLBACK_HERO_SLIDES: HeroSlide[] = [
  {
    position: 0,
    image_url:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80",
    title: null,
    subtitle: null,
    show_text: false,
    cta_label: "Free Consultation",
    cta_link: "/contact",
    is_active: true,
  },
  {
    position: 1,
    image_url:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
    title: "Protecting What Matters Most",
    subtitle:
      "Comprehensive Life, Health, Motor and Home insurance plans from India's most trusted insurers.",
    show_text: true,
    cta_label: "Free Consultation",
    cta_link: "/contact",
    is_active: true,
  },
  {
    position: 2,
    image_url:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80",
    title: "Grow Your Wealth With Smart Investments",
    subtitle:
      "Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans.",
    show_text: true,
    cta_label: "Free Consultation",
    cta_link: "/contact",
    is_active: true,
  },
];

export const FALLBACK_PRODUCT_CARDS: ProductCard[] = [
  {
    position: 0,
    title: "Personal Loan",
    subtitle: "A loan for everything from dreams to emergencies",
    image_url:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    bg_color: "#70b8f7",
    button1_label: "Apply online",
    button1_link: "/contact",
    button2_label: "Learn more",
    button2_link: "/loans",
    is_active: true,
  },
  {
    position: 1,
    title: "Business Loan",
    subtitle: "Funding solutions for business growth",
    image_url:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    bg_color: "#eaf4ff",
    button1_label: "Apply Now",
    button1_link: "/contact",
    button2_label: "Learn more",
    button2_link: "/loans",
    is_active: true,
  },
  {
    position: 2,
    title: "Home Loan",
    subtitle: "Affordable home loan options for your dream home",
    image_url:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    bg_color: "#fff2cc",
    button1_label: "Apply Now",
    button1_link: "/contact",
    button2_label: "Know more",
    button2_link: "/loans",
    is_active: true,
  },
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [];
