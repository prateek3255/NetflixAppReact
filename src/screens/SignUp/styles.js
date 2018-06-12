const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;

export default{
    mainContent:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    contContent:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:deviceHeight    
    },
    mainView:{
        // backgroundColor:'black',
        flex:0.5,
        width:deviceWidth*(6/7)
    },
    tick:{
        color:"#C14748",
        fontSize:50
    },
    mainBold:{
        fontWeight:'bold',
        fontSize:19
    },
    mainButton:{
        flex:0.2,
        width:deviceWidth*(6/7),
        backgroundColor:"#C14748",
        justifyContent:"center",
        alignItems:"center"
    },
    mainButtonText:{
        color:'white',
        fontSize:15,
    },
    mainEmpty:{
        flex:0.1
    },
    contentView:{
        flex:0.95,
        width:deviceWidth*(6/7),
        height:deviceHeight, 
    },
    packageView:{
        flex:0.25,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    package:{
        flex:0.32,
        height:deviceHeight/12,
        justifyContent:"center",
        alignItems:"center"
    },
    packageText:{
        color:"white",
        fontWeight:"bold"
    },
    benifitView:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    benifitText:{
        fontSize:18
    },
    contentEmpty:{flex:0.05},
    centerText:{textAlign:"center"},
    contentButton:{
        flex:0.10,
        width:deviceWidth*(6/7),
        backgroundColor:"#C14748",
        justifyContent:"center",
        alignItems:"center"
    },
    selected:{
        backgroundColor:"#C14748"
    },
    notSelected:{
        backgroundColor:"#eca1a6"
    },
    selectedText:{
        color:"#C14748"
    },
    notSelectedText:{
        color:"grey"
    }
}


