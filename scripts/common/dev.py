#!/usr/bin/env python
# -*- coding: utf-8 -*-

import datetime
import fileinput
import os
import re
import sys
import subprocess

def dev(path, modules='', src='src'):
    # helper
    def repo_root():
        return subprocess.Popen(['git', 'rev-parse', '--show-toplevel'], stdout=subprocess.PIPE).communicate()[0].rstrip().decode('utf-8')

    def from_root(path):
        return os.path.join(repo_root(), path)

    def add_tag(tag):
        return subprocess.Popen(['git', 'tag', tag], stdout=subprocess.PIPE).communicate()[0].rstrip().decode('utf-8')

    # find version and increase
    version_pattern = re.compile('(^\s*//\s*@version\s+)(\d*\.\d*\.\d*)')
    module_pattern = re.compile('(^\s*//\s*@require\s+)https://\S+/{}/\S+?(/{}/\S+\n)'.format(modules, src)) if modules else None
    name_pattern = re.compile('(^\s*//\s*@name\s+\S+)\s*\n')
    replaced_version = False
    replaced_name = False
    added_dev_js = False
    file_prefix = 'file://'
    dev_version = '0.0.1'
    dev_suffix = '.dev'
    dev_file = 'dev.js'
    require_prefix = '// @require'
    root = repo_root()
    for i, line in enumerate(open(from_root(path))):
        if not replaced_version:
            match = re.match(version_pattern, line)
            if match:
                line = match.group(1) + dev_version + '\n'
                replaced_version = True
        if not replaced_name:
            match = re.match(name_pattern, line)
            if match:
                line = match.group(1) + dev_suffix + '\n'
                replaced_name = True
        if not added_dev_js and line.startswith(require_prefix):
            dev_line = '{}      {}{}/{}/{}'.format(require_prefix, file_prefix, root, src, dev_file)
            print(dev_line)
            added_dev_js = True
        if module_pattern:
            match = re.match(module_pattern, line)
            if match:
                start, end = match.group(1, 2)
                line = start + file_prefix + root + end
        print(line, end='')