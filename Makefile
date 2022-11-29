create-db:
	docker pull postgres
	docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
	cd $(pwd)/backend/ && npx sequelize-cli db:migrate

build-react:
	cd $(pwd)/frontend/ && yarn
	@echo react builded successfully!

run-react:
	cd $(pwd)/frontend/ && yarn dev

build-api:
	cd $(pwd)/backend/ && yarn
	@echo api builded successfully!

run-api:
	cd $(pwd)/backend/ && yarn dev

run-application:
	$(MAKE) build-api
	$(MAKE) build-react
	$(MAKE) run-api
	$(MAKE) run-react

run-application-fs:
	$(MAKE) create-db
	$(MAKE) build-api
	$(MAKE) build-react
	$(MAKE) run-api
	$(MAKE) run-react
