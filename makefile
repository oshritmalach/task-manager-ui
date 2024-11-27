build:
	docker build -t task-manager-ui .
run:
	docker run -d -p 3003:80 task-manager-ui


