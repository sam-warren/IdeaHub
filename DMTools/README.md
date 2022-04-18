# DMTools

A project to facilitate great Dungeons and Dragons. Complies with SRD.

## Requirements

- [Node v16.14.2](https://nodejs.org/en/download/)

## Setup

1. Clone or fork the repository from [GitHub](https://github.com/sam-warren/IdeaHub) and `cd DMTools`
2. Set up any environment variables in `env_config/env.docker`
3. In the DMTools directory, `make setup`
4. Install `node_modules` for all projects using `make install`

## Running the app

In the DMTools directory:

- Database only: `make build-db run-db`
- API only: `make build-api run-api`
- App only: `make build-app run-app`
- All: `make build-all run-all`

## Logging

In the DMTools directory:

- Database logs: `make log-db`
- API logs: `make log-api`
- App logs: `make log-app`

## Testing

In the DMTools directory:

- Database only: `make test-db`
- API only: `make test-api`
- App only: `make test-app`
- All: `make test-all`

## Closing the app

In the DMTools directory:
- To stop the containers but preserve any stored data: `make close`
- To delete any stored data: `make clean`

## Help

In the DMTools directory:

- `make help`
