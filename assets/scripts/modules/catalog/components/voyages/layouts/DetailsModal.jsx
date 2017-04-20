import React from 'react'
import { Button, Header, Image, Modal, Icon, Grid } from 'semantic-ui-react'

export default class DetailsModal extends React.Component {
    constructor(){
        super()
        this.state = { modalOpen: false }
    }
    handleOpen = (e) => {
        this.setState({
            modalOpen: true,
        })
        e.preventDefault()
    }

    handleClose = (e) => this.setState({
        modalOpen: false,
    })
    createButtonAction(){
        if(this.props.options.price){
            return(
                <Button id="modal-card-details" className="catalog-detail-button" onClick={this.handleOpen} basic color='black' attached='bottom'>{this.props.price}</Button>
            );
        }
        return(
            <Button id="modal-card-details" className="catalog-detail-button" onClick={this.handleOpen} basic color='black' attached='bottom'>Details</Button>
        );
    }
    createImage(voyageImage){
        return(
            <img className="image catalog-image" src={voyageImage} onClick={this.handleOpen}/>
        )
    }
    render(){
        let voyage = this.props.voyage
        let price = () =>{
            let value = ""
            if(voyage.price){
                value = "<b>Price</b>: "+ voyage.price+" "
                if(voyage.currency)
                    value += voyage.currency
                value += "<br/>"
            }
            return value
        }
        let duration = () =>{
            return (voyage.duration.text?"<b>Duration</b>: " + voyage.duration.text+"<br/>":"")
        }
        let country = () =>{
            return (voyage.country.text?"<b>Country</b>: " + voyage.country.text+"<br/>":"")
        }
        let location = () =>{
            return (voyage.location.text?"<b>Location</b>: " + voyage.location.text+"<br/>":"")
        }
        let theme = () =>{
            return (voyage.theme.text?"<b>Theme</b>: " + voyage.theme.text+"<br/>":"")
        }
        let voyageImage = () => {
            const lostTravelImage = experiensa_vars.assets_url + 'images/travel-no-image.jpg'
            // console.log(lostTravelImage)
            // console.log('mi ruta es',experiensa_vars.assets_url)
            let image = voyage.cover_image
            let imageSrc
            if(!image.feature_image && image.gallery.length < 1){
                imageSrc = lostTravelImage
            }else{
                if(image.feature_image){
                    imageSrc = image.feature_image
                }else{
                    imageSrc = image.gallery[0]
                }
            }
            return imageSrc
        }
        let itinerary_title = () => {
            let title = ''
            if(voyage.itinerary && voyage.itinerary !== "")
                title = "Itinerary"
            return title
        }
        let actionTrigger
        if(this.props.type == 'button'){
            actionTrigger = this.createButtonAction()
        }else{
            actionTrigger = this.createImage(voyageImage())
        }
        return(
            <Modal trigger={actionTrigger}
                   open={this.state.modalOpen}
                   onClose={this.handleClose}
            >
                <Modal.Header>
                    <h2>{voyage.title}</h2>
                </Modal.Header>
                <Modal.Content>
                    <Grid stackable columns={2}>
                        <Grid.Column width={6}>
                            <div dangerouslySetInnerHTML={{__html: price()}}/>
                            <div dangerouslySetInnerHTML={{__html: duration()}}/>
                            <div dangerouslySetInnerHTML={{__html: country()}}/>
                            <div dangerouslySetInnerHTML={{__html: location()}}/>
                            <div dangerouslySetInnerHTML={{__html: theme()}}/>
                            <br/>
                            <p dangerouslySetInnerHTML={{__html: voyage.excerpt}}></p>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image src={voyageImage()}/>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
                <Modal.Content>
                    <h3>{itinerary_title()}</h3>
                    <Modal.Description dangerouslySetInnerHTML={{__html: voyage.itinerary}}>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="black" onClick={this.handleClose}>Close</Button>
                    <a className="ui positive right labeled icon button">
                        Contact us
                        <Icon name='checkmark'/>
                    </a>
                </Modal.Actions>
            </Modal>
        )
    }
}