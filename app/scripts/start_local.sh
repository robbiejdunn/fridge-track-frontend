#!/bin/bash

API_ENDPOINT=$(
    aws --endpoint-url=http://localhost:4566 cloudformation describe-stacks \
        --stack-name FridgeTrackStack \
        --query "Stacks[0].Outputs[?ExportName=='FridgeTrackAPIEndpoint'].OutputValue" \
        --output text
)
REACT_APP_FRIDGE_TRACK_API_ENDPOINT=$API_ENDPOINT npm run start
