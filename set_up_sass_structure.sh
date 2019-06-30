# copy media to current location
# cp -r /home/administrator/Desktop/web_dev_scripts/script_media/* ./

# initialize the project
npm init
npm install gulp --save-dev
npm install gulp-sass --save-dev

#install rest of dependencies
npm install

#start git firs commit
git init
git add .
git commit -m 'first commit'


#start watcher
gulp watch