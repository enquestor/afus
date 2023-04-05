const config: {
  AFUS_URL: string;
  AFUS_TITLE: string;
  AFUS_SUBTITLE: string;
} = {
  AFUS_URL: import.meta.env.VITE_AFUS_URL || window.location.origin,
  AFUS_TITLE: import.meta.env.VITE_AFUS_TITLE || "AFUS_TITLE",
  AFUS_SUBTITLE: import.meta.env.VITE_AFUS_SUBTITLE || "AFUS_SUBTITLE",
};

export default config;
