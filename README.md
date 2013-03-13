Toy Problems
============
Welcome to Toy Problems. This repository will be updated every morning with a new
code challenge.

Using this Repository
---------------------
Open `index.html` and click on today's toy problem to run the problem's specs.
(Note that not all toy problems come with specs.)

Getting a Copy of the Repo
--------------------------
If you haven't already, fork the repository on GitHub and clone your newly created
repo down to you computer. Afterward, check out your class's branch and create a new
branch off of it. For example:

    git checkout your_class_branch      // Replace your class's branch name here
    git branch your_github_username     // Replace your username here
    git checkout your_github_username   // Replace your username here

Once you're done, push your changes to GitHub and issue a pull request from your
repository's branch to your hackreactor branch.


Updating the Repository
-----------------------

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with hackreactor's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to hackreactor's version of the repo:

    git remote add upstream https://github.com/hackreactor/toy-problems.git

After you've done that, updating your repo is as simple as running the following:

    git checkout your_github_username   // Replace your username here
    git pull upstream your_class_branch // Replace your class's branch name here

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.
