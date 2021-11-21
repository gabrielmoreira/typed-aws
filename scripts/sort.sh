#!/bin/sh
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
SPECS_DIR=$SCRIPT_DIR/../tmp/downloads/specs
OUTPUT_DIR=$SCRIPT_DIR/../tmp/specs
mkdir -p $OUTPUT_DIR

jq --sort-keys . $SPECS_DIR/us-east-2.json > $OUTPUT_DIR/us-east-2.json
jq --sort-keys . $SPECS_DIR/us-east-1.json > $OUTPUT_DIR/us-east-1.json
jq --sort-keys . $SPECS_DIR/us-west-1.json > $OUTPUT_DIR/us-west-1.json
jq --sort-keys . $SPECS_DIR/us-west-2.json > $OUTPUT_DIR/us-west-2.json
jq --sort-keys . $SPECS_DIR/af-south-1.json > $OUTPUT_DIR/af-south-1.json
jq --sort-keys . $SPECS_DIR/ap-east-1.json > $OUTPUT_DIR/ap-east-1.json
jq --sort-keys . $SPECS_DIR/ap-south-1.json > $OUTPUT_DIR/ap-south-1.json
jq --sort-keys . $SPECS_DIR/ap-northeast-3.json > $OUTPUT_DIR/ap-northeast-3.json
jq --sort-keys . $SPECS_DIR/ap-northeast-2.json > $OUTPUT_DIR/ap-northeast-2.json
jq --sort-keys . $SPECS_DIR/ap-southeast-1.json > $OUTPUT_DIR/ap-southeast-1.json
jq --sort-keys . $SPECS_DIR/ap-southeast-2.json > $OUTPUT_DIR/ap-southeast-2.json
jq --sort-keys . $SPECS_DIR/ap-northeast-1.json > $OUTPUT_DIR/ap-northeast-1.json
jq --sort-keys . $SPECS_DIR/ca-central-1.json > $OUTPUT_DIR/ca-central-1.json
jq --sort-keys . $SPECS_DIR/cn-north-1.json > $OUTPUT_DIR/cn-north-1.json
jq --sort-keys . $SPECS_DIR/cn-northwest-1.json > $OUTPUT_DIR/cn-northwest-1.json
jq --sort-keys . $SPECS_DIR/eu-central-1.json > $OUTPUT_DIR/eu-central-1.json
jq --sort-keys . $SPECS_DIR/eu-west-1.json > $OUTPUT_DIR/eu-west-1.json
jq --sort-keys . $SPECS_DIR/eu-west-2.json > $OUTPUT_DIR/eu-west-2.json
jq --sort-keys . $SPECS_DIR/eu-west-3.json > $OUTPUT_DIR/eu-west-3.json
jq --sort-keys . $SPECS_DIR/eu-north-1.json > $OUTPUT_DIR/eu-north-1.json
jq --sort-keys . $SPECS_DIR/eu-south-1.json > $OUTPUT_DIR/eu-south-1.json
jq --sort-keys . $SPECS_DIR/me-south-1.json > $OUTPUT_DIR/me-south-1.json
jq --sort-keys . $SPECS_DIR/sa-east-1.json > $OUTPUT_DIR/sa-east-1.json
