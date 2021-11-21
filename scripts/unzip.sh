#!/bin/sh
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
SCHEMAS_DIR=$SCRIPT_DIR/../tmp/downloads/schemas-zip
OUTPUT_DIR=$SCRIPT_DIR/../tmp/schemas

rm -rf $OUTPUT_DIR

mkdir -p $OUTPUT_DIR/us-east-2/
mkdir -p $OUTPUT_DIR/us-east-1/
mkdir -p $OUTPUT_DIR/us-west-1/
mkdir -p $OUTPUT_DIR/us-west-2/
mkdir -p $OUTPUT_DIR/af-south-1/
mkdir -p $OUTPUT_DIR/ap-east-1/
mkdir -p $OUTPUT_DIR/ap-south-1/
mkdir -p $OUTPUT_DIR/ap-northeast-3/
mkdir -p $OUTPUT_DIR/ap-northeast-2/
mkdir -p $OUTPUT_DIR/ap-southeast-1/
mkdir -p $OUTPUT_DIR/ap-southeast-2/
mkdir -p $OUTPUT_DIR/ap-northeast-1/
mkdir -p $OUTPUT_DIR/ca-central-1/
mkdir -p $OUTPUT_DIR/cn-north-1/
mkdir -p $OUTPUT_DIR/cn-northwest-1/
mkdir -p $OUTPUT_DIR/eu-central-1/
mkdir -p $OUTPUT_DIR/eu-west-1/
mkdir -p $OUTPUT_DIR/eu-west-2/
mkdir -p $OUTPUT_DIR/eu-west-3/
mkdir -p $OUTPUT_DIR/eu-north-1/
mkdir -p $OUTPUT_DIR/eu-south-1/
mkdir -p $OUTPUT_DIR/me-south-1/
mkdir -p $OUTPUT_DIR/sa-east-1/

unzip $SCHEMAS_DIR/us-east-2.zip -d $OUTPUT_DIR/us-east-2/
unzip $SCHEMAS_DIR/us-east-1.zip -d $OUTPUT_DIR/us-east-1/
unzip $SCHEMAS_DIR/us-west-1.zip -d $OUTPUT_DIR/us-west-1/
unzip $SCHEMAS_DIR/us-west-2.zip -d $OUTPUT_DIR/us-west-2/
unzip $SCHEMAS_DIR/af-south-1.zip -d $OUTPUT_DIR/af-south-1/
unzip $SCHEMAS_DIR/ap-east-1.zip -d $OUTPUT_DIR/ap-east-1/
unzip $SCHEMAS_DIR/ap-south-1.zip -d $OUTPUT_DIR/ap-south-1/
unzip $SCHEMAS_DIR/ap-northeast-3.zip -d $OUTPUT_DIR/ap-northeast-3/
unzip $SCHEMAS_DIR/ap-northeast-2.zip -d $OUTPUT_DIR/ap-northeast-2/
unzip $SCHEMAS_DIR/ap-southeast-1.zip -d $OUTPUT_DIR/ap-southeast-1/
unzip $SCHEMAS_DIR/ap-southeast-2.zip -d $OUTPUT_DIR/ap-southeast-2/
unzip $SCHEMAS_DIR/ap-northeast-1.zip -d $OUTPUT_DIR/ap-northeast-1/
unzip $SCHEMAS_DIR/ca-central-1.zip -d $OUTPUT_DIR/ca-central-1/
unzip $SCHEMAS_DIR/cn-north-1.zip -d $OUTPUT_DIR/cn-north-1/
unzip $SCHEMAS_DIR/cn-northwest-1.zip -d $OUTPUT_DIR/cn-northwest-1/
unzip $SCHEMAS_DIR/eu-central-1.zip -d $OUTPUT_DIR/eu-central-1/
unzip $SCHEMAS_DIR/eu-west-1.zip -d $OUTPUT_DIR/eu-west-1/
unzip $SCHEMAS_DIR/eu-west-2.zip -d $OUTPUT_DIR/eu-west-2/
unzip $SCHEMAS_DIR/eu-west-3.zip -d $OUTPUT_DIR/eu-west-3/
unzip $SCHEMAS_DIR/eu-north-1.zip -d $OUTPUT_DIR/eu-north-1/
unzip $SCHEMAS_DIR/eu-south-1.zip -d $OUTPUT_DIR/eu-south-1/
unzip $SCHEMAS_DIR/me-south-1.zip -d $OUTPUT_DIR/me-south-1/
unzip $SCHEMAS_DIR/sa-east-1.zip -d $OUTPUT_DIR/sa-east-1/
