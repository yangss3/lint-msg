# Check your commit messages with the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/)

## Usage
Install **@yangss/lint-msg**, need to install **husky** as well:
```sh
npm install -D @yangss/lint-msg husky
npx husky install
```

Add a commit-msg hook:
```sh
npx husky add .husky/commit-msg "npx lint-msg"
```

Make a commit:
```sh
git add .husky/pre-commit
git commit -m "cannot pass the message check"
```