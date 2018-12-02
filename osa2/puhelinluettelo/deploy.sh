#!/bin/sh
npm run build
rm -rf ../../../FullStackOpen2018_osa3/build
cp -r build ../../../FullStackOpen2018_osa3/
