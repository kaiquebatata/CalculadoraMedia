import React, {useState} from "react";
import { View, Text} from "react-native";
import styles from "./styles";

export default function Resultmedia(props){
    return(

        <View style={styles.resultMedia}>
            <Text style={styles.information}>{props.messageResultMedia}</Text>
            <Text style={styles.numberMedia}>{props.resultMedia}</Text>
            <Text style={styles.information}>{props.dataMedia}</Text>
        </View>
    );
}