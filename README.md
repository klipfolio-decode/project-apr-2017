# Welcome to Klipfolio deCode Project (Apr 2017)

Here are a few things you need to get started.

# Table of Contents
1. [Git Cheat Sheet](#git-cheat-sheet)
2. [NPM](#npm)

## Git Cheat Sheet
Here are a few commands to get you started with git. 

The first thing you will need to do is clone the repository in to your dev environment. 

To do this, you will need to have git installed.
Windows Users: https://git-for-windows.github.io/
Linux Users: https://git-scm.com/download/linux
Mac Users: https://git-scm.com/download/mac

If you do not already have an SSH key associated with your github account, create one by typing `ssh-keygen` in your terminal, and then add it to your github account. (You can find your public key by doing: `cat ~/.ssh/id_rsa.pub`.

Next, use the following command to clone the repository on to your dev machine:  
`git clone git@github.com:klipfolio-decode/project-apr-2017.git`

Once the repository has been cloned to your dev environment, you're ready to start coding!

A typical git workflow looks something like the following:  
`git checkout master` (to start from the master branch)  
`git pull` (to get the most recent changes)  
`git checkout -b "your branch name"` (to create and switch to the branch you will be working on)  
*_make code changes_*  
`git status` (to see what files have been modified)  
`git diff` (to see that the changes are what you intend to commit)  
`git add .` (to add the files to the commit)  
`git commit -m "your commit message"` (to commit the code)  
`git push` (to push your commits from your dev environment to the github repository for others to be able to get)  
*_open pull request on github to be reviewed by a team-mate (or two)_*  
*_merge the pull request once it's been approved, then delete the branch_*  

If you run into any issues with _Merge Conflicts_ and don't have any experience resolving them, don't hesitate to reach out to one of the Klipfolio team members for help. :smile:  

## NPM
NPM is a useful tool for dependency management. Install it using the following link: https://nodejs.org/en/  

Once installed, run `npm install` in the root directory of the repo.  

New dependencies can be added by either adding them to the `package.json` file, or by doing `npm install 'packagename' -s`.  
