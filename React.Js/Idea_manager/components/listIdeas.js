import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class ListIdeaComponent extends React.Component {
    
    static navigationOptions = {
        headerTitle: 'Listing All Ideas',
        headerLeft: null,
    }

    componentDidMount(){
        console.log(this.props.idea);
        // this.props.onrequestidea();
    }

    render () {
        const {idea,error,onrequestidea}=this.props;

        // this.props.dispatch({ type: 'LIST_IDEA'});
        return ( 
            <View style={styles.container}>
                <Text>All Ideas</Text>
                <button onClick={onrequestidea}>get new</button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})

const stateToPropsMapping = state => {
    return {
    idea: state.idea,
    error:state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
    onrequestidea: () => dispatch({ type: "API_CALL_REQUEST" })
    };
}

// const listIdeas = (ideas) => {
//     return {
//         type: 'LIST_IDEAS',
//         ideas
//     }
// }

export default connect(stateToPropsMapping,mapDispatchToProps)(ListIdeaComponent);
