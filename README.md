# news-image-21nov

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Abdee36/news-image-21nov/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Abdee36/news-image-21nov/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

Sum up 21 November's world news in one image — make.fun bounty
`news-image-20261121` ($100 escrowed, top 50 paid).

A newspaper-style poster for **Saturday, 21 November 2026**: the stories
that defined the day — COP31 running into overtime in Antalya with no deal
and fossil fuels stripped from the draft, a Russian missile falling in
Poland as NATO scrambles jets, Denmark expelling Russia's defence attaché
over a plot to kill rapper Kyivstoner, US envoys floating NATO membership
for Kyiv in exchange for Donbas land, and Cyclone Akvan's rain still
falling over Odisha — plus a strip of the day's other news.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) checks `entry.png` is a whole
PNG under the 1 MiB limit, then copies it to
`$MAKEFUN_OUTPUT_DIR/entry.png`. It writes the same bytes on every run.

## Files

- `entry.png` — the poster, 1024×1024, ~200 KB
- `main.ts` — the entry program
- `LICENSE` — MIT
