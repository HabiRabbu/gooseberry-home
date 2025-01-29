FROM golang:1.23-alpine AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o /app/server

FROM alpine:latest
WORKDIR /app

COPY --from=build /app/server /app/server

RUN ls -l /app/server && chmod +x /app/server

EXPOSE 8080
CMD ["/app/server"]