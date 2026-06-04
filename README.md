# Smart Packing List Generator

A deployable static utility website for generating route-aware personalized travel packing lists. The default language is English, with Chinese available from the top language switch.

## What It Includes

- Multi-level country, region, and city selectors for departure and destination.
- Built-in popular travel city dataset with coordinates and time zones, currently covering 51 countries, 142 regions, and 155 cities.
- Automatic distance estimate, travel-time estimate, time-zone difference, destination weather, and packing checklist generation.
- Icon-based metric cards for distance, travel time, time difference, and weather.
- Copy, download, print, and share-link actions.
- Checkable list progress.
- English and Chinese UI/content.
- Side-rail and in-list ad placements for monetization.
- Static deploy configs for Vercel and Netlify.

## Local Preview

```bash
node ../../work/static-server.mjs . 4174
```

Then open `http://127.0.0.1:4174`.

## Deployment

### Vercel

1. Import this directory as a project.
2. Framework Preset: `Other`.
3. Build Command: leave empty.
4. Output Directory: `.`.

### Netlify

1. Create a new site from this directory.
2. Build command: leave empty.
3. Publish directory: `.`.

### GitHub Pages

Push this directory's contents to a repository root, then enable Pages for the branch.

## Advertising Setup

The page has three prepared ad slots:

- `resultInline`: above the generated checklist.
- `sideRail`: tall sticky sidebar placement on desktop.
- `sideRailSecond`: secondary sidebar placement.

After your ad platform approves the website, edit the top of `app.js`:

```js
const ADSENSE_CONFIG = {
  enabled: true,
  publisherId: "your-publisher-id",
  slots: {
    resultInline: "your-ad-unit-id",
    sideRail: "your-ad-unit-id",
    sideRailSecond: "your-ad-unit-id",
  },
};
```

For Google AdSense, also add the official AdSense script to `index.html`, replace the placeholder publisher ID in `ads.txt.example`, then rename it to `ads.txt` and keep it in the site root. Do not publish the placeholder ID as a live `ads.txt`.

## Route And Weather API Setup

The current version uses a built-in location dataset for route calculations and Open-Meteo forecast data from `API_CONFIG` at the top of `app.js`:

```js
const API_CONFIG = {
  forecastUrl: "https://api.open-meteo.com/v1/forecast",
  apiKey: "",
};
```

This works well for prototype testing and low-volume validation. For an ad-supported production website, review your provider's commercial terms and switch `API_CONFIG` to your approved commercial endpoints, paid API key, proxy, or self-hosted provider before launch.

To expand supported destinations, add countries, regions, and cities in `LOCATION_DATA` inside `app.js`. Each city needs `id`, localized `name`, `latitude`, `longitude`, `timezone`, and `countryCode`.

## SEO Expansion Ideas

This tool can later grow into static landing pages or preset links for:

- Beach vacation packing list
- Business trip packing list
- Europe travel packing list
- Carry-on packing checklist
- Family vacation packing list
- Winter travel packing list
- Study abroad packing list
