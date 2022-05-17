#!make

# ------------------------------------------------------------------------------
# Makefile -- DMTools
# ------------------------------------------------------------------------------

-include .env

# Apply the contents of the .env to the terminal, so that the docker-compose file can use them in its builds
export $(shell sed 's/=.*//' .env)

.DEFAULT : help
.PHONY : setup close clean build-app run-app build-all run-all install test-app test-all help

## ------------------------------------------------------------------------------
## - Alias Commands
## - Performs logical groups of commands for your convenience
## ------------------------------------------------------------------------------

# Running the docker build
# 1. Run `make env`
# 2. Edit the `.env` file as needed to update variables and secrets
# 3. Run `make web`

env: | setup ## Copies the default ./env_config/env.docker to ./.env

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
## - Builds all of the DMTools backend+web projects (app)
## ------------------------------------------------------------------------------

build-all: ## Builds all backend+web containers
	@echo "==============================================="
	@echo "Make: build-web - building web images"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml build app

run-all: ## Runs all backend+web containers
	@echo "==============================================="
	@echo "Make: run-web - running web images"
	@echo "==============================================="
	@docker-compose -f docker-compose.yml up -d app

## ------------------------------------------------------------------------------
## - Build/Run App
## - Builds and runs the App project (app)
## ------------------------------------------------------------------------------

app: | build-app run-app # Builds and runs the App project 

## ------------------------------------------------------------------------------
## - Build/Run All
## - Builds and runs all projects (app)
## ------------------------------------------------------------------------------

all: | app # Builds and runs all projects

## ------------------------------------------------------------------------------
## - Run `npm` commands for projects
## ------------------------------------------------------------------------------

install: ## Runs `npm install` for all projects
	@echo "==============================================="
	@echo "Running /app install"
	@echo "==============================================="
	@cd app && npm install && cd ..

test-app: ## Runs `npm test` for the app project
	@echo "==============================================="
	@echo "Running /app test"
	@echo "==============================================="
	@cd app && npm test && cd ..

test-all: | test-app ## Runs `npm test` for app project

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

log-all: # Runs `docker logs <container> -f` for all containers
	@echo "==============================================="
	@echo "Running docker logs for all containers"
	@echo "==============================================="
	@docker-compose logs --tail 0 --follow

## ------------------------------------------------------------------------------
## - Help
## ------------------------------------------------------------------------------

help:	## Display this help screen.
	@grep -h -E '^[0-9a-zA-Z_-]+:.*?##.*$$|^##.*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-20s\033[0m %s\n", $$1, $$2}' | awk 'BEGIN {FS = "## "}; {printf "\033[36m%-1s\033[0m %s\n", $$2, $$1}'
