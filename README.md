# Teapresso website

The site at tea-presso.com. Next.js (App Router), React and TypeScript.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the Resend key and sender
npm run dev
```

## Pages

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` |
| `/menu` | `app/menu/page.tsx` |
| `/locations` | `app/locations/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/click-collect` | `app/click-collect/` |
| `/franchising` | `app/franchising/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |

Shared parts are in `app/_components`: the header and footer, the rotating menu on Home (`Turntable`), the film, and the two forms.

## Styling

Pages are styled inline, element by element. `app/globals.css` holds only the page base, the rotating menu (`.tp-`) and the floating cups on the Menu page (`.mp-`). The one typeface is Jost, loaded in `app/layout.tsx` and used everywhere as `var(--font-jost)`.

## Pictures

- `public/images/drinks`: one 4:5 picture per drink. Every cup is cut to the same size and stands on the same line. The Menu page finds a drink's picture by its name, lower case with dashes.
- `public/images/cups`: cups cut out of their backgrounds, for the rotating menu and the Menu page title.
- `public/brand`: the Teapresso wordmark and the Chinese name, as vector files. Use these files; do not retype the name.

## Changing the menu

Edit the `SERIES` list at the top of `app/menu/page.tsx`. To add a drink, add its line and put its picture in `public/images/drinks`.

## Enquiry forms

Both forms post to `app/api/contact/route.ts`, which sends the email through Resend. Which inbox an enquiry goes to is decided there, on the server; no address is shown on any page. `RESEND_API_KEY` and `RESEND_DOMAIN` must be set where the site is hosted.
