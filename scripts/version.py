#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import argparse
import common.bump
import common.tag
import common.dev

def main():
    args = process_args()
    if args.operation == 'bump':
        common.bump.bump(
            'src/letteropener.user.js',
            'CHANGELOG.md',
            'https://github.com/davidtorosyan/letteropener',
            args.bump_type,
            modules='letteropener')
    elif args.operation == 'tag':
        common.tag.tag(
            'src/letteropener.user.js')
    elif args.operation == 'dev':
        common.dev.dev(
            'src/letteropener.user.js',
            modules='letteropener')
    else:
        sys.exit('Unsupported option')

def process_args():
    parser = QuietArgumentParser(description='Updates versions.')
    parser.add_argument(
        'operation',
        choices=['bump', 'tag', 'dev'],
        default='dev',
        help='the operation')
    parser.add_argument(
        '-b', '--bump-type',
        choices=['major', 'minor', 'patch'],
        required='bump' in sys.argv,
        help='the bump type')
    try:
        return parser.parse_args()
    except KeyboardInterrupt:
        sys.exit('\nQuitting.')
    except ArgumentParserError as ex:
        sys.exit('Invalid args: {}'.format(str(ex)))

class ArgumentParserError(Exception):
    """This exception represents an error while parsing arguments."""

class QuietArgumentParser(argparse.ArgumentParser):
    """This class is for silent argument parsing."""

    def error(self, message):
        """Throw a useful error instead of exiting the program."""
        raise ArgumentParserError(message)

if __name__ == "__main__":
    main()