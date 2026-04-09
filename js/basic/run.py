#!/usr/bin/python3
import os
import sys

def main():
    if len(sys.argv) < 2:
        print("Usage: run.py script-to-run.js")
        sys.exit(1)

    script = sys.argv[1]
    command = f'docker run -it --rm --name my-running-script \
    -v "$PWD":/usr/src/app \
    -w /usr/src/app node:24-alpine node {script}'

    val = os.system("/bin/bash -c \"" + command + "\"")

    print("Returned with exit value:", val)
    

if __name__ == "__main__":
    main()