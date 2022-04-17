# DMTools

A project to facilitate great Dungeons and Dragons. Complies with SRD.

## Requirements
- [Node v16.14.2](https://nodejs.org/en/download/)
## Setup

1. Download the repository from [GitHub](https://github.com/sam-warren/IdeaHub)
2. `cd DMTools`
3. Set up any environment variables in `env_config/env.docker`
4. In the DMTools directory, `make setup`
5. `make install`

## Running the app

- Database only: `make build-db run-db`
- Database and API: `make build-backend run-backend`
- Database, API and App: `make build-web run-web`

## Logging

In the DMTools directory:

- Database logs: `make log-db`
- API logs: `make log-api`
- App logs: `make log-app`

## Testing

To test the API, DB and App, run `make test` in the DMTools directory.
