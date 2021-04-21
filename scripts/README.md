# Updating versions

## letteropener

1. Make changes to [src/modules](/src/modules)
2. Run `python scripts/version.py bump -b [patch|minor|major]`
3. Update the [CHANGELOG.md](/CHANGELOG.md)
4. Commit your changes
5. Run `python scripts/version.py tag`
6. Push your changes, and make sure to do `git push --tags` as well