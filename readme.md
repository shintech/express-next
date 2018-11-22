## shintech/express-next

### Installation

    ./install.sh
    
### Usage
#### Development
    
    npm run dev
    
    # or
    
    yarn dev
    
#### Production
    # ./config/env/production.env

    PORT=8000
    HOST=0.0.0.0
    NODE_ENV=production
    BASE_URL=https://shintech.ninja

    docker-compose build && docker-compose up -d

### TODO

- [x] navbar
- [ ] write tests for theme code
- [ ] srs caching - https://github.com/zeit/next.js/blob/canary/examples/ssr-caching/server.js
- [x] svg components - https://github.com/zeit/next.js/tree/canary/examples/svg-components
- [ ] try preact, nerv, or inferno
- [x] active classname - https://github.com/zeit/next.js/tree/canary/examples/active-class-name
- [ ] ioc - https://github.com/alexindigo/ioc
- [ ] https://github.com/zeit/next.js/tree/canary/examples/root-static-files
- [ ] https://github.com/zeit/next.js/tree/canary/examples/with-kea
- [ ] https://github.com/zeit/next.js/tree/canary/examples/with-loading
- [ ] slideshow - https://www.w3schools.com/howto/howto_js_slideshow.asp
- [x] dotenv
- [ ] more descriptive names for redux actions