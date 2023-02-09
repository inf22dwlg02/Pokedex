#!/bin/bash
set -e
service mysql start
mysql < pokemon.sql
service mysql stop