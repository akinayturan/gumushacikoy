#!/bin/sh
set -eu

# Use the deployment's own URL for canonicals and links when building on Pages.
site_url=${SITE_URL:-${CF_PAGES_URL:-http://localhost:1313/}}
if [ -n "${CF_PAGES_BRANCH:-}" ] && [ "$CF_PAGES_BRANCH" != main ]; then
  site_url=$CF_PAGES_URL
  hugo --baseURL "${site_url%/}/" --environment preview --cleanDestinationDir
else
  hugo --baseURL "${site_url%/}/" --cleanDestinationDir
fi
pagefind --site public
