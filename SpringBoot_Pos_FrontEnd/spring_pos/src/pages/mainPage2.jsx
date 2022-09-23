import React, { useState, useEffect } from 'react';
import '../assets/mainPage.css'
import {Grid, Table, Form, Input, Statistic, Button, Select, Icon, Image, Segment} from 'semantic-ui-react'
import navbar from './navbar';

const LoadingPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

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
                                    <Form.Field
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Register Customer'
                                    />
                                    <Form.Field
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Update Customer'
                                    />
                                    <Form.Field
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Delete Customer'
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8} style={{margin:"50px 0 0 20px"}}>
                            <Input icon='search' placeholder='Search...' style={{width:"49vw", margin:"20px 0 20px 0"}}/>
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Notes</Table.HeaderCell>
                                        <Table.HeaderCell style={{width:"30px"}}>Continue</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>
                                            <Button>Continue</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell>Approved</Table.Cell>
                                        <Table.Cell>Requires call</Table.Cell>
                                        <Table.Cell>
                                            <Button>Continue</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>
                                            <Button>Continue</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row warning>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>
                                            <Button>Continue</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell positive>Approved</Table.Cell>
                                        <Table.Cell warning>Requires call</Table.Cell>
                                        <Table.Cell>
                                            <Button>Continue</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell negative>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>
                                            <Button>Continue</Button>
                                        </Table.Cell>
                                    </Table.Row>
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