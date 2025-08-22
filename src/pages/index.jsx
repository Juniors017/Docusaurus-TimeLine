import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Fourhomecards from '@site/src/components/Fourhomecards';


import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (


<div className='homehero padding-vert--lg'>
  <div className="container margin-top--lg" >
  <div className="row ">
    
    <div className="col col--1">
      <div className=""></div>
    </div>
    <div className="col col--3 text--center padding-horiz--xs">
      <div className="" > <img src="./img/docux.png" style={{borderRadius:'50%'}} className="item shadow--tl"></img></div>
   
    </div> 
    <div className="col col--6 text--center  ">
      <div className=" padding-vert--md"><h1 className="hero__title ">Time Line by @Docux</h1>
            <p className="hero__subtitle">This space is dedicated to my exploration of Docusaurus</p>
            <p className="">Here you will find all the information about development and research as well as my notes</p></div>
            
    </div>
    <div className="col col--1">
      <div className=""></div>
    </div>
  </div>

    
    </div>
    </div>
  );
}

export default function Home() {
  
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <div className='homebody padding-vert--lg'>
      <div className="container margin-top--lg">
  <div className="row">
    
   
    <div className="col  text--justify ">
    
            <p className="hero__subtitle">
            With this component you will be able to easily create vertical timelines to style your project pages or professional experience. A nice and atypical way to present your background and activities.
            </p><p>@Docux</p>
            </div>
            
   
  
  </div>

    
    </div></div>
      </main>

    </Layout>
  );
}
