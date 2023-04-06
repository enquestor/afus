#!/bin/sh

DEFAULT_AFUS_TITLE='Afus'
DEFAULT_AFUS_SUBTITLE='A fucking url shortener.'

replace() {
  for file in ./web/assets/*.js; do
    sed -i.bak "s/$1/$2/g" "$file"
  done
}

if [ -n "$AFUS_TITLE" ]; then
  echo Set title to $AFUS_TITLE
  replace _AFUS_TITLE_ "$AFUS_TITLE"
else
  replace _AFUS_TITLE_ "$DEFAULT_AFUS_TITLE"
fi

if [ -n "$AFUS_SUBTITLE" ]; then
  echo Set subtitle to $AFUS_SUBTITLE
  replace _AFUS_SUBTITLE_ "$AFUS_SUBTITLE"
else
  replace _AFUS_SUBTITLE_ "$DEFAULT_AFUS_SUBTITLE"
fi