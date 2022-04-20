# DMTools

A project to facilitate great Dungeons & Dragons. Complies with SRD.

## Requirements

- [Node v16.14.2](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [Chocolatey](https://chocolatey.org/) , note: comes with node if selected during install
- make, cmake, `choco install make cmake`

## Setup

1. Clone or fork the repository from [GitHub](https://github.com/sam-warren/IdeaHub) and `cd DMTools`
2. Set up any environment variables in `env_config/env.docker`
3. In the DMTools directory, `make setup`
4. Update submodule repos, `git submodule update --init --recursive`
5. Install `node_modules` for all projects using `make install`

## Running the project

In the DMTools directory:

- Database only: `make db`
- API only: `make api`
- App only: `make app`
- All: `make all`

More options are available in `Makefile`.

## Logging

In the DMTools directory:

- Database logs: `make log-db`
- API logs: `make log-api`
- App logs: `make log-app`
- All logs: `make log-all`

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
