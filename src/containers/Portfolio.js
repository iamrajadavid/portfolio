import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from '../components/Project';
import objects from '../constant/objects';
import styles from '../components/styles/portfolio.module.scss';

AOS.init({
    offset: 400, 
    delay: 0, 
    duration: 1000
});

const Portfolio = () => {

    return (
        <section id="portfolio" data-aos="fade-right" className={styles.portfolio}>
            <h1>Full Stack Development Portfolio</h1>
            <h3>
                Succeed online with a website that is fast, easy to use, 
                and built with best practices and a passion for design.
            </h3>
            { 
                objects.map((object, i )=> (
                    <Project key={i} object={object} />
                ))
            }    
        </section>
    )
}

export default Portfolio;
