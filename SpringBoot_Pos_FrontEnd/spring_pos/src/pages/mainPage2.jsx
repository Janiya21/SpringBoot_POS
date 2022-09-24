import React, { useState, useEffect } from 'react';
import '../assets/mainPage.css'
import {Grid, Table, Form, Input, Statistic, Button, Select, Icon, Image, Segment} from 'semantic-ui-react'
import Navbar from './navbar';
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const LoadingPage = () => {
    const [loading, setLoading] = useState(false);
    const [customerData, setCustomers] = useState([]);
    const [submitData, setSubmitData] = useState({});

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

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

        let res = await postCustomer(this.state);
        console.log(res);

        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
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
            axios.post('http://localhost:8081/easyRents/api/v1/customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
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
                        <Grid.Column width={7} style={{ margin: "70px 0 0 10px" }}>
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
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='First name'
                                        placeholder='First name'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='Last name'
                                        placeholder='Last name'
                                    />
                                    <Form.Field
                                        control={Select}
                                        options={genderOptions}
                                        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                                        placeholder='Gender'
                                        search
                                        searchInput={{ id: 'form-select-control-gender' }}
                                    />

                                </Form.Group>
                                <Form.Field>
                                    <label>First Name</label>
                                    <input placeholder='First Name' />
                                </Form.Field>
                                <Form.Group style={{margin:"40px"}}>
                                    <Button >Save Customer</Button>
                                    <Button >Update Customer Customer</Button>
                                    <Button >Delete Customer</Button>
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8} style={{margin:"50px 0 0 20px"}}>
                            <Input icon='search' placeholder='Search...' style={{width:"49vw", margin:"20px 0 20px 0"}}/>
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>ID</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell style={{width:"30px"}}>TelNo</Table.HeaderCell>
                                        <Table.HeaderCell>Go</Table.HeaderCell>
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
                                                    <Button>Continue</Button>
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