default: up

dockerbuild:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

clean:
	docker-compose down -v
	rm -rf node_modules build

shell:
	docker-compose run app sh

build:
	docker-compose run app npm run build

test:
	docker-compose run app npm run test
