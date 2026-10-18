FROM python:3.12-alpine AS site

WORKDIR /app
COPY scripts/render-partnerships.py ./scripts/render-partnerships.py
COPY site ./site
RUN python scripts/render-partnerships.py

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=site /app/site/ /usr/share/nginx/html/
EXPOSE 80
