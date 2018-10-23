upgrade:
	npx install-peerdeps --dev eslint-config-airbnb

patch:
	npm version patch

minor:
	npm version minor

publish:
	npm publish
