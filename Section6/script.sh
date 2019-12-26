#!/bin/bash

path=$PWD

docker run -p 3000:3000 -v /app/node_modules -v ${path}/frontend:/app 128037ee6c49