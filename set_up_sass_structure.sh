# copy media to current location
# cp -r /home/administrator/Desktop/web_dev_scripts/script_media/* ./

# initialize the project
npm init
npm install gifsicle@1.0.3
npm install gulp --save-dev
npm install gulp-sass --save-dev


#install rest of dependencies
npm install
chmod 777 * -R
npm install

#start git firs commit
git init
git add .
git commit -m 'first commit'


#start watcher
gulp watch