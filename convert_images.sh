#!/bin/bash

# Batch convert JPG images to WebP format
# Usage: bash convert_images.sh

cd "$(dirname "$0")/images" || exit 1

echo "Converting JPG images to WebP..."

for img in a*.jpg; do
    if [ -f "$img" ]; then
        webp_name="${img%.jpg}.webp"
        if convert "$img" -quality 85 "$webp_name"; then
            echo "✓ Converted $img → $webp_name"
        else
            echo "✗ Failed to convert $img"
        fi
    fi
done

echo "Done! WebP images created."
ls -lh *.webp | head -10
