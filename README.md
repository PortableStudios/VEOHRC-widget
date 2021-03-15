# VEOHRC Community Reporting Tool
Embeddable widget for reporting Human Rights issues without lodging a formal complaint.

https://www.humanrights.vic.gov.au/get-help/community-reporting-tool/

## Embedding on your site
Add the following embed code:

````
<iframe src="https://s3.ap-southeast-2.amazonaws.com/cfa-veohrc/widget_test/index.html" width="100%" marginheight="0" frameborder="0" id="frame1" scrollable ="no"></iframe><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.min.js"></script><script type="text/javascript">iFrameResize({ log:true, checkOrigin:false});</script>
````

## Development
* `yarn` install dependencies
* `yarn start` to run in dev mode
* `yarn build` to build production bundle in `./dist`

## Deployment