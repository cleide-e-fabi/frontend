export const pushToDataLayer = (event: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(event);
  } else {
    console.warn('GTM datalayer não está disponível');
  }
};
