FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB nex_digital
ENV PG_USER postgres
COPY backend/src/database/sql/init.sql /docker-entrypoint-initdb.d/