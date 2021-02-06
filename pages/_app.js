import "@/styles/globals.css";

import { useAnalytics } from "@/lib/analytics";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  useAnalytics();

  return <Component {...pageProps} />;
}
