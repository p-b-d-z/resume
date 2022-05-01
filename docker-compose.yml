version: '3'

services:
  nginx:
    image: nginx:alpine
    container_name: resume
    ports:
      - "9001:80"
    volumes:
      - /home/docker/config/resume/www:/usr/share/nginx/html:ro
    restart: unless-stopped
