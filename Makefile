json-serve:
	json-server --watch -p4000 db.json
start-front:
	npm run start
start:
	make start-front & make json-serve