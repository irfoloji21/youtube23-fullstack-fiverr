import React from 'react'
import './Assemble.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Assemble = () => {
  return (
      <div className="assemble">
        <div className="container">
          <h1>How to Start WinGlo</h1>
          <div className="items">
            <div className="item">
            <Tabs className="my-tabs">
              <TabList className="my-tab-list">
                <Tab className="my-tab">
                  Ask their skills
                </Tab>
                <Tab className="my-tab">
                  Request their skills
                </Tab>
                <Tab className="my-tab">
                  Post my skills
                </Tab>
              </TabList>
              <TabPanel>
              <div className="tabItem">
                <div className="itemMiks">
                    <img src="./img/check.png" alt="" />
                    <div className="titleTitle">
                      <h1>Process I fide</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deleniti.</p>
                    </div>  
                </div>
                <div className="itemImg">
                  <img src="./img/laptop.png" alt='' />
                </div>
              </div>
              </TabPanel>
              <TabPanel>
              <div className="tabItem">
                <div className="itemMiks">
                    <img src="./img/check.png" alt="" />
                    <div className="titleTitle">
                      <h1>Process I fide</h1>
                      <p> Magnam quidem hic veritatis deserunt explicabo voluptate repellat! Minima nihil illo dicta.</p>
                    </div>  
                </div>
                <div className="itemImg">
                  <img src="./img/mman.png" alt='' />
                </div>
              </div>
              </TabPanel>
              <TabPanel>
              <div className="tabItem">
                <div className="itemMiks">
                    <img src="./img/check.png" alt="" />
                    <div className="titleTitle">
                      <h1>Process I fide</h1>
                      <p>Asperiores doloribus ut eum delectus ad exercitationem facere nisi, dolor necessitatibus at hic commodi sit blanditiis harum dolorum in esse.!</p>
                    </div>  
                </div>
                <div className="itemImg">
                  <img src="./img/Assemble.jpg" alt='' />
                </div>
              </div>
              </TabPanel>
            </Tabs>
            </div>

            <div className='qwerty'>
              <div className="item">
                <h1>Assemble the best team to grow your business</h1>
                <p>Find talent with WinGlo end start working remotely</p>
                <button>Get Started</button>
              </div>
              <div className="item">
                <img src="./img/Assemble.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Assemble