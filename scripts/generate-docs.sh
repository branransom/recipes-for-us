#!/bin/sh

echo "Generating docs..."
npm run docs:generate

echo "Adding docs to commit"
git add -A docs
