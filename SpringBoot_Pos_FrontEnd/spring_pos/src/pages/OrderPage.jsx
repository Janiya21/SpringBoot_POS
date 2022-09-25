import React, { useState, useEffect } from 'react';
import '../assets/OrderPage.css'
import Navbar from './navbar';
import {Grid, Table, Form, Input, Button, Dropdown, Divider, Header} from 'semantic-ui-react';

const OrderPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        loadHistory();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    function loadHistory(){
        let customer = localStorage.getItem("customerData");
        console.log(customer);
        return customer;
    }

    const friendOptions = [
        {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess',
            image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
        },
        {
            key: 'Elliot Fu',
            text: 'Elliot Fu',
            value: 'Elliot Fu',
            image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
        },
        {
            key: 'Stevie Feliciano',
            text: 'Stevie Feliciano',
            value: 'Stevie Feliciano',
            image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
        },
        {
            key: 'Christian',
            text: 'Christian',
            value: 'Christian',
            image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
        },
        {
            key: 'Matt',
            text: 'Matt',
            value: 'Matt',
            image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
        },
        {
            key: 'Justen Kitsune',
            text: 'Justen Kitsune',
            value: 'Justen Kitsune',
            image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
        },
    ]


    return (
        // style={{height:"100vh",backgroundImage:'url("https://www.hotshot-sports.com/wp-content/uploads/multisports_650017870.jpg',backgroundRepeat:"no-repeat, repeat"}}
        <div className="container" >
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"/>
                    <h1 className={"header-shop"}>Sports  360</h1>
                </div>
            ) : (
                <div className="main-content" style={{opacity:"0.9"}}>
                    <Navbar />

                    <Grid style={{marginLeft:"1vw"}}>
                        <Grid.Column width={5} style={{ margin: "40px 0 0 10px" }}>
                            <Form>
                                <Form.Group>
                                    <Dropdown style={{width:"20vw", marginLeft:"10px", height:"5vh"}}
                                        placeholder='Select Sport'
                                        fluid
                                        selection
                                        options={friendOptions}
                                    />

                                    <Input placeholder='Search item here..' style={{ width:"20vw",margin: "0 0 0 30px" }} />
                                </Form.Group>
                            </Form>

                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell>Approved</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell>Denied</Table.Cell>
                                    </Table.Row>
                                    <Table.Row warning>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell positive>Approved</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell negative>Denied</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>

                            <Form style={{marginTop:"30px"}}>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-desc'
                                        control={Input}
                                        label='Description'
                                        placeholder='item description'
                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Field style={{width:"14vw"}}
                                                id='form-input-control-qtyHand'
                                                control={Input}
                                                label='Quantity on Hand'
                                                placeholder='item quantity'
                                    />
                                    <Form.Field style={{width:"15vw"}}
                                                id='form-input-control-unitPrice'
                                                control={Input}
                                                label='Unit Price'
                                                placeholder='Unit Price'
                                    />
                                </Form.Group>
                                <Divider inverted />
                                <Form.Group >
                                    <Form.Field style={{width:"14vw"}}
                                                id='form-input-control-qty'
                                                control={Input}
                                                placeholder='order quantity'
                                    />
                                    <Form.Field style={{width:"15vw"}}
                                                id='form-input-control-discount'
                                                control={Input}
                                                placeholder='discount'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Field style={{width:"20vw"}}
                                                id='form-input-control-unitPrice'
                                                control={Input}
                                                placeholder='total'
                                    />
                                    <Form.Field style={{marginLeft:"1 0px"}}
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Add To Cart'
                                    />
                                </Form.Group>
                            </Form>

                        </Grid.Column>

                        <Grid.Column width={10} style={{margin:"30px 0 0 20px"}}>
                            <Header as='h2' image='https://www.pngitem.com/pimgs/m/522-5226692_my-shopping-cart-icon-for-my-cart-hd.png' content='Cart Items' />
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Notes</Table.HeaderCell>
                                        <Table.HeaderCell>Notes</Table.HeaderCell>
                                        <Table.HeaderCell>Notes</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell>Approved</Table.Cell>
                                        <Table.Cell>Requires call</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row warning>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell positive>Approved</Table.Cell>
                                        <Table.Cell warning>Requires call</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell negative>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell negative>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Input disabled placeholder='Absolute Total' style={{margin:"10px 0 0 49vw"}}/> <br />
                            <Input disabled placeholder='Discount' style={{margin:"10px 0 0 49vw"}}/> <br />
                            <Input disabled placeholder='Total Amount' style={{margin:"10px 0 0 49vw"}}/> <br />
                            <Form.Field style={{margin:"10px 0 0 49vw", width:"11.5vw"}}
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Checkout Order'
                            />
                        </Grid.Column>
                    </Grid>
                </div>
            )}
        </div>
    );
}

export default OrderPage;