FROM golang:1.23-alpine AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod tidy

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o server

FROM alpine:latest
WORKDIR /app  # Keep everything inside /app for organization

COPY --from=build /app/server /app/server

EXPOSE 8080

CMD ["/app/server"]
