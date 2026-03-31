#!/bin/bash

APP="miniapp"
PORT=3002

echo "Building image..." >> deploy.log
sudo docker build -t $APP:latest . >> deploy.log

echo "Stopping old container..." >> deploy.log
sudo docker rm -f $APP 2>/dev/null >> deploy.log

echo "Starting new container..." >> deploy.log
sudo docker run -d --restart=always -p $PORT:3000 --name $APP $APP:latest >> deploy.log

echo "Deployment Done 🚀" >> deploy.log
