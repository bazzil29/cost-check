#!/bin/bash
# json=$(aws ce get-cost-and-usage --time-period Start=2020-01-01,End=2021-01-01 --granularity MONTHLY  --metrics "BlendedCost" "UnblendedCost" "UsageQuantity")
# json=$(cat billing.json)

# echo "{\"info\":">billing.json&& aws sts get-caller-identity >> billing.json &&echo ", \"billing\":">>billing.json&& aws ce get-cost-and-usage --time-period Start=2020-01-01,End=2021-01-01 --granularity MONTHLY  --metrics  "BlendedCost" "UnblendedCost" "UsageQuantity" >> billing.json&& echo "}">>billing.json&&curl --location --request POST 'http://localhost:8080/check-cost' --header 'Content-Type: application/json' --data-binary '@billing.json'

# curl --location --request POST 'http://localhost:8080/check-cost' \
# --header 'Content-Type: application/json' \
# --data-raw \'$json\'
# curl -i -X POST -H  "Content-Type: multipart/form-data" -F 'data=@billing.json' http://localhost:8080/check-cost

curl --location --request POST 'http://localhost:8080/check-cost' --header 'Content-Type: application/json' --data-binary '@billing.json'






