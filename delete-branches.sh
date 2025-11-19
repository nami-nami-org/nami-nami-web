#!/bin/bash

git fetch --all -p

echo "Ramas remotas antes de la eliminación:"
git branch -r
echo "-----------------------------------"

for branch in $(git for-each-ref --format='%(refname:short)' refs/remotes/origin/ | grep -vE '^(origin/main|origin/develop|origin/HEAD)$'); do
  echo "Eliminando rama remota: ${branch#origin/}"
  git push origin --delete "${branch#origin/}"
done

echo "-----------------------------------"
echo "Ramas remotas después de la eliminación:"
git branch -r
