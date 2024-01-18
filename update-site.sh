#!/bin/bash
cd /root/thistim.me
git pull
npm i
systemctl stop site
systemctl start site