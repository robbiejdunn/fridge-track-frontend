import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { App, Stack, StackProps } from '@aws-cdk/core';
import { Distribution } from '@aws-cdk/aws-cloudfront';
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins';

export class FridgeTrackStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        const siteBucket = new Bucket(this, 'SiteBucket', {
            websiteIndexDocument: 'index.html',
            publicReadAccess: true,
        });

        const distribution = new Distribution(this, 'CloudDist', {
            defaultBehavior: { origin: new S3Origin(siteBucket) },
        });

        new BucketDeployment(this, 'DeploySite', {
            sources: [Source.asset('../app/build')],
            destinationBucket: siteBucket,
            distribution,
        });
    }
}
