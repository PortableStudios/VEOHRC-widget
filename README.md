# NO LONGER USED AND MAINTAINED

**Migrated to [bitbucket.org/portable/veohrc-widget](https://bitbucket.org/portable/veohrc-widget/src/main/)**

# VEOHRC Community Reporting Tool

Embeddable widget for reporting Human Rights issues without lodging a formal complaint.

<https://www.humanrights.vic.gov.au/get-help/community-reporting-tool/>

## Embedding on your site

Add the following embed code:

````html
<iframe src="https://s3-eu-west-1.amazonaws.com/veohrc-widget/index.html" width="100%" marginheight="0" frameborder="0" id="frame1" scrollable ="no"></iframe><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.6/iframeResizer.min.js"></script><script type="text/javascript">iFrameResize({ checkOrigin:false });</script>
````

## Development

* `yarn` install dependencies
* `yarn start` to run in dev mode
* `yarn build` to build production bundle in `./dist`

## Deployment

1. You will need the `aws cli` command line tools installed. You can install these with `homebrew` with this command: `brew install awscli`

2. You will need access to the s3 bucket `veohrc-widget` in the AWS console. You should be able to access this with your Portable account.

3. You will need your aws credentials set up in your `~/.aws/credentials` file

4. Build the project with `yarn build`

5. Update the contents of the s3 bucket:
`aws --profile veohrc s3 cp --recursive --acl=public-read ./dist s3://veohrc-widget`

## Testing Environment

To test the application, create a new s3 bucket and upload the files there. The url of the form will be structured like this example: <http://s3.ap-southeast-2.amazonaws.com/veohrc-widget-staging/index.html>
