import {useRouter} from 'next/router';
// import {useRouter} from 'next/router';
import classes from "../cards.module.css"
import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel,Breadcrumb,Accordion} from "react-bootstrap";
import {RiShoppingCart2Line } from 'react-icons/ri';
import beautyproducts from "../../json_data/beautyproducts.json"
import bookslist from "../../json_data/bookslist.json"
import earphones from "../../json_data/earphones.json"
import menfashion from "../../json_data/menfashion.json"
import powerbanks from "../../json_data/powerbank.json"
import smartwatch from "../../json_data/smartwatch.json"
import womenfashion from "../../json_data/womenfashion.json"
import {GoLocation} from "react-icons/go"
import {BiUserCircle} from "react-icons/bi"
import { FcApproval } from "react-icons/fc";
import parse from 'html-react-parser';
import { Markup } from 'interweave';

// import dynamic from 'next/dynamic'
// import Link from "next/link"
import Picmodal from '../../components/PictureModal';
import StarsRating from 'stars-rating'
import UserCarousel from '../../components/UserCarousel';
import LinkList2 from '../../components/LinkList2';

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



// export async function getStaticPaths() {
//     return {
//         paths: [
//             {  params: { id_type2_1: 'powerbank',id_type2_2:"0" } },
//             {  params: { id_type2_1: 'earphones' } },
//             {  params: { id_type2_1: 'smartwatch' } },
//             {  params: { id_type2_1: 'books' } },
//             {  params: { id_type2_1: 'menfashion' } },
//             {  params: { id_type2_1: 'womenfashion' } },
//             {  params: { id_type2_1: 'beauty' } },
//             {  params: { id_type2_2: '0' } },
//             {  params: { id_type2_2: '1' } },
//             {  params: { id_type2_2: '2' } },
//             {  params: { id_type2_2: '3' } },
//             {  params: { id_type2_2: '4' } },
//         ],
//         fallback: true
//     }
// }

export async function getStaticPaths() {
    const posts = [
        {
            mainTag: 'powerbank',
            slug: '0'
        },
        {
            mainTag: 'earphones',
            slug: '0'
        },{
            mainTag: 'smartwatch',
            slug: '0'
        },{
            mainTag: 'books',
            slug: '0'
        },{
            mainTag: 'menfashion',
            slug: '0'
        },{
            mainTag: 'womenfashion',
            slug: '0'
        },{
            mainTag: 'beauty',
            slug: '0'
        },
        {
            mainTag: 'powerbank',
            slug: '1'
        },
        {
            mainTag: 'earphones',
            slug: '1'
        },{
            mainTag: 'smartwatch',
            slug: '1'
        },{
            mainTag: 'books',
            slug: '1'
        },{
            mainTag: 'menfashion',
            slug: '1'
        },{
            mainTag: 'womenfashion',
            slug: '1'
        },{
            mainTag: 'beauty',
            slug: '1'
        },
        {
            mainTag: 'powerbank',
            slug: '2'
        },
        {
            mainTag: 'earphones',
            slug: '2'
        },{
            mainTag: 'smartwatch',
            slug: '2'
        },{
            mainTag: 'books',
            slug: '2'
        },{
            mainTag: 'menfashion',
            slug: '2'
        },{
            mainTag: 'womenfashion',
            slug: '2'
        },{
            mainTag: 'beauty',
            slug: '2'
        },
        {
            mainTag: 'powerbank',
            slug: '3'
        },
        {
            mainTag: 'earphones',
            slug: '3'
        },{
            mainTag: 'smartwatch',
            slug: '3'
        },{
            mainTag: 'books',
            slug: '3'
        },{
            mainTag: 'menfashion',
            slug: '3'
        },{
            mainTag: 'womenfashion',
            slug: '3'
        },{
            mainTag: 'beauty',
            slug: '3'
        },
        {
            mainTag: 'powerbank',
            slug: '4'
        },
        {
            mainTag: 'earphones',
            slug: '4'
        },{
            mainTag: 'smartwatch',
            slug: '4'
        },{
            mainTag: 'books',
            slug: '4'
        },{
            mainTag: 'menfashion',
            slug: '4'
        },{
            mainTag: 'womenfashion',
            slug: '4'
        },{
            mainTag: 'beauty',
            slug: '4'
        },
    ];

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    id_type2_1: posts.mainTag,
                    id_type2_2: posts.slug,
                },
            };
        }),
        fallback: true,
    };
}


