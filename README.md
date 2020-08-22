# request-header-parser-microservice
a microservice that will response request header parser parameter including `ip address`,  `language`, and `software`.

example of response:
```json
{
    "ipaddress":"159.20.14.100",
    "language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

# route
```
{url}/api/whoami
```

# how to install
1. git clone
2. cd to project folder
3. npm install
4. npm start
