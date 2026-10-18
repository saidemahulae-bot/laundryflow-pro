import { Link } from "react-router";
import { Page } from "@wron/kit";

export default function NotFound() {
  return (
    <Page title="Page not found" noindex className="max-w-page mx-auto px-5 sm:px-8 pt-40 pb-32">
      <p className="text-xs uppercase tracking-[0.14em] text-muted mb-6">404</p>
      <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em] text-ink">That page is not here.</h1>
      <p className="mt-6 text-lg text-muted max-w-[48ch]">The address may have changed. The front page has everything.</p>
      <Link to="/" className="mt-10 inline-flex items-center justify-center bg-primary text-primary-ink rounded-theme px-7 py-4 font-medium transition-colors duration-200 hover:bg-ink active:scale-[0.98]">Go to the front page</Link>
    </Page>
  );
}
