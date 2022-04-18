#!make

# ------------------------------------------------------------------------------
# Makefile -- DMTools
# ------------------------------------------------------------------------------

-include .env

# Apply the contents of the .env to the terminal, so that the docker-compose file can use them in its builds
export $(shell sed 's/=.*//' .env)

.DEFAULT : help
.PHONY : setup close clean build-db run-db build-api run-api build-app run-app build-all run-all install test-db test-api test-app test-all help

## ------------------------------------------------------------------------------
## - Alias Commands
## - Performs logical groups of commands for your convenience
## ------------------------------------------------------------------------------

# Running the docker build
# 1. Run `make env`
# 2. Edit the `.env` file as needed to update variables and secrets
# 3. Run `make web`

env: | setup ## Copies the default ./env_config/env.docker to ./.env
backend: | close build-backend run-backend ## Performs all commands necessary to run all backend projects (db, api) in docker
web: | close build-web run-web ## Performs all commands necessary to run all backend+web projects (db, api, app) in docker

## ------------------------------------------------------------------------------
## - Setup/Cleanup Commands
## ------------------------------------------------------------------------------

setup: ## Prepares the environment variables used by all project docker containers
	@echo "==============================================="
	@echo "Make: setup - copying env.docker to .env"
	@echo "==============================================="
	@cp -i env_config/env.docker .env

close: ## Closes all project containers
	@echo "==============================================="
	@echo "Make: close - closing Docker containers"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml down

clean: ## Closes and cleans (removes) all project containers
	@echo "==============================================="
	@echo "Make: clean - closing and cleaning Docker containers"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml down -v --rmi all --remove-orphans

## ------------------------------------------------------------------------------
## - Build/Run DB Commands
## - Builds the DMTools db project (db)
## ------------------------------------------------------------------------------

build-db: ## Builds the db container
	@echo "==============================================="
	@echo "Make: build-db - building db images"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml build db

run-db: ## Runs the db container
	@echo "==============================================="
	@echo "Make: run-db - running db images"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml up -d db

## ------------------------------------------------------------------------------
## - Build/Run API Commands
## - Builds the DMTools API project (api)
## ------------------------------------------------------------------------------

build-api: ## Builds the api container
	@echo "==============================================="
	@echo "Make: build-api - building api image"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml build api

run-api: ## Runs the api container
	@echo "==============================================="
	@echo "Make: run-api - running api image"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml up -d api

## ------------------------------------------------------------------------------
## - Build/Run App Commands
## - Builds the DMTools App project (app)
## ------------------------------------------------------------------------------

build-app: ## Builds the app container
	@echo "==============================================="
	@echo "Make: build-app - building app image"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml build app

run-app: ## Runs the app container
	@echo "==============================================="
	@echo "Make: run-app - running app image"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml up -d app

## ------------------------------------------------------------------------------
## - Build/Run Backend+Web Commands (backend + web frontend)
## - Builds all of the DMTools backend+web projects (db, api, app)
## ------------------------------------------------------------------------------

build-all: ## Builds all backend+web containers
	@echo "==============================================="
	@echo "Make: build-web - building web images"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml build db api app

run-all: ## Runs all backend+web containers
	@echo "==============================================="
	@echo "Make: run-web - running web images"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml up -d db api app

## ------------------------------------------------------------------------------
## - Run `npm` commands for projects
## ------------------------------------------------------------------------------

install: ## Runs `npm install` for all projects
	@echo "==============================================="
	@echo "Running /api install"
	@echo "==============================================="
	@cd api && npm install && cd ..
	@echo "==============================================="
	@echo "Running /app install"
	@echo "==============================================="
	@cd app && npm install && cd ..
	@echo "==============================================="
	@echo "Running /db install"
	@echo "==============================================="
	@cd db && npm install && cd ..

test-db: ## Runs `npm test` for the db project
	@echo "==============================================="
	@echo "Running /db test"
	@echo "==============================================="
	@cd db && npm test && cd ..

test-api: ## Runs `npm test` for the api project
	@echo "==============================================="
	@echo "Running /api test"
	@echo "==============================================="
	@cd api && npm test && cd ..

test-app: ## Runs `npm test` for the app project
	@echo "==============================================="
	@echo "Running /app test"
	@echo "==============================================="
	@cd app && npm test && cd ..

test-all: ## Runs `npm test` for api, and app projects
	@echo "==============================================="
	@echo "Running /db tests"
	@echo "==============================================="
	@cd db && npm test && cd ..
	@echo "==============================================="
	@echo "Running /app tests"
	@echo "==============================================="
	@cd app && npm test && cd ..
	@echo "==============================================="
	@echo "Running /api tests"
	@echo "==============================================="
	@cd api && npm test && cd ..



## ------------------------------------------------------------------------------
## - Run `docker logs <container> -f` commands for all projects
## - You can include additional parameters by appaending an `args` param
## - Ex: `make log-app args="--tail 0"`
## ------------------------------------------------------------------------------
log-app: ## Runs `docker logs <container> -f` for the app container
	@echo "==============================================="
	@echo "Running docker logs for the app container"
	@echo "==============================================="
	@docker logs $(DOCKER_PROJECT_NAME)-app-$(DOCKER_NAMESPACE)-container -f $(args)

log-api: ## Runs `docker logs <container> -f` for the api container
	@echo "==============================================="
	@echo "Running docker logs for the api container"
	@echo "==============================================="
	@docker logs $(DOCKER_PROJECT_NAME)-api-$(DOCKER_NAMESPACE)-container -f $(args)

log-db: ## Runs `docker logs <container> -f` for the database container
	@echo "==============================================="
	@echo "Running docker logs for the db container"
	@echo "==============================================="
	@docker logs $(DOCKER_PROJECT_NAME)-db-$(DOCKER_NAMESPACE)-container -f $(args)

## ------------------------------------------------------------------------------
## - Help
## ------------------------------------------------------------------------------

help:	## Display this help screen.
	@grep -h -E '^[0-9a-zA-Z_-]+:.*?##.*$$|^##.*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-20s\033[0m %s\n", $$1, $$2}' | awk 'BEGIN {FS = "## "}; {printf "\033[36m%-1s\033[0m %s\n", $$2, $$1}'
