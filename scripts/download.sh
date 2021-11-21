#!/bin/sh
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DOWNLOAD_DIR=$SCRIPT_DIR/../tmp/downloads/
SCHEMAS_DIR=$DOWNLOAD_DIR/schemas-zip/
SPECS_DIR=$DOWNLOAD_DIR/specs/

rm -rf $DOWNLOAD_DIR
mkdir -p $SPECS_DIR
mkdir -p $SCHEMAS_DIR

curl https://schema.cloudformation.us-east-2.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/us-east-2.zip
curl https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/us-east-1.zip
curl https://schema.cloudformation.us-west-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/us-west-1.zip
curl https://schema.cloudformation.us-west-2.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/us-west-2.zip
curl https://schema.cloudformation.af-south-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/af-south-1.zip
curl https://schema.cloudformation.ap-east-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-east-1.zip
curl https://schema.cloudformation.ap-south-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-south-1.zip
curl https://schema.cloudformation.ap-northeast-3.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-northeast-3.zip
curl https://schema.cloudformation.ap-northeast-2.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-northeast-2.zip
curl https://schema.cloudformation.ap-southeast-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-southeast-1.zip
curl https://schema.cloudformation.ap-southeast-2.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-southeast-2.zip
curl https://schema.cloudformation.ap-northeast-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ap-northeast-1.zip
curl https://schema.cloudformation.ca-central-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/ca-central-1.zip
curl https://schema.cloudformation.cn-north-1.amazonaws.com.cn/CloudformationSchema.zip > $SCHEMAS_DIR/cn-north-1.zip
curl https://schema.cloudformation.cn-northwest-1.amazonaws.com.cn/CloudformationSchema.zip > $SCHEMAS_DIR/cn-northwest-1.zip
curl https://schema.cloudformation.eu-central-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/eu-central-1.zip
curl https://schema.cloudformation.eu-west-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/eu-west-1.zip
curl https://schema.cloudformation.eu-west-2.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/eu-west-2.zip
curl https://schema.cloudformation.eu-west-3.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/eu-west-3.zip
curl https://schema.cloudformation.eu-north-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/eu-north-1.zip
curl https://schema.cloudformation.eu-south-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/eu-south-1.zip
curl https://schema.cloudformation.me-south-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/me-south-1.zip
curl https://schema.cloudformation.sa-east-1.amazonaws.com/CloudformationSchema.zip > $SCHEMAS_DIR/sa-east-1.zip

curl --compressed https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/us-east-2.json
curl --compressed https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/us-east-1.json
curl --compressed https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/us-west-1.json
curl --compressed https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/us-west-2.json
curl --compressed https://cfn-resource-specifications-af-south-1-prod.s3.af-south-1.amazonaws.com/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/af-south-1.json
curl --compressed https://cfn-resource-specifications-ap-east-1-prod.s3.ap-east-1.amazonaws.com/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-east-1.json
curl --compressed https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-south-1.json
curl --compressed https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-northeast-3.json
curl --compressed https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-northeast-2.json
curl --compressed https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-southeast-1.json
curl --compressed https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-southeast-2.json
curl --compressed https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ap-northeast-1.json
curl --compressed https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/ca-central-1.json
curl --compressed https://cfn-resource-specifications-cn-north-1-prod.s3.cn-north-1.amazonaws.com.cn/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/cn-north-1.json
curl --compressed https://cfn-resource-specifications-cn-northwest-1-prod.s3.cn-northwest-1.amazonaws.com.cn/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/cn-northwest-1.json
curl --compressed https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/eu-central-1.json
curl --compressed https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/eu-west-1.json
curl --compressed https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/eu-west-2.json
curl --compressed https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/eu-west-3.json
curl --compressed https://diy8iv58sj6ba.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/eu-north-1.json
curl --compressed https://cfn-resource-specifications-eu-south-1-prod.s3.eu-south-1.amazonaws.com/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/eu-south-1.json
curl --compressed https://cfn-resource-specifications-me-south-1-prod.s3.me-south-1.amazonaws.com/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/me-south-1.json
curl --compressed https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json > $SPECS_DIR/sa-east-1.json
curl --compressed https://s3.us-gov-east-1.amazonaws.com/cfn-resource-specifications-us-gov-east-1-prod/latest/CloudFormationResourceSpecification.json > $SPECS_DIR/us-gov-east-1.json
curl --compressed https://s3.us-gov-west-1.amazonaws.com/cfn-resource-specifications-us-gov-west-1-prod/latest/CloudFormationResourceSpecification.json > $SPECS_DIR/us-gov-west-1.json