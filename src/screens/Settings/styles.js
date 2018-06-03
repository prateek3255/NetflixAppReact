const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
    header:{
        backgroundColor:'#121212'
    },
    back:{ 
        color: "white", 
        fontSize: 19 
    },

    headerTitle:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },
    content:{
        backgroundColor:'#1A1A1A'
    },
    separator:{
        backgroundColor:'#1A1A1A',
        height:deviceHeight/12,
        flex:1,
        justifyContent:'flex-end'
    },
    separatorText:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        marginBottom:deviceHeight/70
    },
    listItem:{
        backgroundColor:'#221F1F',
        height:deviceHeight/10
    },
    listTitle:{
        color:'white',
        fontWeight:'900'
    },
    listSubTitle:{
        color:'white',
        fontWeight:'400'
    },
    listIcon:{
        color:'white'
    },
    alignSwitch:{
        marginTop:deviceHeight/40
    },
    biggerListItem:{
        backgroundColor:'#221F1F',
        height:deviceHeight/8
    },
    biggerBody:{
        height:deviceHeight/9
    },
    modalView:{
        backgroundColor:"black",
        marginTop:deviceHeight/3,
        marginLeft:deviceWidth/10,
        marginRight:deviceWidth/10
    },
    innerModalView:{
        marginTop:deviceHeight/60,
        marginBottom:deviceHeight/60,
        marginLeft:deviceWidth/15,
        marginRight:deviceWidth/15

    },
    modalCancel:{
        textAlign:'right',
        color:'green',
        marginTop:deviceHeight/60,
        fontWeight:'500'
    }
  
  
};
