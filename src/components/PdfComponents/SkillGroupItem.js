import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "@react-pdf/renderer";
import {SkillItem} from "./SkillItem";
import {Typography} from "@mui/material";


const styles = StyleSheet.create({

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
    secColor: {
        color: '#B74803'
    },

});

export const SkillGroupItem = ({groupName, skills}) => (


    <View style={styles.skillGroup}>
        <Text style={styles.skillGroupHeader}>
            {groupName}
        </Text>
        {skills.map((inputField, index) => (
            <SkillItem key={`${index}`}
                       text={inputField.skillName}
            />
        ))}
    </View>

);
