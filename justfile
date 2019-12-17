# run the typescript compiler
build:
	tsc

# run with node
run: build
	node dest/main.js

# clean the destination dir
clean:
	#!/usr/bin/env bash
	if [[ -d dest/ ]]; then
		rm dest/*
	fi
