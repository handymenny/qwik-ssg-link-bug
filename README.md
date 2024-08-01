To reproduce the issue:

```shell
npm ci
npm run build
npx serve dist -p 9999
```

Then open http://localhost:9999 and try the two Links.

> [!NOTE]  
> If you use a different port or a origin other than localhost, update .env accordingly



