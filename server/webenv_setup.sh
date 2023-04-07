#!/bin/sh

USE_AFUS_TITLE='Afus'
USE_AFUS_SUBTITLE='A fucking url shortener.'

replace() {
  # replace asset
  for file in ./web/assets/*.js; do
    sed -i.bak "s/$1/$2/g" "$file"
  done

  # replace index
  sed -i.bak "s/$1/$2/g" ./web/index.html
}

if [ -n "$AFUS_TITLE" ]; then
  echo Set title to $AFUS_TITLE
  USE_AFUS_TITLE="$AFUS_TITLE"
fi
replace _AFUS_TITLE_ "$USE_AFUS_TITLE"

if [ -n "$AFUS_SUBTITLE" ]; then
  echo Set subtitle to $AFUS_SUBTITLE
  USE_AFUS_SUBTITLE="$AFUS_SUBTITLE"
fi
replace _AFUS_SUBTITLE_ "$USE_AFUS_SUBTITLE"
