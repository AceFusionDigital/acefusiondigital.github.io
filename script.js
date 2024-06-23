* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Bricolage Grotesque', sans-serif;
    background: #252831;
    color: #fff;
    line-height: 1.6;
    font-size: 100%; /* Use default root size */

}
.infographic {
    /* Centering techniques (choose one): */
    
    /* Option 1: Using display: flex and margin: auto */
    display: flex;
    margin: 0 auto;
    
    width: 33%;

    background: linear-gradient(135deg, #252831 0%, #30779f 100%);

  }

  #infographic-image.fullscreen {
    position: flex;
    top: 0;
    left: 0;
    width: 70%;
    height: 70%;
    background-color: black; /* Optional: Set background color for full screen */
  }

  

p {
    font-size: 1.3em;
    margin-bottom: 30px;
    color: #ffffff;
}


.iframe-container {
    width: 1000px;
    height: 563px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.5); /* Apply shadow to the container */
}

.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    position: relative; /* Ensure iframe is positioned correctly */
    z-index: 1; /* Ensure iframe is above the gradient */
}

.iframe-container::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px; /* Adjust height as needed */
    background: linear-gradient(to top, rgba(0, 255, 255, 0.5), rgba(0, 255, 255, 0));
    pointer-events: none;
    z-index: 2; /* Ensure it stays above the iframe */
}

.container {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
}

header {
    background: rgba(48, 119, 159, 0.8);
    color: #fff;
    padding: 20px 0;
    border-bottom: 3px solid #3fd7f5;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    position: relative;
}

header img.logo {
    height: 50%;
    position: absolute;
    left: 20px;
    border-radius: 50%; /* Makes the image circular */

}

header nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    background: rgba(48, 119, 159, 0.8);
    padding: 10px 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

header nav ul li {
    position: relative;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
    display: block;
}

header nav ul li a:hover {
    background: rgba(30, 89, 120, 0.8);
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
}

header .btn {
    background: #3da5d4;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: inset 0 -3px 0 rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    font-size: 0.9em;
}

header .btn:hover {
    transform: scale(1.05);
    box-shadow: inset 0 -3px 0 rgba(255, 255, 255, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);
}

.hero {
    background: linear-gradient(135deg, #001524 0%, #30779f 100%);
    color: #fff;
    padding: 100px 0;
    text-align: center;
    position: relative;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
    z-index: 1;
}

.hero-content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: 3em;
    margin-bottom: 20px;
    line-height: 1.2;
    color: #3fd7f5;
}

.hero p {
    font-size: 1.2em;
    margin-bottom: 30px;
    color: #ffffff;
}

