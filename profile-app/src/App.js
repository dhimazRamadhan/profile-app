import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Image from './myPhoto.jpg'
import Printer from './Group 36.png'
import Coffe from './coffe.png'
import Music from './music.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import app1_1 from './scheduling-capture/1.png'
import app1_2 from './scheduling-capture/2.png'
import app1_3 from './scheduling-capture/3.png'
import app1_4 from './scheduling-capture/4.png'
import app1_5 from './scheduling-capture/5.png'
import app1_6 from './scheduling-capture/6.png'
import app1_7 from './scheduling-capture/7.png'

function App() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className="App">
      <div className='navbar-mobile'>
        <a>
          MENU
        </a>
      </div>
      {/* <hr class="hr-nav-mobile"/> */}
      <div className="header">
        <img src={Printer} className="keyboard"/>
        <h4 className="name">DHIMAZ NUR RAMADHAN</h4>
      </div>
      <Navbar />
      <div className='body'>
        <div className='title'>
          <h4>
            Software engineer
          </h4>
          <p>
            "Yes, I am a junior software engineer, a fresh graduated from Telkom Vocational High School Malang. Stepping into the professional world with a burning passion, I am ready to embark on a career journey that inspires and brings positive impact"
          </p>
        </div>
        <img className='myPhoto' src={Image}/>
        <div className='about'>
          <h1>How did you get interested in web programming?</h1>
          <p>
            Hello, I am Dhimaz Nur Ramadhan, an 18-year-old aspiring software development engineer from the beautiful city of Malang. Ever since I was introduced to the world of programming, I have been captivated by its ability to create impactful solutions and bring ideas to life. My journey in web development began with HTML and CSS, and as I delved deeper into the field, I discovered my passion for building dynamic and interactive web applications.
          </p>
          <h1 style={{marginTop: '27px'}}>What skills did you learn?</h1>
          <p>
            Over the years, I have honed my skills in a variety of technologies and frameworks. <span>ReactJS</span> has become my go-to framework for creating rich and responsive user interfaces, while <span>NodeJS</span> has allowed me to build robust and scalable backend systems. I have also explored <span>Laravel</span>, an elegant PHP framework, and leveraged its power to develop efficient and secure web applications. Additionally, my experience with <span>VueJS</span> has provided me with a fresh perspective on frontend development and the benefits of its declarative approach.
          </p>
          <p>
            One of the cornerstones of my development workflow is version control using Git and <span>GitHub</span>. This has not only helped me maintain a well-organized codebase but has also facilitated seamless collaboration with teammates and open-source contributors. By leveraging the collaborative nature of GitHub, I have been able to contribute to various open-source projects, further enhancing my skills and knowledge.
          </p>
          <h1 style={{marginTop: '27px'}}>What were your interests besides web programming?</h1>
          <p>
            Beyond the technical aspects, I am deeply interested in the user experience and interface design. I firmly believe that a well-designed user interface can greatly enhance the overall experience of a web application. Through research, user testing, and continuous iteration, I strive to create intuitive and visually appealing interfaces that provide a delightful user experience.
          </p>
          <p>
            As a dedicated learner, I actively engage with the web development community through online forums, meetups, and conferences. I find immense value in connecting with experienced professionals, sharing insights, and staying updated with the latest industry trends. This collaborative mindset has not only broadened my knowledge but has also enabled me to adapt to new technologies and approaches quickly.
          </p>
          <p>
            In my free time, I enjoy working on personal projects that challenge me to think outside the box and explore new concepts. These projects serve as a creative outlet and allow me to experiment with innovative ideas that push the boundaries of what is possible in web development.
          </p>
          <h1 style={{marginTop: '27px'}}>What will you do in the future?</h1>
          <p>
            Looking ahead, I am excited to continue my journey as a professional software development engineer, tackling new challenges, and contributing to the ever-evolving landscape of technology. I am always open to new opportunities, whether it be collaborating on exciting projects or joining a team that shares my passion for creating impactful software solutions.
          </p>
        </div>
        <div className='title'>
          <h4>
            Experience
          </h4>
          <p style={{marginTop:'20px'}}>
            "I had 6 months of internship experience at <span><a href="https://ecampuz.com/" target="_blank">PT Solusi Kampus Indonesia (eCampuz)</a></span> as a fullstack developer"
          </p>
        </div>
        <img src={Coffe} className="coffe"/>
        <div className='experience'>
          <h1>What did you do during the internship?</h1>
          <p>
            During my 6-month internship at PT Solusi Kampus Indonesia (eCampuz) in Yogyakarta, Indonesia from June 2022 to November 2022, my primary goal was to develop a comprehensive scheduling application for university classes. The aim was to create a structured and organized schedule within the academic environment. Throughout the internship, I had various responsibilities, including utilizing database migration in <span>Laravel</span>, developing APIs following the MVC concept, and implementing authentication within the project.
          </p>
          <p>
            To enhance the scheduling system, I also worked on incorporating mathematical genetic algorithms to optimize the scheduling process. This involved creating a display that presented the required data and included a randomization schedule feature, all implemented using <span>VueJS</span>. Additionally, I designed a display for the schedule data in a matrix format, providing a comprehensive view of the schedule from different perspectives such as professors, and rooms.
          </p>
          <p>
            To ensure proper documentation and progress tracking, I diligently prepared weekly reports detailing the development process and any challenges encountered. Moreover, I actively participated in bug fixing to ensure the stability and functionality of the application.
          </p>
          <p>
            Overall, my internship experience at PT Solusi Kampus Indonesia allowed me to contribute to the development of an advanced scheduling application for university classes. By utilizing Laravel and Vue.js, I gained valuable insights into database management, API creation, authentication implementation, and algorithmic problem-solving.
          </p>
        </div>  
        <div className='title'>
          <h4>
            PROJECTS
          </h4>
          <p style={{marginTop:'20px'}}>
            "Although I had a limited number of projects, each one held great significance. Despite their scarcity, these provided invaluable learning opportunities, allowing me to delve into the depths of web development"
          </p>
        </div>     
        <div className='project'>
          <h1>1.) Scheduling Application for University</h1>
          <p>
            An application that generates schedules with features such as authentication and utilizes genetic algorithms to create well-structured and organized timetables. The application also includes CRUD operations for managing data related to professors, courses, instructors, rooms, time slots, and unavailable time for professors. The main highlight of the application is the schedule generation feature, which intelligently generates optimal schedules based on various constraints and preferences. Additionally, the application provides an easy-to-use interface with a matrix-based table view, allowing users to visualize and access schedules from the perspectives of professors and rooms. This comprehensive application aims to streamline the scheduling process and enhance efficiency in academic institutions.
          </p>
          <div className='projectImg'>
            <Slider {...settings}>
              <div>
                <img src={app1_1}/>
              </div>
              <div>
                <img src={app1_2}/>
              </div>
              <div>
                <img src={app1_3}/>
              </div>
              <div>
                <img src={app1_4}/>
              </div>
              <div>
                <img src={app1_5}/>
              </div>
              <div>
                <img src={app1_6}/>
              </div>
              <div>
                <img src={app1_7}/>
              </div>
              {/* <img src={app1_2}/>
              <img src={app1_3}/>
              <img src={app1_4}/>
              <img src={app1_5}/>
              <img src={app1_6}/>
              <img src={app1_7}/> */}
            </Slider>
          </div>
        </div>
        <div className='project'>
          <h1>2.) An application For Cashier Payment with Role Division.</h1>
          <p>
            The Cashier Payment Application offers three roles: Admin, Cashier, and Manager. The Admin role is responsible for managing data operations such as creating, reading, updating, and deleting data. The Cashier role handles transaction-related tasks, facilitating smooth payment processes. Lastly, the Manager role is granted access to view all transaction data and generate statistical reports, providing insights into sales performance and trends. This role division ensures efficient management of the payment system, with each role having distinct responsibilities tailored to their specific functions.
          </p>
          <div className='projectImg'>
            <Slider {...settings}>
              <div>
                <img src={app1_1}/>
              </div>
              <div>
                <img src={app1_2}/>
              </div>
              <div>
                <img src={app1_3}/>
              </div>
              <div>
                <img src={app1_4}/>
              </div>
              <div>
                <img src={app1_5}/>
              </div>
              <div>
                <img src={app1_6}/>
              </div>
              <div>
                <img src={app1_7}/>
              </div>
              {/* <img src={app1_2}/>
              <img src={app1_3}/>
              <img src={app1_4}/>
              <img src={app1_5}/>
              <img src={app1_6}/>
              <img src={app1_7}/> */}
            </Slider>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default App;
