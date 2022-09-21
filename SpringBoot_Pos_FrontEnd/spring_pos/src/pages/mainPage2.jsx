import React, { useState, useEffect } from 'react';
import '../assets/mainPage.css'
import { Grid, Table,Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const LoadingPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    return (
        <div className="container">
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"/>
                </div>
            ) : (
                <div className="main-content">
                    <Grid >
                        <Grid.Column width={7} style={{ margin: "50px 0 0 10px" }}>
                            <Form>
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
                                <Form.Field
                                    id='form-textarea-control-opinion'
                                    control={TextArea}
                                    label='Opinion'
                                    placeholder='Opinion'
                                />
                                <Form.Field
                                    id='form-input-control-error-email'
                                    control={Input}
                                    label='Email'
                                    placeholder='joe@schmoe.com'
                                    error={{
                                        content: 'Please enter a valid email address',
                                        pointing: 'below',
                                    }}
                                />
                                <Form.Field
                                    id='form-button-control-public'
                                    control={Button}
                                    content='Confirm'
                                    label='Label with htmlFor'
                                />
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8} style={{margin:"50px 0 0 20px"}}>
                            <Table celled selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Notes</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell>Approved</Table.Cell>
                                        <Table.Cell>Requires call</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row warning>
                                        <Table.Cell>John</Table.Cell>
                                        <Table.Cell>No Action</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jamie</Table.Cell>
                                        <Table.Cell positive>Approved</Table.Cell>
                                        <Table.Cell warning>Requires call</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Jill</Table.Cell>
                                        <Table.Cell negative>Denied</Table.Cell>
                                        <Table.Cell>None</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default LoadingPage;