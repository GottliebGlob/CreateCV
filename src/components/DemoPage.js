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
import Face from '../Face.jpg'
import Regular from '../fonts/Roboto-Regular.ttf'
import Bold from '../fonts/Roboto-Bold.ttf'
import Medium from '../fonts/Roboto-Medium.ttf'


Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: Regular,
            fontWeight: 'regular'
        },
        {
            src: Medium,
            fontWeight: 'medium'
        },
        {
            src: Bold,
            fontWeight: 'bold'
        }
    ]
})

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
    },
    header: {
        backgroundColor: '#022E51',
        paddingTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    position: {
        color: 'white',
        fontSize: 20
    },
    contacts: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#B74803',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 5,
        marginTop: 5,
        paddingBottom: 5,
        minHeight: 20
    },
    contactsText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        paddingTop: 5,
        minWidth: '30%',
        maxWidth: '50%',
        paddingRight: 5
    },
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
    },
    skillGroup: {
        marginLeft: 160
    },
    skillGroupHeader: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    skillGroupItem: {
        marginLeft: 10,
        paddingTop: 2
    },
    skillGroupItemText: {
        fontWeight: 'medium',
        fontSize: 17,
        color: '#022E51'
    },
    languages: {
        position: 'absolute',
        bottom: 0,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B74803',
        width: '100%'
    },

});


export const PdfDocument = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerImage}>
                    <Image src={Face}/>
                </View>

                <Text style={styles.name}>
                    {`${props.name}  ${props.soname}`}
                </Text>
                <Text style={styles.position}>
                    {props.position}
                </Text>


                <View style={styles.contacts}>

                    { props.email.length > 0 && ( <Text style={styles.contactsText}>
                            {props.email}
                        </Text> )}

                    { props.phone.length > 0 && ( <Text style={styles.contactsText}>
                        {props.phone}
                    </Text> )}

                    { props.linkedin.length > 0 && ( <Text style={styles.contactsText}>
                        {props.linkedin}
                    </Text> )}

                    { props.skype.length > 0 && ( <Text style={styles.contactsText}>
                        {props.skype}
                    </Text> )}

                    { props.telegram.length > 0 && ( <Text style={styles.contactsText}>
                        {props.telegram}
                    </Text> )}

                    { props.github.length > 0 && ( <Text style={styles.contactsText}>
                        {props.github}
                    </Text> )}

                </View>
            </View>

            <View style={styles.mainBody}>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>
                        PROFILE
                    </Text>
                    <View style={styles.sectionTextWrapper}>
                        <Text style={styles.sectionText}>
                            {props.profile}
                        </Text>
                    </View>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>
                        EXPERIENCE
                    </Text>
                    <View style={styles.sectionTextWrapper}>
                        <View style={styles.experienceWrapper}>
                            <Text style={styles.years}>
                                • 2019-2021
                            </Text>
                            <View style={styles.placeWrapper}>
                                <Text style={styles.place}>
                                    Spender Money Tracker
                                </Text>
                                <Text style={styles.placeSec}>
                                    Full Stack Developer
                                </Text>
                            </View>

                        </View>

                        <View style={styles.experienceWrapper}>
                            <Text style={styles.years}>
                                • 2017-2019
                            </Text>
                            <View style={styles.placeWrapper}>
                                <Text style={styles.place}>
                                    Auth input
                                </Text>
                                <Text style={styles.placeSec}>
                                    React Native Developer
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>
                        EDUCATION
                    </Text>
                    <View style={styles.sectionTextWrapper}>
                        <View style={styles.experienceWrapper}>
                            <Text style={styles.years}>
                                • 2017-2021
                            </Text>
                            <View style={styles.placeWrapper}>
                                <Text style={styles.place}>
                                    Volodymyr Dahl National University
                                </Text>
                                <Text style={styles.placeSec}>
                                    Computer Science bachelor's degree
                                </Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>
                        SKILLS
                    </Text>
                    <View style={styles.skillGroup}>
                        <Text style={styles.skillGroupHeader}>
                            Languages/Frameworks
                        </Text>
                        <View style={styles.skillGroupItem}>
                            <Text style={styles.skillGroupItemText}>
                                • JavaScript
                            </Text>
                            <Text style={styles.skillGroupItemText}>
                                • React Native
                            </Text>
                            <Text style={styles.skillGroupItemText}>
                                • Typescript
                            </Text>
                        </View>

                    </View>
                </View>

                <View style={styles.languages} fixed>

                    <Text style={styles.contactsText}>
                        • Ukrainian (C1)
                    </Text>
                    <Text style={styles.contactsText}>
                        • Russian (C1)
                    </Text>
                    <Text style={styles.contactsText}>
                        • English (B2)
                    </Text>
                </View>
            </View>
        </Page>
    </Document>
);
