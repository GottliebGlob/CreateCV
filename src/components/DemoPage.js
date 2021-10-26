import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    section: {
        margin: 10,
        padding: 10,
    }
});

export const PdfDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>So far </Text>
            </View>
            <View style={styles.section}>
                <Text>so good</Text>
            </View>
        </Page>
    </Document>
);
