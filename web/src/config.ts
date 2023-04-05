const config: {
  AFUS_URL: string;
  AFUS_TITLE: string;
  AFUS_SUBTITLE: string;
} = {
  AFUS_URL: import.meta.env.VITE_AFUS_URL || window.location.origin,
  AFUS_TITLE: import.meta.env.VITE_AFUS_TITLE || "_AFUS_TITLE_",
  AFUS_SUBTITLE: import.meta.env.VITE_AFUS_SUBTITLE || "_AFUS_SUBTITLE_",
};

export default config;
