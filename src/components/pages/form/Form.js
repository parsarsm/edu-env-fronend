import React, {Fragment} from "react";
import {Button, Checkbox, Form, Message} from "semantic-ui-react";

export default class ProfileForm extends React.Component {
    render() {
        // const {handleSubmit, reset} = this.state

        return (
            <Fragment>
                <Message info>
                    <p>
                        You will don't need any special mappings for <code>Form.Input</code>,
                        because it passed events from native inputs.
                    </p>

                    <p>
                        The situation with other components is more complicated, because the{" "}
                        <code>Field</code> relies on the native events. However, it can be
                        easily with{" "}
                        <a
                            href="https://redux-form.com/7.4.2/docs/api/field.md/#2-a-stateless-function"
                            target="_blank"
                        >
                            stateless function
                        </a>. We recomend to wrap them with generic components to reduce forms
                        complexivity.
                    </p>
                </Message>

                <Form >
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name'/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions'/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form.Group>

                    <Form.Group inline>
                        <label>Quantity</label>

                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name'/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions'/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form.Group>

                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name'/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions'/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>

                    <Form.Group inline>
                        <Form.Button primary>Submit</Form.Button>
                        <Form.Button >Reset</Form.Button>
                    </Form.Group>
                </Form>
            </Fragment>
        );
    };
}
