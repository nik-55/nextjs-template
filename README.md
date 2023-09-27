# Election Portal Frontend

- [Commit message conventions](https://gist.github.com/brianclements/841ea7bffdb01346392c)

## Development

- Install the dependencies using `npm ci`
- Setup the git hooks using `npm run husky-prepare`
- Start the development server using `npm run dev`
- prettier: `npm run prettier` and `npm run prettier-fix`
- These command will scan all files for lint: `npm run lint` and `npm run lint-fix`
- lint-staged: `npm run lint-staged`

## Production

- Install: `npm ci`
- build: `npm run build`
- `npm run start`

## Linting & Formatting

1. husky: Git hook that runs a script before commiting
2. eslint: looks for potential errors like unused variable or not giving key prop in react
3. lint-staged: linting and formatting is a time consuming and running it over all the files is not required. So lint-staged runs the lint and format only over the staged files
4. prettier: code formatter
