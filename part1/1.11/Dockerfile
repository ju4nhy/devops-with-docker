FROM openjdk:8-alpine

EXPOSE 8080

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN sed -i 's/\r$//' mvnw

RUN ./mvnw package

CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]
