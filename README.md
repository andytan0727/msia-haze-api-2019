# MSIA Haze API 2019

This is a simple project built on top of [APIMS](http://apims.doe.gov.my/public_v2/api_table.html) table. It adds some features missing in the source table such as sorting data and filter, with the same information shown.


## Get started for local development
Install the dependencies...

```bash
cd msia-haze-api-2019
npm install
```

This app uses [now](https://zeit.co/now). So ensure that you have `now cli` installed:

```bash
npm install -g now
now --version
```

then start our local development server with `now`:
```bash
now dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Deploying to the web

### With [now](https://zeit.co/now)

From within the project folder:
```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

## License

MIT © 2019 [Andy Tan](https://github.com/andytan0727)