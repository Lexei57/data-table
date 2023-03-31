### This project implements a user table using the DevExtreme library.

#### User output.
The DevExtreme table displays a list of users, with personal information taken from the Random User Generator service using its API. This allows you to generate and display a given number of users with the right set of information.

#### Information filtering.
The project has implemented a tool to filter the display of columns with user information.
The ability is implemented using a number of checkbox elements Bootstrap. When the position of the checkbox is active, the column responsible for it is displayed correctly on the user's screen. Also implemented is saving the position of the checkboxes to a local repository, which allows you to save the position of the checkboxes even when the page is reloaded.

#### Switching between pages.
Transition between pages is implemented in the SPA, which allows you to move between content pages of the site without reloading it. A "lazy loading" has been applied here to optimize the process of loading application elements, allowing individual content pages to be loaded only after a user's request, rather than when the application is initialized.
