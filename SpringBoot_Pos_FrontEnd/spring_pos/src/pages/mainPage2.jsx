import React, { useState, useEffect } from 'react';
import '../assets/mainPage.css'
import {Grid, Table, Form, Input, Statistic, Button, Select, Icon, Image, Segment} from 'semantic-ui-react'
import Navbar from './navbar';
import axios from "axios";
import {Link} from "react-router-dom";
import history from '../history';

const LoadingPage = () => {
    const [loading, setLoading] = useState(false);
    const [customerData, setCustomers] = useState([]);
    const [submitData, setSubmitData] = useState({});

    useEffect(() => {
        setLoading(true);
        loadCustomers().then(r => {
           setCustomers(r.data)
        })
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        let cusData = {
            "id": "C-006",
            "name": "Jhonny",
            "address": "Maharagama",
            "telNo": "0717689433"
        }

        let res = await postCustomer(cusData);
        console.log(res);

        if (res.status === 201) {
            alert("Done")
        } else {
            alert("Error");
        }
    }
    /*=====================================================*/
    function loadCustomers() {
        return axios
            .get(`http://localhost:8081/app/api/v1/customer`)
            .then((response) => {
                if(response.status===200){
                    console.log(response.data)
                    return response.data;
                }
            }).catch(error => {
                console.log('error', error)
                return error
            });
    }

    const postCustomer = async (data) => {
            const promise = new Promise((resolve, reject) => {
                axios.post('http://localhost:8081/app/api/v1/customer', data)
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            });
            return await promise;
    }

    const navigateToOrder = (data) => {
        localStorage.setItem('customerData', data)
        history.push({pathname:'/order'});

        console.log(data);
    }

    /*=====================================================*/
    return (
        // style={{height:"100vh",backgroundImage:'url("https://www.hotshot-sports.com/wp-content/uploads/multisports_650017870.jpg',backgroundRepeat:"no-repeat, repeat"}}
        <div className="container" >
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"/>
                    <h1 className={"header-shop"}>Sports  360</h1>
                    {/*<img className={"load-image"} src={"https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png"} alt={"s"}/>*/}
                </div>
            ) : (
                <div className="main-content" style={{opacity:"0.9"}}>
                    <Navbar />
                    <Grid >
                        <Grid.Column width={6} style={{ margin: "70px 0 0 10px" }}>
                            <Segment inverted>
                                <Statistic.Group inverted>
                                    <Statistic>
                                        <Statistic.Value>22</Statistic.Value>
                                        <Statistic.Label>Faves</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>31,200</Statistic.Value>
                                        <Statistic.Label>Views</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>22</Statistic.Value>
                                        <Statistic.Label>Members</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>22</Statistic.Value>
                                        <Statistic.Label>Members</Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                            </Segment>
                            <Form style={{marginTop:"30px"}}>
                                <Form.Field
                                    id='form-input-control-name'
                                    control={Input}
                                    label='Name'
                                    placeholder='name'
                                />
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-email'
                                        control={Input}
                                        label='Email'
                                        placeholder='Email Address'
                                    />
                                    <Form.Field
                                        id='form-input-control-telNo'
                                        control={Input}
                                        label='TelNo'
                                        placeholder='Telephone No'
                                    />

                                </Form.Group>
                                <Form.Group style={{margin:"20px"}}>
                                    <Button onClick={submitHandler}>Save Customer</Button>
                                    <Button >Update Customer Customer</Button>
                                    <Button >Delete Customer</Button>
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={9} style={{margin:"50px 0 0 20px"}}>
                            <Input icon='search' placeholder='Search...' style={{width:"49vw", margin:"20px 0 20px 0"}}/>
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>ID</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell style={{width:"40px"}}>TelNo</Table.HeaderCell>
                                        <Table.HeaderCell style={{width:"30px"}}>Continue</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {customerData.map((data) => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{data.id}</Table.Cell>
                                                <Table.Cell>{data.name}</Table.Cell>
                                                <Table.Cell>{data.address}</Table.Cell>
                                                <Table.Cell>{data.telNo}</Table.Cell>
                                                <Table.Cell>
                                                    <Button onClick={() => navigateToOrder(data)}>
                                                        <Link to={{pathname:'/order', query:{test:'test'}}} >
                                                            Continue
                                                        </Link>
                                                    </Button>
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid>
                </div>
            )}
        </div>
    );
}

export default LoadingPage;