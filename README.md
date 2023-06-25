 https://testproject-7cc9b.web.app/

 FROM alpine

LABEL "AUthor"="D Tsachev"

RUN apk add --no-cache wget

RUN apk add apache2 

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

EXPOSE 80

WORKDIR /var/www/htdocs

VOLUME [ "var/log/apache2" ]

COPY WebWholesaleApp /var/www/htdocs
