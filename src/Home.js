import React from "react";
import { View, Image, Text, StyleSheet} from "react-native";

const introText = 'Testtt ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum sollicitudin lorem, ac dignissim mi cursus et. Cras ultrices maximus ex. Duis ut pulvinar justo. Nulla vitae sem dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sit amet risus id dolor maximus posuere sed a mi. Suspendisse at massa tincidunt, consectetur tortor sed, commodo quam. Nunc tristique massa quis nisl dignissim luctus. Nam consectetur consequat nunc vel semper. Nullam id felis ut tortor ullamcorper maximus ac sit amet elit.'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textContainer: {
        textAlign: 'center',
        paddingTop: 10
    },
  
    subtitle: {
        paddingTop: 5,
    },
    image: {
        height: 200,
        width: 200,
    }
})

const Home = (props) =>
{
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./images/basketball.png')}/>
            <Text style={styles.title}>Welcome to NigNog</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    )
}  

export default Home