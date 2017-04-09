/* This file contains references to vendor libraries we're using in the project.
This is used by webpack in the production build only*. A seperate bundle for vendor
code is useful since its unlikely to change as often as the application code.
So all the libraries we reference here will be written to vendor.js so they can be
cached until one of them changes. So basicaly, this avoids customers having to download
a huge JS file any time a line of code changes. They only have to download vendor.js when
a vendor library changes which should be less frequent. Any files that aren't referenced
here will be bundled into main.js for the production build */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
