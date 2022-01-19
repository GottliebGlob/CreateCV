import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "@react-pdf/renderer";


const styles = StyleSheet.create({

    skillGroupItem: {
        marginLeft: 10,
        paddingTop: 2
    },
    skillGroupItemText: {
        fontWeight: 'medium',
        fontSize: 17,
        color: '#022E51'
    },

});

export const SkillItem = ({text}) => (

    <View style={styles.skillGroupItem}>
        <Text style={styles.skillGroupItemText}>
            • {text}
        </Text>
    </View>

);
