export const pageview = (url: URL): void => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
    page_path: url,
  });
};

export const event = ({
  action,
  params,
}: {
  action: Gtag.EventNames;
  params: Gtag.EventParams;
}) => {
  window.gtag("event", action, params);
};
