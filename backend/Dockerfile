# Build stage
FROM golang:1.21-alpine AS build
WORKDIR /app
COPY go.mod ./
RUN go mod init my-portal
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /my-portal

# Run stage
FROM alpine:latest
COPY --from=build /my-portal /my-portal
EXPOSE 8080
CMD ["/my-portal"]