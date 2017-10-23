import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Grid, Form, Checkbox, Rating, Icon } from 'semantic-ui-react';
import CheckboxGroup from './CheckboxGroup';

const hoptions = [
  {value:'internet',label:'Internet'},
  {value:'breakfast',label:'Breakfast'},
  {value:'parking',label:'Parking'},
  {value:'swiming pool',label:'Swiming Pool'},
  {value:'laundry room',label:'Laundry Room'},
  {value:'gym/fitness',label:'Gym/Fitness'},
  {value:'space well-being',label:'Space Well-being'},
  {value:'conference room',label:'Conference room'},
];

const htypes = [
  {value:'hotel',label:'Hotel'},
  {value:'house/appartment',label:'House/Appartment'},
  {value:'homestay',label:'Homestay'},
  {value:'camping',label:'Camping'},
  {value:'all inclusive',label:'All Inclusive'},
  {value:'half-board',label:'Half-Board'}
];

export default class HostingOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 2
    }
  }
  handleRate = (e, { rating, maxRating }) => {
    console.log('mi rating es', rating);
    this.setState({ value: rating });
    // this.props.stars.input.onChange(rating);
  }
  render() {
    const fields = this.props;
    console.log('HostingOptions state', this.state);
    console.log('HostingOptions', fields);
    return(
      <Grid columns={3}>
        <Field name="hoptions" component={CheckboxGroup} options={hoptions} mainLabel="Options"/>
        <Field name="htypes" component={CheckboxGroup} options={htypes} mainLabel="Type"/>
        <Grid.Column>
          <Form.Group inline>
            <label>Stars</label>
            <Form.Field> 
              <Rating icon='star' defaultRating={2} maxRating={5} onRate={this.handleRate}/>
              <input {...fields.stars.input}  type="hidden" value={this.state.value}/>
            </Form.Field>
          </Form.Group>
        </Grid.Column>
      </Grid>
    )
  }
}