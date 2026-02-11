// Google Analytics Page View
export const trackPageView = () => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", "G-DM2VWS5TF6", {
      page_path: window.location.pathname,
    });
  }
};

// Google Analytics Event
export const trackEvent = (action, category, label) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};
