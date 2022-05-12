import React,{useState,useEffect} from "react";
import {Container, Card,Button, Row, Col} from "react-bootstrap";
import {Doughnut,Bar,Line} from "react-chartjs-2"
import classes from "./cards.module.css"
import { RiDashboardLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiLogOut } from "react-icons/bi";
import Router from 'next/router'

function seller() {
    const line_data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        datasets: [
          {
            label: 'Apple Searches',
            data: [12, 19, 3, 5, 2, 3,7],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Samsung Searches',
            data: [10, 8, 12, 15, 4, 6,5],
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: 'Xiaomi Searches',
            data: [11, 6, 8, 10, 8, 7,3],
            fill: false,
            backgroundColor: 'rgba(255, 159, 64, 1)',
            borderColor: 'rgba(255, 159, 64, 1)',
          },
          {
            label: 'Vivo Searches',
            data: [8, 12, 7, 7, 5, 9,4],
            fill: false,
            backgroundColor: 'rgba(255, 206, 86, 1)',
            borderColor: 'rgba(255, 206, 86, 1)',
          },
          {
            label: 'Oppo Searches',
            data: [6, 4, 3, 5, 6, 7,8],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: 'Realme Searches',
            data: [4, 8, 3, 5, 2, 1,7],
            fill: false,
            backgroundColor: 'rgba(153, 102, 255, 1)',
            borderColor: 'rgba(153, 102, 255, 1)',
          },
        ],
      };
      
      const line_options = {
        plugins: {
            title: {
              display: true,
              text: `Searches for Previous Week`,
              color: '#559',
                font: {
                    size: 20,
                    weight: 'bold',
                    lineHeight: 1.2,
                },
                padding: {top: 20, left: 0, right: 0, bottom: 0}
            },
          },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    const doughnut_graphData = {
        labels:["Apple","Samsung","Vivo","Oppo","Realme","Xiaomi"],
        datasets:[
            {
                data:[12,18,10,8,16,23],
                // data:thisTask.map(obj=>{console.log(obj.submitted);return(obj.submitted)}),
                backgroundColor:['rgb(255, 99, 132)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)']
            }
        ]
    }

    const doughnut_graphOptions={
      plugins: {
          title: {
            display: true,
            text: `Market Share`,
            color: '#919',
              font: {
                  size: 20,
                  weight: 'bold',
                  lineHeight: 1.2,
              },
              padding: {top: 20, left: 0, right: 0, bottom: 0}
          },
        },
          responsive: true
    }

    const bar_data = {
        labels: ['Apple', 'Samsung', 'Vivo', 'Oppo', 'Realme', 'Xiaomi'],
        datasets: [
          {
            label: 'Sales in October',
            data: [12, 19, 3, 5, 2, 17],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const bar_options = {
        plugins: {
            title: {
              display: true,
              text: `Sales for October 2021`,
              color: '#519',
                font: {
                    size: 20,
                    weight: 'bold',
                    lineHeight: 1.2,
                },
                padding: {top: 20, left: 0, right: 0, bottom: 0}
            },
          },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <div>
            <Container fluid className={classes.div_back2}>
                
                <Row>
                    <Col md={2} style={{paddingLeft:"0px"}}>
                    <div className={classes.sidebar1}>
                        <div className={classes.sidebar_option_active}><RiDashboardLine/> Dashboard</div>
                        <div className={classes.sidebar_option}><BsGraphUp/> Sales Entries</div>
                        <div className={classes.sidebar_option}><FaTruck/> Track Deliveries</div>
                        <div className={classes.sidebar_option}><DiGoogleAnalytics/> More analytics</div>
                        <div className={classes.sidebar_option} onClick={()=>{Router.push("/")}}><BiLogOut/> Logout</div>
                    </div>
                    </Col>
                    <Col md={10}>
                    <h3>Welcome Brendan</h3>
                    <h5>All systems are working perfectly fine! Have a nice day!</h5>
                    <Row>
                        <Col><div className={classes.graph_container}><Bar data={bar_data} options={bar_options}/></div></Col>
                        <Col><div className={classes.graph_container}>
                            <h4 align="center">Average ratings</h4>
                            Apple:  3.5 stars
                            <span className={classes.percent_back} style={{marginBottom:"5px"}}>
                            <div style={{width:"70%",backgroundColor:'rgb(255, 99, 132)',height:"8px"}} ></div>
                            </span>
                            Samsung:  4 stars
                            <span className={classes.percent_back} style={{marginBottom:"5px"}}>
                            <div style={{width:"80%",backgroundColor:'rgba(54, 162, 235, 1)',height:"8px"}} ></div>
                            </span>
                            Vivo:  3 stars
                            <span className={classes.percent_back} style={{marginBottom:"5px"}}>
                            <div style={{width:"60%",backgroundColor:'rgba(255, 206, 86, 1)',height:"8px"}} ></div>
                            </span>
                            Oppo:  3.5 stars
                            <span className={classes.percent_back} style={{marginBottom:"5px"}}>
                            <div style={{width:"70%",backgroundColor:'rgba(75, 192, 192, 1)',height:"8px"}} ></div>
                            </span>
                            Realme:  4.5 stars
                            <span className={classes.percent_back} style={{marginBottom:"5px"}}>
                            <div style={{width:"90%",backgroundColor:'rgba(153, 102, 255, 1)',height:"8px"}} ></div>
                            </span>
                            Xiaomi:  4.5 stars
                            <span className={classes.percent_back} style={{marginBottom:"5px"}}>
                            <div style={{width:"90%",backgroundColor:'rgba(255, 159, 64, 1)',height:"8px"}} ></div>
                            </span>
                        </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={4}><div className={classes.graph_container}><Doughnut data={doughnut_graphData} options={doughnut_graphOptions}/></div></Col>
                    <Col md={8}> <div className={classes.graph_container}><Line data={line_data} options={line_options} /></div></Col>
                    </Row>
                    
                   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default seller