.hero .btn {
    display: inline-block;
    margin-top: 20px;
    background: rgba(61, 165, 212, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    padding: 15px 30px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    font-size: 0.9em;
}

.hero .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.video-embed {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.perfWrap {
    display: flex; /* Enables flexbox layout */
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Centers content vertically */
    width: 55%; /* Sets the width to 30% of the available space */
    margin: 0 auto; /* Centers the element horizontally within its container */
  }
.perfWrap2 {
    display: flex; /* Enables flexbox layout */
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Centers content vertically */
    width: 55%; /* Sets the width to 30% of the available space */
    margin: 0 auto; /* Centers the element horizontally within its container */
    white-space: pre-line;
}

.section {
    padding: 50px 0;
    background: linear-gradient(135deg, #252831 0%, #30779f 100%);
    display: flex;
    flex-direction: column; /* Stack content vertically */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    margin: 0 auto; /* Center container horizontally */
}
.section h2 {
    color: #3fd7f5;
    font-size: 2.3em;
}

.section2 {
    padding: 50px 0;
    display: flex;
    flex-direction: column; /* Stack content vertically */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    margin: 0 auto; /* Center container horizontally */
}
.section2 h2{
    font-size: 2.3em;
}

.section3 {
    background: linear-gradient(135deg, #252831 0%, #30779f 100%);
    padding: 50px 0;
    display: flex;
    flex-direction: column; /* Stack content vertically */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    margin: 0 auto; /* Center container horizontally */
}
.section3 h2{
    font-size: 2.3em;
}


/* Features Section */
#solution {
    text-align: center;
}

.features {
    display: flex;
    justify-content: center; /* Center the content */
    flex-wrap: wrap;
    max-width: 80%; /* Limit the maximum width of the container */
    margin: 0 auto; /* Center the container */
}

.feature-box {
    width: 30%;
    background: #30779f;
    padding: 20px;
    border-radius: 10px;
    margin: 10px 1%; /* Adjust margin to keep spacing between boxes */
    box-shadow: 0 0 0px rgba(0, 255, 255, 0.5), 0 0 10px rgb(255, 255, 255), 0 0 0px rgba(0, 255, 255, 0.5); /* Apply shadow to the container */
    text-align: center;
    flex: 0 1 calc(30% - 2%); /* Ensure boxes don't exceed container width */
    position: relative;
    padding-top: 60px; /* Space for the icon */
}

.feature-box img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.feature-box h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #3fd7f5;
}

.feature-box p {
    color: #ffffff;
    font-size: 1em;
}


.logo-icon {
    width: 50px; /* Adjust size as needed */
    height: 50px;
    object-fit: contain;
    margin-bottom: 10px; /* Add some spacing below the icon */
}
.logo-icon2 {
    width: 100px; /* Adjust size as needed */
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px; /* Add some spacing below the icon */
}

/* Social Media Icons */
.logo-icon-socials {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-left: 33px;
}

/* FAQ Section */
#faqs {
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    padding: 40px 0;
    
}

#faqs h2 {
    font-size: 2em;
    margin-bottom: 20px;
    color: rgb(0, 255, 255);

}

.faq-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
}

.faq-item {
    border-bottom: 1px solid #444444;
    padding: 20px 0;
    cursor: pointer;
}

.faq-item h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
    margin: 0;
    
}

.faq-item .toggle-icon {
    font-size: 1.5em;
    transition: transform 0.3s ease;
}

.faq-item.active .toggle-icon {
    transform: rotate(45deg);
    
}

.faq-details {
    display: none;
    padding-top: 10px;
    font-size: 1em;
    background: linear-gradient(135deg, #252831 0%, #30779f 100%);
}

#read-more-btn {
    background-color: #30779f;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
}

#read-more-btn:hover {
    background-color: #3fd7f5;
}

/* Social Media Section */
.social-media {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.social-media a {
    margin: 0 10px;
}

/* Footer */
footer {
    background: linear-gradient(135deg, #252831 0%, #30779f 100%);
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

footer p {
    color: #9baaa9;
}

/* Process Section */
#process {
    text-align: center;
    background: linear-gradient(135deg, #30779f 0%, #001524 100%);
    padding: 50px 0;
}

#process h2 {
    font-size: 2.5em;
    margin-bottom: 20px;

}

#process p {
    font-size: 1.2em;
    margin-bottom: 40px;
    color: #ffffff;
}

.steps {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.step {
    background: #30779f;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    width: 30%;
    margin: 20px 0;
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.step-icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
}

.step-content h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #3fd7f5;
}

.step-content p {
    font-size: 1em;
    margin-bottom: 20px;
    color: #ffffff;
}

.step-button {
    background-color: #3fd7f5;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.step-button2 {
    background-color: #272732;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.step-button:hover {
    background-color: #3fd7f5;
}

  
.counter {
    font-size: 48px;
    text-align: center;
    margin-top: 0px; /* Adjust as needed */
  }
  

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* Styles for burger menu */
.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
}

.burger-bar {
    height: 3px;
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
}

header {
    position: relative; /* Ensure the header is the containing block */
    z-index: 10; /* Make sure header is above other elements */
}

header nav {
    display: flex;
    align-items: center;
}

