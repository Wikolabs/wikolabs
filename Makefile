# Makefile

include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo " start                       Start containers (dev) in detached mode"
	@echo " start-f                     Start containers (dev) with logs"
	@echo " prod                        Start containers (prod) in detached mode"
	@echo " prod-restart                Restart app only (prod, after CI build)"
	@echo " stop                        Stop containers"
	@echo " kill                        Kill containers"
	@echo " ssl                         Init SSL certificates (run once)"
	@echo ""

start:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml up -d

start-f:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml up

prod:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up -d

prod-restart:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml -f docker/docker-compose.prod.yml restart app

stop:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml down

kill:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml kill

ssl:
	@chmod +x docker/init-ssl.sh
	@./docker/init-ssl.sh $(DOMAIN) $(EMAIL)