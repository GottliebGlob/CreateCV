import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "@react-pdf/renderer";


const styles = StyleSheet.create({

    place: {
        fontWeight: 'bold',
        textOverflow: 'ellipsis',
    },
    placeSec: {
        fontSize: 17,
        color: '#022E51'
    },
    placeWrapper: {
        flexDirection: 'column',
        marginLeft: 50,
        marginRight: 100
    },
    experienceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    }

});

export const ExperienceItem = ({firstText, secondText, start, end}) => (


    <View style={styles.experienceWrapper}>
        <Text style={styles.years}>
            • {
            end ? `${start}-${end}` : `${start}          `
        }
        </Text>
        <View style={styles.placeWrapper}>
            <Text style={styles.place}>
                {firstText}
            </Text>
            <Text style={styles.placeSec}>
                {secondText}
            </Text>
        </View>
    </View>

);
