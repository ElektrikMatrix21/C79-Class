import React, {Component} from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import MyHeader from '../components/MyHeader.js'
import db from '..config.js'
import firebase from 'firebase'

export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.setState({
            userId: firebase.auth().currentUser.email,
            bookName: '',
            reasonToRequest: '',
        })
    }

    createUniqueId(){
        return Math.random().toString(36).subString(7)
    }

    addRequest=(bookName, reasonToRequest)=>{
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();
        db.collection('requested_books'.add({
            "user_id": userId,
            "book_name": bookName,
            "reason_to_request": reasonToRequest,
            "request_id": randomRequestId
        }))
        this.setState({
            bookName: '',
            reasonToRequest: ''
        })
        return(
            Alert.alert("Book Requested Successfully")
        )
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <MyHeader title="Request Book"/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput style={styles.formTextInput} placeholder="Enter Book Name" onChangeText={(text)=>{
                        this.setState({
                            bookName: text
                        })
                    }}
                    value={this.state.bookName}
                    />
                    <TextInput style={styles.formText, {height:300}} multiLine numberOfLines={8} placeholder="Why Do You Need The Book?" onChangeText={(text)=>{
                        this.setState({
                            reasonToRequest: text
                        })
                    }}
                    value={this.state.reasonToRequest}
                    />
                    <TouchableOpacity style={styles.button} onPress>
                        <Text>
                            Request
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}