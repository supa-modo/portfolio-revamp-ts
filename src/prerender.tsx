import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type {
  PrerenderArguments,
  PrerenderResult,
} from "vite-prerender-plugin";
import { AppLayout } from "./AppLayout";
import {
  buildPageMetadata,
  buildHeadElements,
} from "./components/seo/buildPageMetadata";

export async function prerender(
  data: PrerenderArguments,
): Promise<PrerenderResult> {
  const helmetContext: { helmet?: unknown } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppLayout />
      </StaticRouter>
    </HelmetProvider>,
  );

  const meta = buildPageMetadata(data.url);
  const head = {
    lang: "en",
    title: meta.title,
    elements: buildHeadElements(meta),
  };

  return {
    html,
    head,
  };
}
