import {useRouter} from 'next/router';
import classes from "../cards.module.css"
import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel} from "react-bootstrap";
import beautyproducts from "../../json_data/beautyproducts.json"
import bookslist from "../../json_data/bookslist.json"
import earphones from "../../json_data/earphones.json"
import menfashion from "../../json_data/menfashion.json"
import powerbanks from "../../json_data/powerbank.json"
import smartwatch from "../../json_data/smartwatch.json"
import womenfashion from "../../json_data/womenfashion.json"
import dynamic from 'next/dynamic'
import Link from "next/link"
import StarsRating from 'stars-rating'

export const getStaticProps = async () =>{
    // const router = useRouter();
    // const {id_type2_1} = router.query
    // // const data_files = dynamic(() => import(`.../json_data/${id_type2_1}.json`))
    let data_files
    // if (id_type2_1==="powerbank") {
    //     data_files = powerbanks
    // } else if(id_type2_1==="earphones"){
    //     data_files = earphones
    // }
    // else if(id_type2_1==="smartwatch"){
    //     data_files = smartwatch
    // }else if(id_type2_1==="books"){
    //     data_files = bookslist
    // }else if(id_type2_1==="menfashion"){
    //     data_files = menfashion
    // }else if(id_type2_1==="womenfashion"){
    //     data_files = womenfashion
    // }else if(id_type2_1==="beauty"){
    //     data_files = beautyproducts
    // }
    // else {
    //     data_files =  [ {
    //         title:"Syska 10000 mAh Li-Polymer P1015B Power Core100 Power Bank (Black)",
    //         image:"https://images-na.ssl-images-amazon.com/images/I/71xHzjQ-vkL._SL1500_.jpg",
    //         provider:"amazon.in",
    //         description:["It will charge a 3000mAh phone battery 2.2 times And It will charge a 4000mAh phone battery 1.6 times"," Output : Double USB Output DC5V |2.4A","Body Material : ABS Plastic| Weight 288 gm","Included in box: 1 Micro USB Cable, 1 User Manual, 1 Warranty Card, Charger Not included","6 Months Warranty | Please contact Toll free 1800-102-8787","Input: 5V || 2 A AND Charging time: Approx 5 to 6 hours(10 W charger, standard USB cable)","Country of Origin: India"],
    //         orgprice:"1599",
    //         disprice:"649",
    //         saving:"",
    //         discount:"",
    //         link:"https://amzn.to/39nvWZH"
    //     }]
    // }

    data_files =  [ {
        title:"Syska 10000 mAh Li-Polymer P1015B Power Core100 Power Bank (Black)",
        image:"https://images-na.ssl-images-amazon.com/images/I/71xHzjQ-vkL._SL1500_.jpg",
        provider:"amazon.in",
        description:["It will charge a 3000mAh phone battery 2.2 times And It will charge a 4000mAh phone battery 1.6 times"," Output : Double USB Output DC5V |2.4A","Body Material : ABS Plastic| Weight 288 gm","Included in box: 1 Micro USB Cable, 1 User Manual, 1 Warranty Card, Charger Not included","6 Months Warranty | Please contact Toll free 1800-102-8787","Input: 5V || 2 A AND Charging time: Approx 5 to 6 hours(10 W charger, standard USB cable)","Country of Origin: India"],
        orgprice:"1599",
        disprice:"649",
        saving:"",
        discount:"",
        link:"https://amzn.to/39nvWZH"
    }]
    return {
        props:{datafiles : data_files}
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {  params: { id_type2_1: 'powerbank' } },
            {  params: { id_type2_1: 'earphones' } },
            {  params: { id_type2_1: 'smartwatch' } },
            {  params: { id_type2_1: 'books' } },
            {  params: { id_type2_1: 'menfashion' } },
            {  params: { id_type2_1: 'womenfashion' } },
            {  params: { id_type2_1: 'beauty' } },
        ],
        fallback: false
    }
}

