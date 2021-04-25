# Quartz Studios Website

The website for quartz studios.

## How to contribute (abridged)

1. Fork the repo and clone it locally
2. Download npm if you don't have it already (and maybe yarn?)
3. Start up a dev server with `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Pages should update automagically after you change something.
5. Open a pull and describe what you changed.

### Things to note

- We use [tailwindcss](https://tailwindcss.com). Please use that instead of making new css classes. If you make a new css class, use tailwind's @apply feature if you can.
- For people not familiar with react, you need to use `className=` in place of `class=`.
- Use `<Link>` (import it with `import Link from "next/link"`).
- We also have heroicons so use that instead of importing actual SVG's. View the docs [here](https://github.com/tailwindlabs/heroicons/blob/master/README.md#react).
