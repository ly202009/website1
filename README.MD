HTML learning:
1. adding DIV elements
2. define styles (e.g., border, background color, alignment)
3. attributes/properties (e.g., name, style, etc.) of a tag/element/selector.


*****************************************************
The following is for init of the project 
*****************************************************

This is my first web building project
0. under c:\projects, create a folder called 'website1'

1. Init the project by:
https://docs.npmjs.com/cli/init
a. Bring up the terminal window/panel (view->terminal)
b. under the folder 'website1', Type 'npm init' (a command line)
c. when prompted for options on init of the project, select default options

2. Create a file 'README.MD', and write down the things done

3. Create a home page using html (index.html)

4. Create a github account

5. Go to https://git-scm.com/download/win and download git for window x64 package, install under C:\programs

6. add git path to the windows path setting, AND RESTART the PC to let the new path setting work! 
(https://stackoverflow.com/questions/4492979/git-is-not-recognized-as-an-internal-or-external-command)

7. in the terminal window, type 'git init'

8. also set the account by typing 'git config --global user.email "leeyayoh@gmail.com"'

9. In github, create a new repository named 'website1'

10. Link the local folder to the remote repository by the following:
https://docs.github.com/en/github/using-git/adding-a-remote

in the terminal window, type 'git remote add origin https://github.com/ly202009/website1.git'

11. to commit (upload/push) the local files onto the remote repository
type the following lines each at a time:
'git add .'
'git commit -m "commit 1"'
'git push origin master'

If it is the first time pushing to github, a window pops up asking for account and password for github

12. Go to netlify.com and sign up using the github account

13. add netlify account and github account homepage as bookmark in Google Chrome's bookmark folder 'web building'

14. Create a new website in netlify using contents from github
- click new site from git
- click github
- click authorize netlify
- select all repositories
- and select the repository 'website1'
- and select the repsittory 'website1' again
- and click 'deploy site'

The contents of newsite1 at github is deployed and a web address is given (automatically created by netlify)

to customize the name of the new website on netlify, do the following:
- click site settings
- click change site name
- change the site name to 'lywebsite1'
now the new web address is lywebsite1.netlify.app

Yah!

15. Add lywebsite1.netlify.app to the bookmark folder 'Netlify Sites'

16. Set a scheduled task to upload the contents from local to github regularly (every hour)
- Create a file 'autocommit.cmd' under the folder cmd which is newly created
- in the cmd file, put the following contents
c:
cd C:\Projects\website1
git add .
git commit -m "v5"
git push origin master
- open up the windows task scheduler
- in the panel 'Actions' (on the right), click create task
- in the pop up menu, click the tag 'Actions', click 'new', and browse to point to the file 'C:\Projects\website1\cmd\autocommit.cmd'
- click ok to save the settings
- click the tag 'trigger', click 'new' and set the following:
set the settings to daily
start from 8am
check the box for repeating and set the interval as one hour
- click ok
- click the tag settings
- check the box 'Run task as soon as possible after a scheduled start is missed'
- finally, click the tag 'general', and enter the name of the scheduled task: '_autocommit website1 project'