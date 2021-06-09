# DSI Final Practice

## Description of the solution

We have built an email manager focused on the university community using Angular technology that meets the needs initially required.

This manager can be accessed from the following link: <https://xvenve.github.io/DSI-final-practice>

This email manager is able to allow the user to filter and categorize their university emails in a quick and easy way thanks to the implemented options where it is very easy to see which subject each email belongs to, besides we can quickly filter by one subject or another.
On the other hand, the objective has been met that the website has a responsive design, where its use will be easy both on computers and tablets and mobile devices.

## Technical decisions

We have chosen to design an application where blue and white colors predominate, complementary to each other and that offer a university atmosphere that we consider appropriate. Regarding the design, we have chosen to have always present the header and the left bar of options regardless of the page where we are, the latter can be deployed when the user deems necessary and appropriate.

On the other hand, for the responsive design it has been decided that both tablet and desktop the page is identical since it is designed in such a way that does not hinder the use on tablet and therefore can work effectively. However, for mobile use we have changed the design to facilitate the use for users accessing the application from this kind of devices. In the latter case, when the user wants to access the left bar of options this will cover the entire screen to promote the clarity of reading the options, the rest of the pages have been resized to offer a friendly interface where the user is easy to use the application.

As for the libraries, we have implemented those that have been considered appropriate to incorporate Angular material to our project, in turn, have been incorporated into the project libraries that have been of great help to us for the creation of the login or the use of pipes.

## Guide

To access the application it is necessary to have a university account registered with the corresponding university email. In the case that the previous premise is satisfied, the user will be able to access the application in a simple way by logging in with his credentials: university e-mail and password.

## User's manual

First, the user must log in with his university credentials in order to access the application.
Once inside the application, the home screen shows the inbox with all the messages that the user has recently received, where with a simple glance you can see the subject to which each email belongs, the subject, the sender, the date and a series of options, which correspond to forward, delete and reply to mail. In addition, clicking on any of the emails will display the body of the message.

On the other hand, we see that in the header we have a hamburger icon that will display a left bar with numerous options if clicked, another icon that corresponds to the university community to which the user belongs, a button that automatically leads to the drafting of an email, an icon that will show our contacts if we click it and a search engine that will display those emails that match the search we are doing.

The panel to compose an email will be displayed either when we decide to forward or reply to an email or when we click on the compose button. This panel shows us the sender of the email, the recipient, the subject and the body. If we have decided to reply to an e-mail, the recipient field will be automatically filled in with the corresponding field. When we select the option to send the message it will be sent to the indicated recipient and the message will be added to the page corresponding to sent messages present in the drop-down left bar from the hamburger icon, if on the contrary we select the option to cancel we will return to the inbox.

In the left drop-down bar we have several options: inbox, which as its name indicates will take us to the inbox if we click on the option; offtopic, which will show us only the messages of the offtopic category (not belonging to any subject); sent, where we can see those messages that we have sent; subjects, where all our subjects appear and when clicking on any of them will show us the messages that belong to the subject we have selected; and trash where the messages that we have deleted appear.
