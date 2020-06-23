import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from "react-redux";

class AddIdeaComponent extends React.Component {
    
    static navigationOptions = {
        headerTitle: 'Submit New Idea',
        headerLeft: null,
    }

    state = {
        globalClientName: '',
        portfolio: '',
        team: '',
        applicationName: '',
        category: '',
        categoryOthers: '',
        ideaName: '',
        ideaDetails: '',
        intendedAudience: '',
        createdBy: '',
        costReductionToClient: 0,
        costReductionToIBM: 0,
        revenueToIBM: 0,
        costReductionToClientORIBMInHRS: 0,
        comments: '',
        confirmMessage: '',
    };

    addIdea = () => {
        fetch("http://localhost:8080/addIdea", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.state)
        })
        .then(response => {
            response.status == 200 ? 
                this.setState({ confirmMessage: 'Idea Added' }) : 
                this.setState({ confirmMessage: 'Error Occured' });
                console.log(this.state);
                this.props.addidea();
                console.log(this.props.idea)

        })
        .catch(this.setState({ confirmMessage: 'Error Occured' }));
    }
    
    render () {
        const{addidea,idea,error}=this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Add New Idea!</Text>
                <Text>{this.state.confirmMessage}</Text>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Global Client Name</Text>
                            </Col>
                            <Col>
                                <Picker selectedValue = {this.state.globalClientName} onValueChange = {text => this.setState({globalClientName: text})}>
                                    <Picker.Item label = "Prudential Financial" value = "Pru" />
                                </Picker>
                                <p>{this.state.globalClientName}</p>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Portfolio</Text>
                            </Col>
                            <Col>
                                <Picker selectedValue = {this.state.portfolio} onValueChange = {text => this.setState({portfolio: text})}>
                                    <Picker.Item label = "Group Insurance" value = "GI" />
                                    <Picker.Item label = "Retirement Services" value = "RS" />
                                    <Picker.Item label = "TCoE/Pramerica" value = "TCOE" />
                                </Picker>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Team</Text>
                            </Col>
                            <Col>
                                <Picker selectedValue = {this.state.team} onValueChange = {text => this.setState({team: text})}>
                                    <Picker.Item label = "App Dev" value = "Dev" />
                                    <Picker.Item label = "Operate/Run" value = "Op" />
                                    <Picker.Item label = "Testing" value = "QA" />
                                    <Picker.Item label = "Client Transmission" value = "CT" />
                                    <Picker.Item label = "Infra" value = "Infra" />
                                </Picker>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Application Name</Text>
                            </Col>
                            <Col>
                                <TextInput placeholder="Application Name"
                                style={styles.textbox}
                                onChangeText={text => this.setState({ applicationName : text})} />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Category</Text>
                            </Col>
                            <Col>
                                <Picker selectedValue = {this.state.category} onValueChange = {text => this.setState({category: text})}>
                                    <Picker.Item label = "Account Growth to IBM" value = "AccGrIBM" />
                                    <Picker.Item label = "Cost Reduction to Prudential" value = "CostRedPRU" />
                                    <Picker.Item label = "Cost Reduction to IBM" value = "CostRedIBM" />
                                    <Picker.Item label = "Process Efficiency - Prudential" value = "PE" />
                                    <Picker.Item label = "Productivity Improvement Prudential" value = "Prod" />
                                    <Picker.Item label = "Others" value = "Others" />
                                </Picker>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Category Others</Text>
                            </Col>
                            <Col>
                                <Picker selectedValue = {this.state.categoryOthers} onValueChange = {text => this.setState({categoryOthers: text})}>
                                    <Picker.Item label = "Account Growth to IBM" value = "AccGrIBM" />
                                    <Picker.Item label = "Cost Reduction to Prudential" value = "CostRedPRU" />
                                    <Picker.Item label = "Cost Reduction to IBM" value = "CostRedIBM" />
                                    <Picker.Item label = "Process Efficiency - Prudential" value = "PE" />
                                    <Picker.Item label = "Productivity Improvement Prudential" value = "Prod" />
                                    <Picker.Item label = "Others" value = "Others" />
                                </Picker>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Idea Name</Text>
                            </Col>
                            <Col>
                                <TextInput placeholder="Idea Name"
                                style={styles.textbox}
                                onChangeText={text => this.setState({ ideaName : text})} />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Idea Details</Text>
                            </Col>
                            <Col>
                                <TextInput placeholder="Idea Details"
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textarea}
                                onChangeText={text => this.setState({ ideaDetails : text})} />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Intended Audience</Text>
                            </Col>
                            <Col>
                                <Picker selectedValue = {this.state.intendedAudience} onValueChange = {text => this.setState({intendedAudience: text})}>
                                    <Picker.Item label = "Client IT" value = "IT" />
                                    <Picker.Item label = "Client Business" value = "ClientBus" />
                                    <Picker.Item label = "End Client" value = "EndClient" />
                                    <Picker.Item label = "IBM" value = "IBM" />
                                </Picker>
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Created By</Text>
                            </Col>
                            <Col>
                                <TextInput placeholder="Created By"
                                style={styles.textbox}
                                onChangeText={text => this.setState({ createdBy : text})} />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Cost Reduction To Client</Text>
                            </Col>
                            <Col>
                                <TextInput
                                keyboardType='numeric'
                                maxLength={3}
                                style={styles.textbox}
                                onChangeText={text => this.setState({ costReductionToClient : text})} 
                                defaultValue='0' />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Cost Reduction To IBM</Text>
                            </Col>
                            <Col>
                                <TextInput
                                keyboardType='numeric'
                                maxLength={3}
                                style={styles.textbox}
                                onChangeText={text => this.setState({ costReductionToIBM : text})}
                                defaultValue='0' />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Revenue To IBM</Text>
                            </Col>
                            <Col>
                                <TextInput
                                keyboardType='numeric'
                                maxLength={3}
                                style={styles.textbox}
                                onChangeText={text => this.setState({ revenueToIBM : text})}
                                defaultValue='0' />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Cost Reduction To Client/IBM In HRS</Text>
                            </Col>
                            <Col>
                                <TextInput
                                keyboardType='numeric'
                                maxLength={3}
                                style={styles.textbox}
                                onChangeText={text => this.setState({ costReductionToClientORIBMInHRS : text})}
                                defaultValue='0' />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <View style={styles.rowContainer}>
                    <Grid>
                        <Row style={styles.rowContainer}>
                            <Col>
                                <Text>Comments</Text>
                            </Col>
                            <Col>
                                <TextInput
                                multiline = {true}
                                numberOfLines = {4}
                                style={styles.textarea}
                                onChangeText={text => this.setState({ comments : text})} />
                            </Col>
                        </Row>
                    </Grid>
                </View>
                <Button title="Add Your Idea" onPress={() => {
                    this.addIdea()
                }}/>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('ListIdea')
                    }}
                    title="All Ideas"
                />
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
      idea: state.dog,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
      addidea: () => dispatch({ type: "API_CALL_REQUEST" })
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(AddIdeaComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rowContainer: {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        flex: 1
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textbox: {
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
    },
    textarea: {
        justifyContent: 'flex-start',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    }
  });
  