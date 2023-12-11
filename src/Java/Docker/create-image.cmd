docker build --no-cache -f SQL\Dockerfile.PostgreSql -t yuehkap5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t yuehkap5-java/app ../../..
