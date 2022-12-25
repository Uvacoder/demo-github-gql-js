export GH_TOKEN

default: install

all: install run

h help:
	grep '^[a-z]' Makefile


install:
	npm install

run:
	source .env \
		&& npm run process
