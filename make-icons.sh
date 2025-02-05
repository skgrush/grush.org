#!/usr/bin/env bash

rootDir="$(dirname "$0")"

publicDir="$rootDir/public"
iconSrc="$rootDir/src/icon.inkscape.svg"
destDir="$publicDir/favicons"



#inkscape --export-filename="$destDir/icon.svg" --export-id="svg2"  "$iconSrc"

# apple-touch-icon in public root
inkscape --export-filename="$publicDir/apple-touch-icon.png" --export-width=180  "$iconSrc"
# plain svg in public/favicons
inkscape --export-filename="$destDir/icon.svg" --export-plain-svg "$iconSrc"

inkscape --export-filename="$destDir/icon-192x192.png" --export-width=192 "$iconSrc"
inkscape --export-filename="$destDir/icon-512x512.png" --export-width=512 "$iconSrc"

inkscape --export-filename="$destDir/icon-1024x1024.png" --export-width=1024 "$iconSrc"

# TODO: not working
#sizedSvg="$destDir/_tmp.masked.svg"
#inkscape --export-filename="$sizedSvg" --export-width=512 --export-margin=51 --export-area-page "$iconSrc"
#inkscape --export-filename="$destDir/icon-512x512.maskable.png" --export-width=512 --export-margin=51 "$sizedSvg"
