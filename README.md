build
```bash
docker build . -t ctnelson1997/cs571-f23-hw1-api
docker push ctnelson1997/cs571-f23-hw1-api
```

run 
```bash
docker pull ctnelson1997/cs571-f23-hw1-api
docker run --name=cs571_f23_hw1_api -d --restart=always -p 38101:38101 -v /cs571/f23/hw1/config.prod.public:/cs571/config.prod.public -v /cs571/f23/hw1/config.prod.secret:/cs571/config.prod.secret ctnelson1997/cs571-f23-hw1-api
```
