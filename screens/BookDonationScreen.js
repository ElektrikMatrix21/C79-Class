import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import {ListItem} from 'react-native-elements'
import db from '..config.js'
import MyHeader from '..components/MyHeader.js'

export default class BookDonationScreen extends Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null;
    }

    componentDidMount(){
        this.getRequestedBooksList()
    }

    componentWillUnmount(){
        this.requestRef()
    }

    keyExtractor=(item, index)=>
        index.toString()
        renderItem=({
            item, i
        })=>{
            return(
                <ListItem/>
            )
            }

    getRequestedBooksList = ()=>{
        this.requestRef = db.collection("requested_books").onSnapshot((snapshot)=>{
            var requestedBooksList = snapshot.docs.map(document=>
                document.data()
            )
            this.setState({
                requestedBooksList: requestedBooksList
            })
        })
    }

    render(){
        return(
            <View>
                <Text>
                    Book Donation
                </Text>
            </View>
        )
    }
}