const PageFunction = (props) => {
    const router = useRouter();
    const {id_type2_1} = router.query
    let data_files
    if (id_type2_1==="powerbank") {
        data_files = powerbanks
    } else if(id_type2_1==="earphones"){
        data_files = earphones
    }
    else if(id_type2_1==="smartwatch"){
        data_files = smartwatch
    }else if(id_type2_1==="books"){
        data_files = bookslist
    }else if(id_type2_1==="menfashion"){
        data_files = menfashion
    }else if(id_type2_1==="womenfashion"){
        data_files = womenfashion
    }else if(id_type2_1==="beauty"){
        data_files = beautyproducts
    }
    else {
        data_files =  [ {
            title:"Syska 10000 mAh Li-Polymer P1015B Power Core100 Power Bank (Black)",
            image:"https://images-na.ssl-images-amazon.com/images/I/71xHzjQ-vkL._SL1500_.jpg",
            provider:"amazon.in",
            description:["It will charge a 3000mAh phone battery 2.2 times And It will charge a 4000mAh phone battery 1.6 times"," Output : Double USB Output DC5V |2.4A","Body Material : ABS Plastic| Weight 288 gm","Included in box: 1 Micro USB Cable, 1 User Manual, 1 Warranty Card, Charger Not included","6 Months Warranty | Please contact Toll free 1800-102-8787","Input: 5V || 2 A AND Charging time: Approx 5 to 6 hours(10 W charger, standard USB cable)","Country of Origin: India"],
            orgprice:"1599",
            disprice:"649",
            saving:"",
            discount:"",
            link:"https://amzn.to/39nvWZH"
        }]
    }
    console.log(data_files)
    let title
    if (id_type2_1==="earphones") {
        title = "Earphones"
    }else if (id_type2_1==="smartwatch") {
        title = "Smart Watches"
    }else if (id_type2_1==="powerbank") {
        title = "Power Banks"
    }else if (id_type2_1==="books") {
        title = "Books"
    }else if (id_type2_1==="menfashion") {
        title = "Mens Fashion"
    }else if (id_type2_1==="womenfashion") {
        title = "Womens Fashion"
    }else if (id_type2_1==="beauty") {
        title = "Beauty Products"
    }
    return (
        <div className={classes.div_back}>
           <div align="center" style={{color:"black"}}>
                <h2>{title}</h2>
                <hr style={{width:"150px",height:"2px",backgroundColor:"black",borderRadius:"15%"}} />
            </div>
            <Container>
                <Row>

                    {data_files.map((data_obj,index)=>{
                        let disc = data_obj.orgprice - data_obj.disprice;
                        return(
                    //         <Col lg={3} md={4} sm={12}>
                    // <Link href={`/${id_type2_1}/${index}`}>
                    // <Card className={classes.smLink} border="dark" key={0} bg="dark" text="white" style={{marginBottom:"40px"}}>
                    //     <Row>
                    //         <Col xs={5} md={12} >
                    //             {/* <Card.Header>Featured</Card.Header> */}
                    //             <Card.Img variant="top" style={{width:"100%",height:"100%"}} src={data_obj.image} />
                    //             <Card.ImgOverlay className={"d-flex flex-row justify-content-end"} style={{padding:"8px"}}>
                    //             {/* className={"d-flex flex-column justify-content-start"} */}
                    //             {data_obj.disprice!=""&& <Card.Text className={classes.DiscountIndicator} >
                    //                     -{Math.round((disc)*100/data_obj.orgprice)}%
                    //                 </Card.Text>}
                    //             </Card.ImgOverlay>
                    //         </Col>
                    //         <Col xs={7} md={12}>
                    //         {/* style={{width:"100%",height:"19rem"}} */}
                    //             <Card.Body >
                    //                 <Card.Title className={classes.Text}>{data_obj.title}</Card.Title>
                    //                 <Card.Text className={classes.Text} >
                    //                     {data_obj.description}
                    //                 </Card.Text>
                    //                 { data_obj.disprice!=""&&<Card.Title><strike>&#8377;{ data_obj.orgprice}</strike>  &#8377;{ data_obj.disprice}</Card.Title>}
                    //                 { data_obj.disprice==""&&<Card.Title>&#8377; { data_obj.orgprice}</Card.Title>}
                    //                 { data_obj.disprice!=""&&
                    //                 <Card.Text>
                    //                     You save &#8377;{disc}
                    //                 </Card.Text>}
                    //                 <Button variant="outline-light">Learn More</Button>
                    //                 {/* Learn more */}
                    //             </Card.Body>
                    //             <Card.Footer style={{color:"#f0f0f0"}}>{ data_obj.provider}</Card.Footer>
                    //         </Col>
                    //     </Row>
                    // </Card>
                    // </Link>
                    // </Col>
                    <Col xs={6} sm={6} md={4} lg={3}>
                    <Link href={`/${id_type2_1}/${index}`} className={classes.Link}>
                    <Card className={classes.smLink}  key={`${id_type2_1}-${index}`} >
                        {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Img variant="top" style={{width:"auto",height:"14em",margin:"10px",border:"1px solid grey",borderRadius:"10px"}} src={data_obj.image} />
                       {/*
                        <Card.ImgOverlay className={"d-flex flex-row justify-content-end"} style={{padding:"8px",margin:"8px"}}>
                        {/* className={"d-flex flex-column justify-content-start"}  }
                        {deals[num].disprice!=""&& <Card.Text className={classes.DiscountIndicator} >
                        -{Math.round((disc)*100/deals[num].orgprice)}%
                            </Card.Text>}
                        </Card.ImgOverlay>
                        */} 
                        <Card.Body style={{width:"100%"}}>
                            <Card.Title className={classes.Text}>{data_obj.title}</Card.Title>
                            <Card.Text className={classes.Text} >
                                {data_obj.description[0]}
                            </Card.Text>
                            <Row>
                                <Col>
                                {data_obj.disprice!=""&&<Card.Text> <span className={classes.Price}> &#8377;{data_obj.disprice}</span> <strike>&#8377;{data_obj.orgprice}</strike></Card.Text>}
                                {data_obj.disprice==""&&<Card.Text className={classes.Price}>&#8377; {data_obj.orgprice}</Card.Text>}
                                <StarsRating count={5} value={data_obj.ratings} size={19} color2={'#ffd700'} />
                                <Card.Text>
                                    {data_obj.sales} sales
                                </Card.Text>
                                </Col>
                                <Col>
                                {data_obj.disprice!=""&& <Card.Text style={{fontSize:"1.2em",fontWeight:"bold"}}>
                                {Math.round((disc)*100/data_obj.orgprice)}% off
                                </Card.Text>}
                                <button type="button" class="btn btn-outline-primary">Preview</button>                                
                                </Col>
                            </Row>
                            
                            {/*deals[num].disprice!=""&&
                            <Card.Text>
                                You save &#8377;{disc}
                            </Card.Text>*/}
                            {/* <Button variant="outline-light" >Learn More</Button> */}
                        </Card.Body>
                        {/* <Card.Footer style={{color:"#f0f0f0"}}>{deals[num].provider}</Card.Footer> */}
                    </Card>
                    </Link>
                </Col>
                        )
                    })}

                    
                </Row>
            </Container>
        </div>
    );
}

export default PageFunction;