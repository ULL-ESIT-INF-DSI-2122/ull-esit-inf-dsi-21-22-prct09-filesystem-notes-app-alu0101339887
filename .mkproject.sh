#!/bin/bash

touch .gitignore
echo "node_modules
dist
.vscode
.nyc_output
notes.md
scripts.md
rules.md
coverage" >> .gitignore

npm init -yes

touch tsconfig.json

echo "{
  \"exclude\": [
    \"test\",
    \"node_modules\",
    \"dist\"
  ],
  \"compilerOptions\": {
    \"target\": \"ES2020\",
    \"module\": \"commonjs\",
    \"declaration\": true,
    \"outDir\": \"./dist\",
    \"esModuleInterop\": true,
    \"forceConsistentCasingInFileNames\": true,
    \"strict\": true,
    \"skipLibCheck\": true
  }
}" >> tsconfig.json

mkdir src
mkdir test

npm insatll -g eslint
eslint --init
sed -i '$d' .eslintrc.json
sed -i '$d' .eslintrc.json
echo "
    \"require-jsdoc\": \"off\",
        \"valid-jsdoc\": \"off\",
        \"eol-last\": \"off\"
    }
}" >> .eslintrc.json


npm install --save-dev tsc-watch

npm install typedoc

npm install --save-dev mocha chai @types/mocha @types/chai ts-node

touch .mocharc.json
echo "{
  \"extension\": [\"ts\"],
  \"spec\": \"test/**/*.spec.ts\",
  \"require\": \"ts-node/register\"
}" >> .mocharc.json

touch typedoc.json
echo "{
  \"entryPoints\": [
    \"src\"
  ],
  \"out\": \"./docs\"
}" >> typedoc.json

npm install --save-dev typescript

npm install

touch notes.md
echo "# $1" >> notes.md
echo "Should add scripts in package.json" >> notes.md
echo "Should add entryPoint in typedoc.json" >> notes.md
echo "Should add rules in eslintrc.json" >> notes.md

touch scripts.md
echo "# $1" >> scripts.md
echo "'test': 'mocha'," >> scripts.md
echo "'coverage': 'nyc npm test'," >> scripts.md
echo "'coverage_': 'nyc npm test && nyc report --reporter=lcov'," >> scripts.md
echo "'start': 'tsc-watch --onSuccess \"node dist/*.js\"'," >> scripts.md
echo "'doc': 'typedoc'," >> scripts.md
echo "'make': 'node ./dist/*.js'" >> scripts.md

touch rules.md
echo "# $1" >> rules.md
echo "'valid-jsdoc': 'off'," >> rules.md
echo "'require-jsdoc': 'off'" >> rules.md

touch _config.yml
echo "title: Práctica X" >> _config.yml
echo "description: ________________" >> _config.yml
echo "theme: jekyll-theme-cayman" >> _config.yml