# sfmc-ngrok-local-development
Test SFMC CloudPage files locally

# ngrok
This setup uses [NGROK](https://ngrok.io/)  to create an HTTP tunnel from your localhost to a public accessible URL. Please advise that this may open your network to potential risk so consult your security team as required.

# setup
1. Fork repository to your github account & Clone to your local directory or download zip file
2. Run `npm install` to install dependencies
3. Copy/Paste the `CloudPage Template` file to a new CloudPage collection & publish the page
4. Login to your NGROK account and copy the AuthToken
5. Paste NGROK AuthToken to a `.env` file (in the root directory) using the `_templates/.dist.env.template` file as a reference
6. Run `nodemon start`
7. Visit `http://localhost/4040` to view the NGROK dashboard and click on the `inspect` tab
8. Locate and copy the tunnel url `https://{{COPY THE STRING FROM HERE}}.ngrok.io`
9. Visit your CloudPage URL and paste the URL string to query parameter `https://CloudPageURL.com?t={{URL_STRING}}`


Shout out to [Matheswaran Kanagarajan](https://www.linkedin.com/in/matheswaran-kanagarajan/) for the idea and sending me down this rabbit-hole!