/* Hide navigation on smaller screens */
@media (max-width: 768px) {
    .burger-menu {
        display: flex;
    }

    header nav ul {
        display: none; /* Hide the menu by default */
        flex-direction: column;
        width: 100%;
        background: rgba(48, 119, 159, 0.8);
        position: absolute; /* Position relative to header */
        top: 60px; /* Ensure it appears below the header */
        left: 0;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    header nav ul.active {
        display: flex; /* Show the menu when active */
        position: absolute; /* Ensure the menu is positioned correctly */
        top: 60px; /* Adjust this value based on the header height */
        left: 0; /* Align to the left */
        width: 100%; /* Full width */
        z-index: 200; /* Ensure it appears above other content */
    }
    

    header nav ul li {
        width: 100%;
        text-align: center;
    }

    header nav ul li a {
        display: block;
        padding: 15px 0;
        color: #fff; /* Ensure text is visible */
        text-decoration: none;
    }
}








/* General styles for iframe container */
.iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

/* Media Queries for Tablets */
@media (max-width: 768px) {
    .steps {
        flex-direction: column;
        align-items: center;
    }

    .step {
        width: 80%;
        margin: 10px 0;
    }

    .container {
        width: 90%;
    }

    .hero h1 {
        font-size: 2.25em;
    }

    .hero p {
        font-size: 0.9em;
    }

    .hero .btn {
        padding: 10px 20px;
        font-size: 0.675em;
    }

    .section h2 {
        font-size: 1.5em; /* Adjusted for better scaling */
    }

    .section p.perfWrap2 {
        font-size: 1em; /* Adjusted for better scaling */
    }

    .feature-box, .step, .faq-item {
        width: 100%;
    }

    .feature-box h3, .step h3, .faq-item h3 {
        font-size: 1.125em;
    }

    .feature-box p, .step p, .faq-item p {
        font-size: 0.75em;
    }

    .iframe-container {
        width: 100%;
        padding-bottom: 56.25%; /* Maintain 16:9 aspect ratio */
    }

    header nav ul {
        flex-direction: column;
        gap: 10px;
    }

    .infographic {
        width: 100%;
    }

    .perfWrap, .perfWrap2 {
        width: 100%;
    }
    header img.logo {
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
        width: 50px; /* Adjust the width as needed */
        height: auto;
        max-height: 50px; /* Ensures the image doesn't exceed the header height */
        object-fit: cover;
        border-radius: 50%; /* Makes the image circular */
        position: absolute;
        bottom: 0; /* Aligns the image to the bottom of the header */
    }
    
}

/* Media Queries for Mobile Phones */
@media (max-width: 480px) {
    .hero h1 {
        font-size: 1.5em;
    }

    .hero p {
        font-size: 0.75em;
    }

    .hero .btn {
        padding: 8px 16px;
        font-size: 0.675em;
    }

    .section h2 {
        font-size: 1.25em; /* Adjusted for better scaling */
    }

    .section p.perfWrap2 {
        font-size: 0.9em; /* Adjusted for better scaling */
    }

    .feature-box, .step, .faq-item {
        width: 100%;
    }

    .feature-box h3, .step h3, .faq-item h3 {
        font-size: 1em;
    }

    .feature-box p, .step p, .faq-item p {
        font-size: 0.75em;
    }

    .iframe-container {
        width: 100%;
        padding-bottom: 56.25%; /* Maintain 16:9 aspect ratio */
    }

    .container {
        width: 95%;
    }

    header {
        flex-direction: column;
        align-items: flex-start;
    }

    header img.logo {
        top:9%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
        width: 50px; /* Adjust the width as needed */
        height: auto;
        max-height: 50px; /* Ensures the image doesn't exceed the header height */
        object-fit: cover;
        border-radius: 50%; /* Makes the image circular */
        position: absolute;
        bottom: 0; /* Aligns the image to the bottom of the header */
    }
    

    header nav ul {
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    header nav ul li a {
        padding: 5px 10px;
    }

    header .btn {
        padding: 5px 10px;
        font-size: 0.75em;
    }

    .perfWrap, .perfWrap2 {
        width: 100%;
    }

    .infographic {
        width: 100%;
    }
    .counter {
        font-size: 1.25em;
        text-align: center;
        margin-top: 0px; /* Adjust as needed */
      }

}