const PageFunction = (props) => {
    const [state,setState] = useState(0);
    const [visual, setVisual] = useState(1980);
    const [stars, setStars] = useState(0);
    const [namebox,setNamebox] = useState("");
    const [comment,setComment] = useState("");
    const [articleContent,setArticleContent] = useState("");
    const ratingChanged = (newRating) => {
        console.log(newRating)
        setStars(newRating)
    }
    const router = useRouter();
    const {id_type2_1,id_type2_2} = router.query
    const [modalShow, setModalShow] = useState(false);
    const add_new_comment = () =>{
        let main_div = document.getElementById("new_comments");
        // let parser = new DOMParser();
        let new_comment = 
                        `<div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}></BiUserCircle>
                            <span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>${namebox}</span>
                            <StarsRating count={5} value=${stars} size={25} color2={'#ffd700'}></StarsRating>
                            <p>Reviewed in India</p>
                            <pre>
                                ${comment}
                            </pre>
                        </div>`
        // let doc = parser.parseFromString(new_comment, 'text/html');
        // let doc = parse(new_comment);
        // console.log(doc);
        setArticleContent(new_comment)
        // main_div.innerHTML = doc;
    }
    let data_files
    let prod_index = parseInt(id_type2_2)
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
    console.log(router.query)
    console.log(props)
    let disc = data_files[prod_index].orgprice - data_files[prod_index].disprice;
    
    return (
        // <div>
        //     {id_type2_1} + {id_type2_2}
        // </div>
        <Container fluid className={classes.div_back} style={{color:"#040404"}}>
        <Picmodal show={modalShow} onHide={() => setModalShow(false)} image={data_files[prod_index].image}></Picmodal>
                <Row>
                    <Col md={4}>
                            <img src={ data_files[prod_index].image} style={{width:"100%",marginTop:"35px"}} onClick={() => {setModalShow(true)}}></img>
                            <h5 style={{textAlign:"center"}}>Click on Image to zoom in</h5>
                    </Col>
                    <Col md={6}>
                        <br/>
                        {/* <Breadcrumb style={{backgroundColor:"#404040"}}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href={"/"+id_type2_1}>
                            {id_type2_1}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{data_files[prod_index].title.slice(0,10)} - {data_files[prod_index].description[0].slice(0,20)}</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <br/>
                        <h2>{data_files[prod_index].title}</h2>
                        <StarsRating count={5} value={data_files[prod_index].ratings} size={35} color2={'#ffd700'} /><p>Reviewed by {data_files[prod_index].sales-10} people</p>
                        <br/>
                        {data_files[prod_index].disprice!=""&&<h5>MRP: <strike>&#8377;{data_files[prod_index].orgprice}</strike></h5>}
                        {data_files[prod_index].disprice!=""&&<h3>Today's Special Offer: &#8377;{data_files[prod_index].disprice}</h3>}
                        {data_files[prod_index].disprice==""&&<h3>&#8377;{data_files[prod_index].orgprice}</h3>}
                        {data_files[prod_index].disprice!=""&&<h4>
                        You save &#8377;{disc}  ({Math.round((disc)*100/data_files[prod_index].orgprice)}%  OFF)
                        </h4>}
                        <h6>Inclusive of All Taxes</h6>
                        <br/>
                        <h6>Free Delivery:<span>Between 3 to 7 days</span> </h6>
                        <h6>Fastest Delivery:<span>Tomorrow</span> </h6>
                        <br/>
                        <h5>
                            Product Features:
                        </h5>
                        <ul>
                        { data_files[prod_index].description.map((obj,index)=>{
                            return(
                                <li>
                                    {obj}
                                </li>
                            )
                        })}
                        </ul>
                        <br/>
                        <h5>Provided By {data_files[prod_index].provider}</h5>
                        <br/>
                        <Button variant="success" size="lg" onClick={()=>{window.open( data_files[prod_index].link)}}>
                            Shop Now <RiShoppingCart2Line style={{fontSize:"1.5em"}} />
                        </Button>
                    </Col>
                    <Col md={2}>

                    <Accordion defaultActiveKey="1" style={{color:"#040404",backgroundColor:"#acfded",marginTop:"35px"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>With exchange</Accordion.Header>
                        <Accordion.Body>
                        Exchange is currently not available for this product.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Without exchange</Accordion.Header>
                        <Accordion.Body>
                        Quantity:  
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <br/>
                            <br/>
                            <button className="btn" style={{backgroundColor:"#ffd700",borderRadius:"30px",width:"100%"}}>Add to cart</button><br/><br/>
                            <button className="btn" style={{backgroundColor:"#ffd700",borderRadius:"30px",width:"100%"}}>Buy Now</button>
                            <br/>
                            <br/>
                            Secure transaction
                            <br/>
                            <input type="checkbox" id="scales" name="scales"/>
                            <label for="scales">Add gift Options</label>
                            <br/>
                            <GoLocation/> Select delivery location
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    </Col>
                </Row>
                <br/>
                <h3>Customers also Viewed</h3>
                
                <LinkList2 deals={data_files} iden="" Title="" visual={visual} setVisual={setVisual}/>
                <h3>Comments and Reviews</h3>
                <Row>
                    <Col md={3}>
                        <h4>Customer Reviews</h4>
                    <StarsRating count={5} value={data_files[prod_index].ratings} size={60} color2={'#ffd700'} />

                    5 Start
                    <span className={classes.percent_back}>
                      <div style={{width:"85%"}} ></div>
                    </span>
                    <br/>
                    4 Start
                    <span className={classes.percent_back}>
                      <div style={{width:"85%"}} ></div>
                    </span>
                    <br/>
                    3 Start
                    <span className={classes.percent_back}>
                      <div style={{width:"85%"}} ></div>
                    </span>
                    <br/>
                    2 Start
                    <span className={classes.percent_back}>
                      <div style={{width:"85%"}} ></div>
                    </span>
                    <br/>
                    1 Start
                    <span className={classes.percent_back}>
                      <div style={{width:"85%"}} ></div>
                    </span>
                    <br/><br/>
                    <h5>Write a Review</h5>
                    <div style={{margin:"0px", padding:"0px",display:"flex",justifyContent:"center"}} >
                        <StarsRating count={5} value={stars} onChange={ratingChanged} size={40} color2={'#ffd700'} />
                    </div>
                    <div style={{textAlign:"center"}}>
                    <strong >{stars} stars</strong>
                    </div>
                    <br/>
                    <input type="text" name="name-box" value={namebox} className={classes.text_input} placeholder="Your Name..." onChange={(e)=>{setNamebox(e.target.value)}}></input>
                    <br/><br/>
                    <input type="text" name="comment-box" value={comment} className={classes.text_input} placeholder="Your Comments about the product..." onChange={(e)=>{setComment(e.target.value)}} ></input>
                    <div style={{textAlign:"center"}}>
                    <br/>
                    <Button variant="success" onClick={add_new_comment}>Submit</Button>
                    </div>
                    </Col>
                    <Col md={9}>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Anshu Shah</span>
                            <StarsRating count={5} value={5} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Really Great Product.
                            </pre>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Tavisha Singhania</span>
                            <StarsRating count={5} value={3} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Satisfied with the quality of the product but not by BF
                            </pre>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Tavisha Singhania</span>
                            <StarsRating count={5} value={2} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Disappointed the Description didn't match the product
                            </pre>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Brendan Lucas</span>
                            <StarsRating count={5} value={4} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Value for Money
                            </pre>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Vinyas Kulal</span>
                            <StarsRating count={5} value={5} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Worth Purchasing Product
                            </pre>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Amit Shah</span>
                            <StarsRating count={5} value={1} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Don't Buy this product. Total waste of Money
                            </pre>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <BiUserCircle style={{fontSize:"1.7em"}}/><span style={{marginLeft:"10px",fontSize:"1.2em",fontWeight:"bold"}}>Binod Binod</span>
                            <StarsRating count={5} value={5} size={25} color2={'#ffd700'} />
                            <FcApproval style={{fontSize:"1.3em"}}/> <span>Verified User</span>
                            <p>Reviewed in India</p>
                            <pre>
                                Binod
                            </pre>
                        </div>
                        <div style={{margin:"0px",padding:"0px"}} id="new_comments">

                        </div>
                        <Markup id="html_markup" content={articleContent} />
                    </Col>
                </Row>
            </Container>
    );
}

export default PageFunction;

