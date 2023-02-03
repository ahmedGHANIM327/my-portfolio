import myportfolioIMG from '../assets/my-resume-project.jpg';
import artisan7IMG from '../assets/artisan7-project.jpg';
import englishFirstIMG from '../assets/englishFirst-project.jpg';
import burgerCodeIMG from '../assets/burger-code-project.jpg';
import notifyMeIMG from '../assets/notifyme-project.JPG';

export const ListProjects = [
    {
        "id" : 0,
        "image":myportfolioIMG,
        "title" : "My Portfolio",
        "description" : `My Portfolio is my personal website that I use as a digital CV to present my skills, my academic career, my professional experience, 
                        my personal and academic projects, and finally my contact information including my GitHub account, my LinkedIn account my email, and my phone number.
                        It is created using React and the famous CSS framework Material-UI, and it is 100% responsive so compatible with 
                        all types of devices (pc, desktop, tablet, phone).`,
        "short_desc":`My Portfolio is my personal website that I use as a digital CV 
                    to present my skills, my academic career, my professional experience,...`,
        "outils" : ["React","Material-UI"],
        "live_preview" : "resume.ahmed-ghanim.com",
        "code_source" : ""
    },
    {
        "id" : 1,
        "image":artisan7IMG,
        "title" : "Artisan7",
        "description" : `A project was realized during my second year in a team of 4 students. 
                        The objective of this website is to allow the artisans of the region of Toulouse to 
                        present themselves with their phone number, their email, their location, their availability. 
                        The customers can also publish an ad and wait for quotations from the artisans or they can 
                        directly look for someone according to their need. 
                        To finalize this project, we used in front-end the framework Angular with the framework CSS 
                        Material-UI, in the back-end we used Java/JEE. For the database, we used two solutions MySQL 
                        for the management and the storage of the information of the customers and the artisans 
                        and Firebase for the storage of the media (photos and videos).`,
        "short_desc":`A project was realized during my second year in a team of 4 students. 
                    The objective of this website is to allow the artisans of the region of Toulouse...`,
        "outils" : ["Angular","Material-UI","Java/JEE","MySQL","Firebase"],
        "live_preview" : "resume.ahmed-ghanim.com",
        "code_source" : "#"
    },
    {
        "id" : 2,
        "image":englishFirstIMG,
        "title" : "English First",
        "description" : `This is a website that I created during my internship at Capitole Formation with Wordpress and the DIVI theme. 
                        The website is set up to present Capitole Formation's English courses with general presentations of each course in
                        addition to quizzes and contact forms.`,
        "short_desc":`This is a website that I created during my internship at Capitole Formation with Wordpress and the DIVI theme.
                    The website is set up to present Capitole Formation's...`,
        "outils" : ["Wordpress","Divi","PHP","Javascript"],
        "live_preview" : "#",
        "code_source" : "#"
    },
    {
        "id" : 3,
        "image":burgerCodeIMG,
        "title" : "Burger Code",
        "description" : `This is one of the first projects that I created to master the basics 
                        of web development, HTML, CSS, JavaScript, PHP, and MySQL. 
                        The idea of the website is to present the menu of a restaurant in addition 
                        to an admin dashboard to add, delete and even modify the products.`,
        "short_desc":`This is one of the first projects that I created to master the basics 
                    of web development, HTML, CSS, JavaScript, PHP, and MySQL.`,
        "outils" : ["PHP","Javascript","Bootstrap","MySQL"],
        "live_preview" : "#",
        "code_source" : "#"
    },
    {
        "id" : 4,
        "image":notifyMeIMG,
        "title" : "Notify ME",
        "description" : `A project was realized during my last year in a team of 4 students. The objective 
                        of this application is to broadcast announcements to employees once a badge is detected. 
                        This application has an admin dashboard that helps to manage employees, groups of 
                        employees, and messages, so it gives statistics on the number of employees, 
                        the number of groups, and the status of messages seen or not yet seen. 
                        To finalize this project, we used front-end React with the framework CSS Material-UI, 
                        in the back-end we used Django. For the database, we used MySQL for the management 
                        and the storage of all the pieces of information of the employees, groups, and messages.
                        In addition to a badge detector manufactured and programmed with an Arduino-Uno that 
                        its role is to detect and send the ID of the detected badge to our application.`,
        "short_desc":`A project was realized during my last year in a team of 4 students. The objective 
                    of this application is to broadcast announcements to employees once a badge is detected...`,
        "outils" : ["React","Django","Material-UI","MySQL","Firebase","Arduino"],
        "live_preview" : "#",
        "code_source" : "#"
    }

]