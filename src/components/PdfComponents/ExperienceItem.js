import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Font
} from "@react-pdf/renderer";
import Face from "../../Face.jpg";



const styles = StyleSheet.create({

    mainBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%'
    },
    section: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '2%',
    },
    sectionHeader: {
        fontSize: 25,
        color: '#022E51',
        fontWeight: 'bold'
    },
    sectionText: {
        fontSize: 17,
        textIndent: 10,
    },
    sectionTextWrapper: {
        marginLeft: 10,
        marginTop: 5
    },
    years: {
        color: '#022E51',
        fontWeight: 'medium'
    },
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
