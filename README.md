# Grush.org site




## favicon

The inkscape icon is in [src/icon.inkscape.svg](src/icon.inkscape.svg).

[This article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
indicates that the following are still useful:
* index.html `link[rel=icon][href][sizes="32x32"]` in `.ico` format
* index.html `link[rel=icon][href][type="image/svg+xml"]`
* index.html `link[rel=apple-touch-icon][href="/apple-touch-icon.png"]` in 180x180 png
* in the `manifest.webmanifest`:
   - 192x192 png
   - 512x512 png **maskable** with a 409x409 safezone
   - 512x512 png
   - 1024x1024 png

The script for `./make-icons.sh` makes most of these. 
