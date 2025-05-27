// Integration of youtube API, so that data is coming from API for the pages.
//(1): First step is to create API key.
// This thing is done by the following steps
// (a): In Google -> Search for Youtube data API key, click on the link of Google Developer of it.
// (b): Follow the Before you start steps
// (d): Open the link in new tab of Create a Project in Google Developer Account.
// (e): Click on create new project
// (f): give project the name youtube clone and create the project
// (g): Click on the enable api and services button
// (h): In Searchbox search for youtube api version 3
// (i): then enable it
// (j): The generate credentials
// (k): Select public data
// (l): API key is generated
// (m): Copy the API key and then click on the done button
//(2): Now create a file with the name of data.js, here we create a variable (API_KEY) and export it and its value is the API KEY.
//(3): Then in google for developer go to the reference tab
//(4): We have to make the home page functional first by getting these card data coming from API.
//(5): In home page we have created category, setCategory useState kind thing, pass as prop in sidebar and feed component.
// (6): In Google Developer reference tab -> select videoCategory, then click on the list. Here run the snippet it has given us the array in which there are object which shows the category id number for our all categories.
// (7): Then in the feed component we will write the logic for which we will get the data for cards
// (8): In Google Developer reference tab -> select Videos, then click on the list and then select list(Most Popular Videos)
