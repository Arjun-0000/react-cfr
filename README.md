## ReDo - Course for Revise Project  - From React 
## Practise Version

## Font Awesome : 5.13, 5.14, 5.15 = now v4.7.0
## Bootstrap : 5.1.3 CDN
## Bootstrap Js : combined Js with proper



## some changes

### Deploy of project in the Github

- check node , npm
- Github : empty repo without readme gitignore license
- after create-react-app 
- inside proj dir : CLI 
    - install gh-pages package as a "dev-dependency" of the app
    - $ npm install gh-pages --save-dev
- add properties in package.json
    - top level : "homepage": "http://Arjun-0000.github.io/react-cfr"
    - {username} and {repo name}
    - scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
- git init
- git remote add origin git@github.com:Arjun-0000/react-cfr.git
- Deploy : $ npm run deploy
- gh-pages branch consist of built app code
- _Published_
- git add .
- git commit -m "msg"
- git push origin master
- master branch app source code

### font awwesome 4.7.0

- npm install --save font-awesome
- .js file : import 'font-awesome/css/font-awesome.min.css';
- install only 4.7 


### bootstrap : 5.1.3
### reactstrap : 8.10.0

showing there 
    react & react-dom : 17.0.2

- npm install --save bootstrap
- npm install --save reactstrap react react-dom