# Makefile

include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Quick-start Commands:"
	@echo " start                       Create and start containers in detached mode"
	@echo " start-f                     Create and start containers"
	@echo " stop                        Stop containers"
	@echo " kill                        Kill containers"
	@echo " ssl                         Init SSL certificates (run once)"
	@echo ""

start:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml up -d

start-f:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml up

stop:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml down

kill:
	@docker compose -p ${NAMESPACE} --env-file .env -f docker/docker-compose.yml kill

ssl:
	@chmod +x docker/init-ssl.sh
	@./docker/init-ssl.sh $(DOMAIN) $(EMAIL)